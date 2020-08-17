import React from 'react'
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
    text-align: center;
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
  return (
    <>
      <InfoAndMapSection>
        <article>
          <section className="very-imp">
            <h2>
              Uwaga, uwaga. Dunno, coś tam coś tam. Make me fucking care. 
              And other very important things.
            </h2>
          </section>
          <section>
            <h2>Kontakt</h2>
            <p>Wyślij do nas maila</p>
            <p>Nasz numer stacjonarny: 444 555 666</p>
            <p className="imp">Nasz awaryjny: 111 222 333</p>
          </section>
          <section>
            <h2>Godziny Otwarcia</h2>
            <p>Pon-Pt: 8:00-18:00</p>
            <p>Sob: 8:00-12:00</p>
            <p>Nd: Tylko po wcześniejszym umówieniu</p>
          </section>
          <section>
            <h2>Nasz Adres</h2>
            <p>ul. Szczecińska 8</p>
            <p>Nysa 48-303</p>
            <p>Sprawdź dokładnie gdzie jesteśmy na mapce obok</p>
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse luctus ipsum ut interdum malesuada. Donec tellus nibh,
            efficitur nec laoreet vel, tempor at libero. Maecenas congue nulla
            ec quam lacinia accumsan. Etiam interdum varius venenatis. Quisque 
            nec congue ipsum, et tempus risus. Vestibulum lacinia sed magna non 
            euismod. Orci varius natoque penatibus et magnis dis parturient 
            montes, nascetur ridiculus mus. Sed sollicitudin lectus 
            vel nunc pretium iaculiLorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse luctus ipsum ut interdum malesuada. Donec tellus nibh,
            efficitur nec laoreet vel, tempor at libero. Maecenas congue nulla
            ec quam lacinia accumsan. Etiam interdum varius venenatis. Quisque 
            nec congue ipsum, et tempus risus. Vestibulum lacinia sed magna non 
            euismod. Orci varius natoque penatibus et magnis dis parturient 
            montes, nascetur ridiculus mus. Sed sollicitudin lectus 
            vel nunc pretium iaculiLorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse luctus ipsum ut interdum malesuada. Donec tellus nibh,
            efficitur nec laoreet vel, tempor at libero. Maecenas congue nulla
            ec quam lacinia accumsan. Etiam interdum varius venenatis. 
          </p>
        </article>
      </AboutUsAndFormSection>
    </>
  )
}

export default ContactPage