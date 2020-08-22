import React from 'react'
import Styled from 'styled-components'

const Container = Styled.section`
  padding: 1rem;
  text-align: center;

  h2,p {
    margin: 0;
    padding: 0;
  }

  h2 {
    font-size: 2.2rem;
    letter-spacing: .1rem;
    font-family: 'Barrio', cursive;
    margin-bottom: .35rem;
  }

  p {
    line-height: 130%;
    font-size: 1.2rem;
  }
`

const AboutOurBlog = () => {
  return (
    <Container>
      <h2>Oto i nasz blog</h2>
      <p>Postanowiliśmy stworzyć bloga w celu pomocy właścicielom z ich 
          zwierzakami. Wszystko co tu znajdziesz jest napisane przez 
          profesjonalistów i powstało aby jak najbardziej pomóc 
          zwierzakowi i Tobie poczuć że tworszycie jedną rodzinę</p>
    </Container>

  )
}

export default AboutOurBlog
