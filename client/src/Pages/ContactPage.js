import { useQuery } from '@apollo/react-hooks'
import gpl from 'graphql-tag'
import React from 'react'
import renderHTML from 'react-render-html'
import Styled from 'styled-components'

import GMap from '../Components/GMap'

const InfoAndMapSection = Styled.section`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;

  h2 {
    padding: 0;
    margin: 0;
  }

  article {
    flex: 1;
    min-height: 50vh;

    iframe {
      height: 50vh;
      filter: grayscale(100%);
    }
  }

  section:nth-child(1),
  section:nth-child(3) {
    box-sizing: border-box;
    padding-left: 2rem;
  }

  article:not(.map) {
    display: grid;
    gap: 2rem;
    box-sizing: border-box;
    grid-template-columns: repeat(2, 1fr);
  }

  .very-imp {
    grid-area: 'imp';
    font-size: 1.5rem;
    letter-spacing: .2rem;
    width: 100%;
    margin: 0;
    line-height: 170%;

    h2 {
      max-width: 100%;
      text-align: left;
    }

    p {
      padding: 0;
      margin: 0;
    }
  }

  section:not(.very-imp) {
    h2 {
      font-family: 'Barrio', cursive;
      letter-spacing: .1rem;
    }
  }

  .imp {
    text-decoration: underline;
    font-size: 1.2rem;
  }
`

const AboutUsAndFormSection = Styled.section`
  display: flex;
  flex-flow: row-reverse;
  align-items: center;
  justify-content: center;

  article {
    flex: 1;
    height: 50vh;
  }

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

  article:first-child {
    h2 {
      font-size: 2.25rem;
      letter-spacing: .1rem;
      text-align: center;
      margin: 0;
      padding: 0;
      margin-top: 2rem;
      font-family: 'Barrio', cursive;
    }
  }

  article.about {
    background: #fff;
    color: #1b1b1b;

    h2 {
      box-sizing: border-box;
      margin: 2rem 0 0 2rem;
      font-size: 2.25rem;
      font-family: 'Barrio', cursive;
      letter-spacing: .1rem;
      text-align: center;
    }

    p {
      box-sizing: border-box;
      padding: 2rem;
      padding-top: 1rem;
      font-size: 1.22rem;
      line-height: 140%;
    }
  }
`

const ContactPage = () => {
  const query = gpl`
    query MyQuery {
      aboutUses {
        long
      }
      contactInfos {
        address {
          html
        }
        openHours {
          html
        }
        contact {
          html
        }
      }
      veryImportantInfos {
        info {
          html
        }
      }
    }
  `
  
  const { data } = useQuery(query); 

  return (
    <>
      <InfoAndMapSection>
        <article>
          <section className="very-imp">
            <h2>{data === undefined ? 'Loading...' : renderHTML(data.veryImportantInfos[0].info.html)}</h2>
          </section>
          <section>
            <h2>Kontakt</h2>
            {data === undefined ? 'Loading...' : renderHTML(data.contactInfos[0].contact.html)}
          </section>
          <section>
            <h2>Godziny Otwarcia</h2>
            {data === undefined ? 'Loading...' : renderHTML(data.contactInfos[0].openHours.html)}
          </section>
          <section>
            <h2>Nasz Adres</h2>
            {data === undefined ? 'Loading...' : renderHTML(data.contactInfos[0].address.html)}
          </section>
        </article>
        <article className="map">
          <GMap/>
        </article>
      </InfoAndMapSection>
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
        <article className="about">
          <h2>Troszkę więcej o nas i naszym celu</h2>
          <p>{data === undefined ? 'Loading...' : data.aboutUses[0].long}</p>
        </article>
      </AboutUsAndFormSection>
    </>
  )
}

export default ContactPage