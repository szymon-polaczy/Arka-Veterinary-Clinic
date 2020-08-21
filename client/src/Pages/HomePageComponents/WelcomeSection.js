import React from 'react'
import Styled from 'styled-components'

const Header = Styled.header`
  font-family: 'Barrio', cursive;
  height: calc(100vh - 5rem);
  position: relative;

  img {
    max-height: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    top: 0;
  }

  --distance-from-center: 3.25rem;
  --heading-font-size: 3rem;

  h2 {
    margin: 0;
    padding: 0;
    position: absolute;
    top: calc(50% - 2.5rem);
    left: 50%;
    font-size: var(--heading-font-size);
    text-align: center;
    z-index: 15;
    opacity: 0;
    text-transform: uppercase;

    width: 100%;
  }

  h2:first-child {
    animation: slide-in-left-top 2s forwards;
  }

  h2:last-child {
    animation: slide-in-right-top 2s forwards;
  }

  @keyframes slide-in-left-top {
    0% { opacity: 0; transform: translate(-100%, calc(0px - var(--distance-from-center))); }
    100% { opacity: 1; transform: translate(-50%, calc(0px - var(--distance-from-center))); }
  }

  @keyframes slide-in-right-top {
    0% { opacity: 0; transform: translate(0%, var(--distance-from-center)); }
    100% { opacity: 1; transform: translate(-50%, var(--distance-from-center)); }
  }

  @media (min-width: 400px) {
    h2 {
      width: auto;
    }
  }

  @media (min-width: 600px) {
    --distance-from-center: 4.35rem;
    --heading-font-size: 4rem;
  }

  @media (min-width: 900px) {
    --distance-from-center: 7.3rem;
    --heading-font-size: 6.8rem;
  }

  @media (min-width: 1200px) {
    img {
      top: 11%;
    }

    h2:first-child {
      z-index 5;
    }

    --distance-from-center: 9.9rem;
    --heading-font-size: 9.2rem;
  }

  @media (min-width: 1800px) {
    --distance-from-center: 13.5rem;
    --heading-font-size: 13rem;
    letter-spacing: .25rem;
  }
`

const WelcomeSection = () => {
  return (
    <Header>
      <h2>Daj głos swojemu</h2>
      <img src="Images/cat-welcome.png" alt="Kotek na powitanie"/>
      <h2>Kompanowi</h2>
    </Header>
  )
}

export default WelcomeSection