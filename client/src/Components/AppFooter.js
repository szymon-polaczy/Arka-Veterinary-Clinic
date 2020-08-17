import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'

import GMap from './GMap'

const Footer = Styled.footer`
  margin: 5rem auto 2rem auto;
  background: #1b1b1b;
  color: #fff;
  padding: 1rem;

  .info-section {
    .small-imp {
      font-size: .85rem;
      max-width: 25ch;
      line-height: 130%;
    }

    article {
      margin-top: 1.65rem;

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
    left: 2.5rem;
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

const AppFooter = () => {
  return (
    <>
      <MagicFooter></MagicFooter>
      <Footer>
        <div className="info-section">
          <article>
            <h3>Kontakt</h3>
            <p>Wyślij do nas maila</p>
            <p>Nasz stacjonarny: 444 555 666</p>
            <p>Numer awaryjny: 111 222 333</p>
          </article>
          <article>
            <h3>Godziny Otwarcia</h3>
            <p>Pon-Pt: 8:00-18:00</p>
            <p>Sob: 8:00-12:00</p>
            <p className="small-imp">Nd: Tylko i wyłącznie po wcześniejszym umówieniu</p>
          </article>
          <article>
            <h3>Adres</h3>
            <p>ul. Szczecińska 8</p>
            <p>Nysa 48-303</p>
            <p className="small-imp">
              Sprawdź dokładnie gdzie jesteśmy na mapce obok
            </p>
          </article>
          <article className="map">
            <GMap title="Nasze-Położenie-Stopka"/>
          </article>
        </div>
        <div className="partners-section">
					<img src="Images/partners/hipra.png" alt="hipra"/>
					<img src="Images/partners/hipromine.png" alt="hipromine"/>
					<img src="Images/partners/kruuse.png" alt="kruuse"/>
					<img src="Images/partners/merial.png" alt="merial"/>
					<img src="Images/partners/royal-canin.png" alt="royal-canin"/>
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