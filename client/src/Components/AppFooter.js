import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'

const Footer = Styled.footer`
  position: fixed;
  bottom: 3rem;
  left: 2rem;
  z-index: 1;
  background: #1b1b1b;
  color: #fff;
  padding: 0 1rem;
  width: calc(100% - 4rem - (2 * 1rem));
  height: 25rem;
  display: flex;
  flex-flow: column;
  justify-content: center;

  .top-section {
    display: grid;
    gap: 0 20px;
    height: 16rem;
    grid-template-columns: repeat(6, 1fr);

    p {
      margin: .3rem 0;
      padding: 0;
    }

    h3 {
		  font-family: 'Barrio', cursive;
    }

    .advice {
      margin-top: 1.65rem;
      font-size: .85rem;
      max-width: 20ch;
    }

    .map {
      grid-column: 5 / span 2;
      filter: grayscale(100%);
    }

    .about {
      grid-column: 1 / span 2;
    }
  }

  .topper-section {
    display: flex;
    height: 6.25rem;
    justify-content: space-around;

    img {
      height: 5rem;
      filter: grayscale(100%);
    }
  }
`

const BottomFooter = Styled.footer`
  position: fixed;
  bottom: 0;
  height: 3rem;
  width: 100%;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
  }
`

const MagicFooter = Styled.div`
  height: calc(25rem + 4rem + (2 * 1rem));
`

const AppFooter = () => {
  return (
    <>
      <MagicFooter></MagicFooter>
      <Footer>
        <div className="topper-section">
					<img src="Images/partners/hipra.png" alt="hipra"/>
					<img src="Images/partners/hipromine.png" alt="hipromine"/>
					<img src="Images/partners/kruuse.png" alt="kruuse"/>
					<img src="Images/partners/merial.png" alt="merial"/>
					<img src="Images/partners/royal-canin.png" alt="royal-canin"/>
        </div>
        <div className="top-section">
          <article className="about">
            <h3>O Nas</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Suspendisse luctus ipsum ut interdum malesuada. Donec tellus nibh,
              efficitur nec laoreet vel, tempor at libero. Maecenas congue nulla
              ec quam lacinia accumsan.</p>
          </article>
          <article>
            <h3>Kontakt</h3>
            <p>Wyślij do nas maila</p>
            <p>Nasz stacjonarny: 444 555 666</p>
            <p>Numer awaryjny: 111 222 333</p>
          </article>
          <article>
            <h3>Adres</h3>
            <p>ul. Szczecińska 8</p>
            <p>Nysa 48-303</p>
            <p className="advice">
              Sprawdź dokładnie gdzie jesteśmy na mapce obok
            </p>
          </article>
          <article className="map">
            <iframe 
              width="100%"
              height="100%" 
              id="gmap_canvas" 
              src="https://maps.google.com/maps?q=%20Szczeci%C5%84ska%208%2048-303%20Nysa&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              frameborder="0" 
              scrolling="no"
              marginheight="0" 
              marginwidth="0"
              title="nasze-położenie-na-mapie-google"
            >  
            </iframe>
          </article>
        </div>
      </Footer>
        <BottomFooter>
          <div className="wrapper">
            <p>Copyright &copy; Przychodnia Weterynaryjna Arka</p>
            <Link to="/polityka-prywatności">Polityka Prywatności</Link>
            <a 
              href="https://github.com/szymon-polaczy" 
              target="_blank" 
              title="Skontaktuj się ze mną" 
              rel="noopener noreferrer"
            >
              Made by Szymon Polaczy
            </a>
          </div>
        </BottomFooter>
    </>
  )
}

export default AppFooter