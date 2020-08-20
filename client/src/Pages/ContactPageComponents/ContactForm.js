import React from 'react'
import Styled from 'styled-components'

const Container = Styled.article`
  h2 {
    padding: 1.5rem 1rem;
    font-family: 'Barrio', cursive;
    text-align: center;
    letter-spacing: .1rem;
  }
`

const ContactForm = () => {
  return (
    <Container>
      <h2>Wyślij do nas maila</h2>
    </Container>
  )
}

export default ContactForm