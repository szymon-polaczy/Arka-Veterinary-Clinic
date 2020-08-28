import { useQuery } from '@apollo/react-hooks'
import gpl from 'graphql-tag'
import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'

const AboutUs = Styled.section`
  padding: 3rem 1rem;
  background: ${props => props.theme.akcent};
  max-width: 2000px;
  margin: 0 auto;

  a {
    display: block;
    font-size: 1.5rem;
    letter-spacing: .1rem;
    font-family: ${props => props.theme.secondaryFontFamily};
    text-align: center;
    margin: 0 auto .5rem auto;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    text-align: center;
    max-width: 40ch;
    line-height: 140%;
    margin: 0 auto;
  }

  @media (min-width: 1200px) {
    padding: 3rem;

    .wrapper {
      display: grid;
      align-items: center;
      grid-template-columns: repeat(2, 1fr);
    }

    p {
      margin: 0 auto;
    }

    a {
      width: min-content;
      font-size: 3rem;
    }
  }
`

const AboutUsSection = () => {
  const query = gpl`
    query MyQuery {
      aboutUses {
        short
      }
    }
  `
  
  const { data } = useQuery(query); 

  return (
    <AboutUs>
      <div className="wrapper">
        <Link to="/kontakt">Poznaj nas bliżej</Link>
        <p>{data === undefined ? 'Loading...' : data.aboutUses[0].short}</p>
      </div>
    </AboutUs>
  )
}

export default AboutUsSection