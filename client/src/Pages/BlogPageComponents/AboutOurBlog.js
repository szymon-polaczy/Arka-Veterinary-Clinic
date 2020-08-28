import React from 'react'
import Styled from 'styled-components'

const Container = Styled.section`
  padding: 2rem 1rem 1rem 1rem;
  text-align: center;

  h2,p {
    margin: 0;
    padding: 0;
  }

  h2 {
    font-size: 2.2rem;
    letter-spacing: .1rem;
    font-family: ${props => props.theme.secondaryFontFamily};
    margin-bottom: .35rem;
  }

  p {
    line-height: 130%;
    font-size: 1.2rem;
    max-width: 1200px;
    margin: 0 auto;
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
