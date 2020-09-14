import { useQuery } from '@apollo/react-hooks'
import gpl from 'graphql-tag'
import React from "react";
import Styled from "styled-components";

const People = Styled.section`
  padding: 3rem 1rem;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;

  h2 {
    font-size: 2.5em;

    &::after {
			display: block;
			content: '';
			width: 10rem;
			height: 2px;
			background: ${props => props.theme.akcent};
			transition: .15s transform ease-out;
      margin: .65rem auto 0 auto;
    }
  }

  article {
    margin-top: 5rem;

    img {
      width: 280px;
      height: 280px;
      border-radius: 50%;
      object-fit: cover;
    }

    h3, h4 {
      margin: 0;
      padding: 0;
      font-size: 1.3rem;
      letter-spacing: .1rem;
      font-family: ${props => props.theme.secondaryFontFamily};
    }

    h3 {
      margin-top: .8rem;
      margin-bottom: .5rem;
    }

    p {
      line-height: 130%;
    }

    @media (min-width: 900px) {
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      text-align: left;
      margin-top: 2rem;

      img {
        padding: 2rem;
        width: 320px;
        height: 320px;
      }

      p {
        font-size: 1.1rem;
      }

      &:nth-child(even) {
        flex-flow: row-reverse;
        text-align: right;
      }
    }

    @media (min-width: 1200px) {
      margin-top: 0;

      img {
        width: 350px;
        height: 350px;
        padding: 1rem 2rem;
      }

      h3, h4 {
        font-size: 1.4rem;
      }

      p {
        font-size: 1.2rem
        line-height: 140%;
      }
    }
  }
`;

const getOneWorker = ({id, photo, fullName, education, description}) => {
  return (
    <article key={id}>
      <img src={photo.url} alt={fullName} title={fullName} loading="lazy"/>
      <section>
        <h3>{fullName}</h3>
        <h4>{education}</h4>
        <p>{description}</p>
      </section>
    </article>
  )
}

const PeopleSection = () => {
  const query = gpl`
    query MyQuery {
      workers {
        id
        photo {
          url
        }
        fullName
        education
        description
      }
    }
  `
  
  const { loading, error, data } = useQuery(query); 

  return (
    <People>
      <h2>Oto ludzie dbający o to co dla Ciebie <br/> Najważniejsze</h2>
      <section>
      { loading ? 'Ładowanie...' : 
        error !== undefined ? 'Coś poszło nie tak!' :
        data.workers.map(worker => getOneWorker(worker))}
      </section>
    </People>
  );
};

export default PeopleSection;
