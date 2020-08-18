import React from 'react'
import Styled from 'styled-components'

const OfferSection = Styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  overflow-x: hidden;

  article {
    grid-column: auto / span 2;
    min-height: 50vh;
    position: relative;
    transition: .2s all ease-in-out;

    h2 {
      margin: 0;
      padding: 0;
      position: absolute;
      z-index: 10;
      top: 50%;
      left: 50%;
      transform: translate(-50%);
      font-size: 3rem;
      /*text-shadow: 0 0 .5rem #000;*/
      transition: .2s ease-in-out all;
    }


    ul {
      position: absolute;
      z-index: 10;
      list-style-type: none;
      display: flex;
      flex-flow: wrap;
      bottom: 5%;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      text-align: center;
      animation-timing-functions: ease-out;
      animation-fill-mode: forwards;
      animation-duration: .5s;
      animation-delay: .2s;
      opacity: 0;
      margin: 0;
      padding: 0;

      li {
        font-size: 1.5rem;
        padding: .5rem;
        width: 50%;
        box-sizing: border-box;
        text-shadow: 0 0 .4rem #222;
        font-weight: 600;
      }
    }

    &:hover {
      h2 {
        transform: translate(-50%, -150%);
      }

      ul {
        animation-name: slide-in-right;
      }
    }

    @keyframes slide-in-right {
      0% {opacity: 0; transform: translateX(0%); }
      100% {opacity: 1; transform: translateX(-50%); }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      display: none;
    }

    &:nth-child(even) {
      background: #fff;
      color: #1b1b1b;

      ul li {
        text-shadow: none;
      }
    }
  }
`

const OfferPage = () => {
  return (
    <OfferSection>
      <article>
        <h2>Profilaktyka</h2>
        <img src="Images/prof/1.jpg" alt=""/>
        <ul>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
        </ul>
      </article> 
      <article>
        <h2>Profilaktyka</h2>
        <img src="Images/prof/2.jpg" alt=""/>
        <ul>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
        </ul>
      </article>
      <article>
        <h2>Profilaktyka</h2>
        <img src="Images/prof/3.jpg" alt=""/>
        <ul>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
        </ul>
      </article>
      <article>
        <h2>Profilaktyka</h2>
        <img src="Images/prof/4.jpg" alt=""/>
        <ul>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
        </ul>
      </article>
      <article>
        <h2>Profilaktyka</h2>
        <img src="Images/prof/5.jpg" alt=""/>
        <ul>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
        </ul>
      </article>
      <article>
        <h2>Sklep</h2>
        <img src="Images/prof/6.jpg" alt=""/>
        <ul>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
          <li>pokemons</li>
        </ul>
      </article>
    </OfferSection>
  )
}

export default OfferPage