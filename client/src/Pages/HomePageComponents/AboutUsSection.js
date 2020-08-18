import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'

const AboutUs = Styled.section`
  padding: 3rem 1rem;
  background: #548493;
  max-width: 2000px;
  margin: 0 auto;

  a {
    display: block;
    font-size: 1.5rem;
    letter-spacing: .1rem;
    font-family: 'Barrio', cursive;
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
  return (
    <AboutUs>
      <div className="wrapper">
        <Link to="/kontakt">Poznaj nas bliżej</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Suspendisse luctus ipsum ut interdum malesuada. Donec tellus nibh,
        efficitur nec laoreet vel, tempor at libero. Maecenas congue nulla
        ec quam lacinia accumsan. Etiam interdum varius venenatis. Quisque 
        nec congue ipsum, et tempus risus. Vestibulum lacinia sed magna non 
        euismod. Orci varius natoque penatibus et magnis dis parturient 
        montes, nascetur ridiculus mus. Sed sollicitudin lectus 
        vel nunc pretium iaculis</p>
      </div>
    </AboutUs>
  )
}

export default AboutUsSection