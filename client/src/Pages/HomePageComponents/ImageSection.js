import React from 'react'
import Styled from 'styled-components'

const Section = Styled.section`
  max-width: 2000px;
  margin: 0 auto;

  img {
    width: 100%;
    object-fit: cover;

    @media (min-width: 900px) {
      max-height: 300px;
      object-position: 50% 60%;
    }

    @media (min-width: 1200px) {
      max-height: 400px;
      object-position: 50% 60%;
    }

    @media (min-width: 1800px) {
      max-height: 500px;
      object-position: 50% 63%;
    }
  }
`

const ImageSection = () => {
  return (
    <Section>
      <img src="Images/kitty.jpg" alt="Kotek na odpoczynek"/>
    </Section>
  )
}

export default ImageSection