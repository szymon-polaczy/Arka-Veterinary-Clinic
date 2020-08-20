import React from 'react'
import Styled from 'styled-components'

import GMap from '../Components/GMap'
import AboutUs from './ContactPageComponents/AboutUs'
import ContactInfo from './ContactPageComponents/ContactInfo'
import ContactForm from './ContactPageComponents/ContactForm'

const ContactContainer = Styled.section`
  iframe {
    min-height: 300px;
    filter: grayscale(100%);
  }
`

const ContactPage = () => {
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