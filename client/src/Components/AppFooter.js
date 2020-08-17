import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'

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
`

const MagicFooter = Styled.div``

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
            <iframe 
              width="100%" height="100%" 
              id="gmap_canvas" 
              src="https://maps.google.com/maps?q=%20Szczeci%C5%84ska%208%2048-303%20Nysa&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              frameBorder="0" 
              scrolling="no"
              marginHeight="0" 
              marginWidth="0"
              title="nasze-położenie-na-mapie-google"
            >  
            </iframe>
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