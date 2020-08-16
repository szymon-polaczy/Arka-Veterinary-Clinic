import React from 'react'
import Styled from 'styled-components'

const Header = Styled.header`
  font-family: 'Barrio', cursive;
  height: calc(100vh - 5rem);
  position: relative;

  img {
    max-height: 100%;
    position: relative;
    top: 9%;
    left: 50%;
    transform: translate(-50%, 2rem);
    z-index: 10;
  }

  --distance-from-center: 2.5rem;
  --heading-font-size: 2.3rem;

  h2 {
    margin: 0;
    position: absolute;
    top: calc(50% - 2.5rem);
    left: 50%;
    font-size: var(--heading-font-size);
    text-align: center;
    z-index: 15;
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
    --distance-from-center: 3.25rem;
    --heading-font-size: 3rem;
  }

  @media (min-width: 768px) {
    --distance-from-center: 5.25rem;
    --heading-font-size: 5rem;
  }

  @media (min-width: 1024px) {
    --distance-from-center: 8rem;
    --heading-font-size: 7.5rem;
  }

  @media (min-width: 1024px) {
    --distance-from-center: 8rem;
    --heading-font-size: 7.5rem;
  }

  @media (min-width: 1320px) {
    --distance-from-center: 10rem;
    --heading-font-size: 9.5rem;
  }

  @media (min-width: 1500px) {
    --distance-from-center: 10.5rem;
    --heading-font-size: 10rem;
		letter-spacing: .5rem;
    
    h2:first-child {
      z-index: 5;
    }

    h2 {
      top: calc(50% - 5rem);
    }
  }

  @media (min-width: 1870px) {
    --distance-from-center: 12.5rem;
    --heading-font-size: 12rem;
		letter-spacing: 1rem;
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