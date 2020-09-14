import React from 'react'
import Styled from 'styled-components'

const Img = Styled.img`
  display: none;

  @media (min-width: 1800px) {
    display: block;
    height: 400px;
    width: calc(100vw - 8rem);
    max-width: 2000px;
    position: fixed;
    left: 50%;
    bottom: 28rem;
    transform: translateX(-50%);
    object-fit: cover;
  }
`

const DesktopImage = () => {
  return <Img src="Images/footer.jpg" alt="Kotek do góry nogami" loading="lazy"/>
}

export default DesktopImage