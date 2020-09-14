import { useQuery } from '@apollo/react-hooks'
import gpl from 'graphql-tag'
import React from 'react'
import Styled from 'styled-components'
import GraphImg from 'graphcms-image'

const Section = Styled.section`
  max-width: 2000px;
  margin: 0 auto;

  .graphcms-image-wrapper div {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    padding: 0 !important;
    max-height: 300px;

    @media (min-width: 1200px) {
      max-height: 400px;
    }

    @media (min-width: 1800px) {
      max-height: 500px;
    }
  }
`

const ImageSection = () => {
  const query = gpl`
    query Image {
      homePageImages {
        alt
        title
        img {
          handle
          width
          height
        }
      }
    }
  `
  const { loading, error, data } = useQuery(query); 

  return (
    <Section>
      {loading ? 'Ładowanie...' : 
        error !== undefined ? 'Coś poszło nie tak!' :
        <GraphImg image={data.homePageImages[0].img} maxWidth={2000}
        alt={data.homePageImages[0].alt}
        title={data.homePageImages[0].title}/>}
    </Section>
  )
}

export default ImageSection