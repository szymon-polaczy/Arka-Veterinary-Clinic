import React, {useEffect} from 'react'
import Styled from 'styled-components'

import GMap from '../Components/GMap'
import AboutUs from './ContactPageComponents/AboutUs'
import ContactInfo from './ContactPageComponents/ContactInfo'
import ContactForm from './ContactPageComponents/ContactForm'

const ContactContainer = Styled.section`
  max-width: 2000px;
  margin: 0 auto;

  iframe {
    min-height: 300px;
    filter: grayscale(100%);
  }

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    iframe {
      grid-column: 2 / span 1;
      grid-row: 1 / span 1;
    }

    article:nth-child(2) {
      grid-column: 2 / span 1;
      grid-row: 2 / span 1;
    }
  }
`

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <ContactContainer>
      <ContactInfo/>
      <ContactForm/>
      <GMap/>
      <AboutUs/>
    </ContactContainer>
  )
}

export default ContactPage