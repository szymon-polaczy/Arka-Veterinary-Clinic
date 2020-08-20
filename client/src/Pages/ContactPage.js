import React from 'react'
import Styled from 'styled-components'

import GMap from '../Components/GMap'
import AboutUs from './ContactPageComponents/AboutUs'
import ContactInfo from './ContactPageComponents/ContactInfo'
import ContactForm from './ContactPageComponents/ContactForm'

/*const AboutUsAndFormSection = Styled.section`
  display: flex;
  flex-flow: row-reverse;
  align-items: center;
  justify-content: center;

  textarea {
    resize: none;
  }

  form {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 2rem;

    * {
      box-sizing: border-box;
      border: none;
      outline: none;
      background: transparent;
      color; #fff;
    }

    input, textarea {
      width: 50%;
      border-bottom: 2px solid #548493;
      background: #2b2b2b;
      margin-bottom: 1.5rem;
    }

    label {
      margin-bottom: .65rem;
      font-size: 1.2rem;
      display: block;
      width: 50%;
    }

    button {
      color: #fff;
      border-top: 2px solid #548493;
      border-bottom: 2px solid #548493;
      width: 15rem;
      padding: .65rem 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.65rem;
      font-family: 'Barrio', cursive;
      letter-spacing: .1rem;

      img {
        padding-left: .65rem;
        max-height: 3rem;
      }
    }
  }
`*/

const ContactContainer = Styled.section`
  iframe {
    min-height: 300px;
    filter: grayscale(100%);
  }
`

const ContactPage = () => {
  return (
    <ContactContainer>
      {/*
      <AboutUsAndFormSection>
        <article>
          <h2>Wyślij do nas maila</h2>
          <form>
            <label>Email</label>
            <input type="email" placeholder="email"/>
            <label>Numer Telefonu</label>
            <input type="phone" placeholder="667 668 669"/>
            <label>Twoja wiadomość</label>
            <textarea wrap="off" cols="30" rows="5"></textarea>
            <button type="submit">Wyślij
              <img src="Images/svg/paper-plane-solid.svg" alt=""/>
            </button>
          </form>
        </article>
      </AboutUsAndFormSection>*/}
      <ContactInfo/>
      <ContactForm/>
      <GMap/>
      <AboutUs/>
    </ContactContainer>
  )
}

export default ContactPage