import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'

const Footer = Styled.footer`
  text-align: center;
  line-height: 120%;
  position: fixed;
  bottom: 2rem;
  left: 0;
  width: calc(100% - 4rem - (2 * .65rem));
  z-index: 1;
  height: 400px;
  background: #1b1b1b;
  border: 2rem solid #fff;
  color: #fff;
  padding: .65rem;

  display: flex;
  align-items: center;
  flex-flow: column;
  justify-content: center;

  .wrapper {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: wrap;
  }

  p, a {
    padding: .35rem 1rem;
  }

  @media (max-width: 700px) {
    .wrapper {
      flex-flow: column;
      padding-bottom: 1rem;
    }
  }

  .top-section {
    display: grid;
    text-align: left;
    gap: 0 20px;
    height: 15.5rem;
    grid-template-columns: repeat(6, 1fr);

    p {
      padding: 0;
      margin: 0;
      line-height: 150%;
    }

    .advice {
      margin-top: 1.65rem;
      font-size: .85rem;
      color: #eee;
      max-width: 20ch;
    }

    .map {
      grid-column: 5 / span 2;
    }

    .about {
      grid-column: 1 / span 2;
    }
  }

  .topper-section {
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin: 1rem 0 2.65rem 0;

    img {
      max-height: 5rem;
      filter: grayscale(100%);
    }
  }
`

const BottomFooter = Styled.footer`
  position: fixed;
  z-index: 2;
  bottom: 0;
  left: 0;
  background: #fff;
  height: 3rem;
  width: 100%;
  padding-bottom: .35rem;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 1200px;
    margin: 0 auto;
  }
`

const MagicFooter = Styled.div`
  height: calc(400px + 6rem + (2 * .65rem));
  width: 100%;
  position: relative;
  z-index: -1;
`

const Mapouter = Styled.div`
  position:relative;
  text-align:right;
  height:100%;
  width:100%;
`

const GMAP = Styled.div`
  overflow:hidden;
  background:none!important;
  height:100%;
  width:100%;
  filter: grayscale(100%);
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
            <p className="advice">Sprawdź dokładnie gdzie jesteśmy na mapce obok</p>
          </article>
          <article className="map">
            <Mapouter>
              <GMAP>
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
              </GMAP>
            </Mapouter>
          </article>
        </div>
      </Footer>
        <BottomFooter>
          <div className="wrapper">
            <p>Copyright &copy; Przychodnia Weterynaryjna Arka</p>
            <Link to="/polityka-prywatności">Polityka Prywatności</Link>
            <a href="https://github.com/szymon-polaczy" target="_blank" title="Skontaktuj się ze mną" rel="noopener noreferrer">Made by Szymon Polaczy</a>
          </div>
        </BottomFooter>
    </>
  )
}

export default AppFooter