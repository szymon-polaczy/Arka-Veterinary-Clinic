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
    }
  
    a {
      text-align: center;
      padding: 3rem;
    
      &:nth-child(2) {
        background: #fff;
        color: #1b1b1b;
      }

      &:hover {
        p::after {
          transform: scale(1);
        }
      }
    }

		p::after {
			display: block;
			content: '';
			width: 10rem;
			height: 2px;
			background: #548493;
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
      <div className="big-wrapper">
        <Link to="/blog">
          <article>
            <img src="Images/svg/comment-medical-solid.svg" alt="Rozmowa	"/>
            <h2>Blog</h2>
            <p>Zrozum lepiej swoją rodzinę</p>
          </article>
        </Link>
        <Link to="/oferta">
          <article>
            <img src="Images/svg/child-solid.svg" alt="Człowiek"/>
            <h2>Nasza Oferta</h2>
            <p>Co możesz dla niego zrobić?</p>
          </article>
        </Link>
        <Link to="/galeria">
          <article>
            <img src="Images/svg/cat-solid.svg" alt="Kotek"/>
            <h2>Galeria</h2>
            <p>Poznaj naszych przyjaciół</p>
          </article>
        </Link>
      </div>
    </Section>
  )
}

export default Intro;