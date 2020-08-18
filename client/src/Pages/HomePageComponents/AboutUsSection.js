import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'

const AboutUs = Styled.section`
  padding: 3rem 1rem;
  background: #548493;
  max-width: 2000px;
  margin: 0 auto;

  .wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }

  section {
    text-align: center;
    display: flex;
    flex-flow: column-reverse;
    align-items: center;

    a {
      font-size: 1.5rem;
      letter-spacing: .1rem;
      padding-top: .3rem;
      font-family: 'Barrio', cursive;
      margin-bottom: .5rem;

      &:hover {
        text-decoration: underline;
      }
    }

    img {
      max-width: 5rem;
    }

    @media (min-width: 1200px) {
      flex-flow: row;
      width: 20rem;

      img {
        padding-left: .5rem;
      }
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
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    p {
      margin: unset;
      margin-left: 10rem;
      padding: 0;
    }

    section {
      img {
        display: none;
      }

      a {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 5rem;
        font-size: 3rem;
      }
    }
  }
`

const AboutUsSection = () => {
  return (
    <AboutUs>
      <div className="wrapper">
        <section>
            <Link to="/kontakt">Poznaj nas bliżej</Link>
            <img src="Images/svg/crow-solid.svg" alt="Ptaszek"/>
        </section>
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