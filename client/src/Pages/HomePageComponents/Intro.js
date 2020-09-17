import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'

const Section = Styled.section`
  .big-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    max-width: 2000px;
    margin: 0 auto;

    img {
      max-width: 5rem;
      transition: .2s transform ease-out;
    }
  
    a {
      text-align: center;
      padding: 3rem;

      h2 {
        letter-spacing: .1rem;
			  font-family: ${props => props.theme.secondaryFontFamily};
      }
    
      &:nth-child(2) {
        background: ${props => props.theme.light};
        color: ${props => props.theme.dark};
      }

      &:hover {
        p::after {
          transform: scale(1);
        }

        img {
          transform: scale(1.1);
          transition: .35s transform ease-out;
        }
      }
    }

		p::after {
			display: block;
			content: '';
			width: 10rem;
			height: 2px;
			background: ${props => props.theme.akcent};
			transform: scaleX(0);
			transition: .15s transform ease-out;
      margin: .35rem auto 0 auto;
    }

    @media (min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
  
      a:nth-child(2) {
        grid-column: 1 / span 2;
        grid-row: 2 / span 1;
      }
    }
  
    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
  
      a:nth-child(2) {
        grid-column: unset;
        grid-row: unset;
      }
    }
  
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
      
      a:nth-child(2) {
        grid-column: 2 / span 2;
      }
    }
  }
`

const Intro = () => {
  return (
    <Section>
      <div className="big-wrapper" title="Poczytaj naszego bloga">
        <Link to="/blog">
          <article>
            <img src="Images/svg/comment-medical-solid.svg" alt="Rozmowa" loading="lazy"/>
            <h2>Blog</h2>
            <p>Zrozum lepiej swoją rodzinę</p>
          </article>
        </Link>
        <Link to="/oferta" title="Zobacz naszą ofertę">
          <article>
            <img src="Images/svg/child-solid.svg" alt="Człowiek" loading="lazy"/>
            <h2>Nasza Oferta</h2>
            <p>Co możemy dla niego zrobić?</p>
          </article>
        </Link>
        <Link to="/galeria" title="Oto nasze zwierzęta">
          <article>
            <img src="Images/svg/cat-solid.svg" alt="Kotek" loading="lazy"/>
            <h2>Galeria</h2>
            <p>Poznaj naszych przyjaciół</p>
          </article>
        </Link>
      </div>
    </Section>
  )
}

export default Intro;