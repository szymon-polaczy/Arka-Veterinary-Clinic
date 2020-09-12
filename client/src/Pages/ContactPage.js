import React, {useEffect} from 'react'
import Styled from 'styled-components'

import GMap from '../Components/GMap'
import AboutUs from './ContactPageComponents/AboutUs'
import ContactInfo from './ContactPageComponents/ContactInfo'

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
      grid-column: 1 / span 2;
      grid-row: 2 / span 1;
      min-height: 500px;
    }

    article:nth-child(2) {
      grid-column: 2 / span 1;
      grid-row: 2 / span 1;
    }
  }

  @media (min-width: 1200px) {
    article {
      padding: 4rem 2rem;
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
      <GMap/>
      <AboutUs/>
    </ContactContainer>
  )
}

export default ContactPage