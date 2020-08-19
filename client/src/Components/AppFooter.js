import { useQuery } from '@apollo/react-hooks'
import gpl from 'graphql-tag'
import React from 'react'
import renderHTML from 'react-render-html'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'

import GMap from './GMap'

const Footer = Styled.footer`
  margin: 0 auto 2rem auto;
  background: #1b1b1b;
  color: #fff;
  padding: 1rem;
  max-width: 2000px;

  .info-section {
    .small-imp {
      font-size: .85rem;
      max-width: 25ch;
      line-height: 130%;
    }

    .imp {
      line-height: 130%;
      text-decoration: underline;
    }

    article {
      margin-top: 1.65rem;

      h3 {
        letter-spacing: .1rem;
			  font-family: 'Barrio', cursive;
      }

      &:first-child {
        margin: 0;
      }
    }

    .map {
      filter: grayscale(100%);
      height: 15rem;
      padding: 1rem 0;
    }

    @media (min-width: 600px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      article {
        margin: 0;
      }
    }

    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);

      .map {
        grid-column: 1 / span 3;
      }
    }

    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);

      .map {
        grid-column: unset;
      }
    }

    @media (min-width: 1800px) {
      grid-template-columns: repeat(5, 1fr);

      .map {
        grid-column: 4 / span 2;
      }
    }
  }

  .partners-section {
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: space-around;
    filter: grayscale(100%);

    img {
      max-width: 5rem;
      margin: .35rem;
    }
  }

  @media (min-width: 900px) {
    margin-bottom: 0;
  }

  @media (min-width: 1200px) {
    margin-top: 3rem;
    width: calc(100vw - 8rem);
  }

  @media (min-width: 1800px) {
    position: fixed;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
  }
`

const BottomFooter = Styled.footer`
  text-align: center;

  .wrapper {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-flow: column-reverse;

    p {
      line-height: 140%;
    }
  }

  section {
    margin-bottom: .2rem;
    display: flex;
    flex-flow: column;

    a {
      padding: .35rem;
    }
  }

  @media (min-width: 900px) {
    height: 3rem;

    .wrapper {
      flex-flow: row;
      align-items: center;
      justify-content: space-around;
    }

    section {
      flex-flow: row;
      align-items: center;

      padding-left: 2rem;

      a:first-child {
        padding-right: .65rem;
      }
    }
  }

  @media (min-width: 1800px) {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
`
 
const MagicFooter = Styled.div`
  @media (min-width: 1800px) {
    height: 31rem;
  }
`

const partnerLogo = ({logo, alt, title, id}) => {
  return (
    <img src={logo.url} alt={alt} title={title} key={id}/>
  )
}

const AppFooter = () => {
  const query = gpl`
    query MyQuery {
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
      ourPartnersImgs {
        id
        alt
        title
        logo {
          url
        }
      }
    }
  `
  
  const { data } = useQuery(query);

  return (
    <>
      <MagicFooter></MagicFooter>
      <Footer>
        <div className="info-section">
          <article>
            <h3>Kontakt</h3>
            {data === undefined ? 'Loading...' : renderHTML(data.contactInfos[0].contact.html)}
          </article>
          <article>
            <h3>Godziny Otwarcia</h3>
            {data === undefined ? 'Loading...' : renderHTML(data.contactInfos[0].openHours.html)}
          </article>
          <article>
            <h3>Adres</h3>
            {data === undefined ? 'Loading...' : renderHTML(data.contactInfos[0].address.html)}
          </article>
          <article className="map">
            <GMap title="Nasze-Położenie-Stopka"/>
          </article>
        </div>
        <div className="partners-section">
          {data === undefined ? 'Loading...' : data.ourPartnersImgs.map((partner) => partnerLogo(partner))}
        </div>
      </Footer>
      <BottomFooter>
        <div className="wrapper">
          <p>Copyright &copy; Przychodnia Weterynaryjna Arka</p>
          <section>
            <Link to="/polityka-prywatności">Polityka Prywatności</Link>
            <a href="https://github.com/szymon-polaczy" target="_blank"  
              title="Skontaktuj się ze mną" rel="noopener noreferrer">
              Made by Szymon Polaczy
            </a>
          </section>
        </div>
      </BottomFooter>
    </>
  )
}

export default AppFooter