import { useQuery } from '@apollo/react-hooks'
import gpl from 'graphql-tag'
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
    }

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
    query MyQuery {
      homePageImages {
        alt
        title
        img {
          url
        }
      }
    }
  `
  const { data } = useQuery(query); 

  return (
    <Section>
      {data === undefined ? 'Loading...' : 
      <img src={data.homePageImages[0].img.url} 
      alt={data.homePageImages[0].alt}
      title={data.homePageImages[0].title}/>}
    </Section>
  )
}

export default ImageSection