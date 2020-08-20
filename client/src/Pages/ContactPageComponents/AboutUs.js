import { useQuery } from '@apollo/react-hooks'
import gpl from 'graphql-tag'
import React from 'react'
import Styled from 'styled-components'

const Container = Styled.article` 
  h2, p {
    margin: 0;
    text-align: center;
  }

  h2 {
    padding: 1.5rem 1rem;
    font-family: 'Barrio', cursive;
    letter-spacing: .1rem;
    font-size: 1.75rem;
  }

  p {
    padding: 0 1rem .75rem 1rem;
    line-height: 135%;
    font-size: 1.2rem;
  }

  @media (min-width: 600px) {
    p {
      font-size: 1rem;
    }
  }

  @media (min-width: 900px) {
    background: #fff;
    color: #1b1b1b;

    p {
      padding: 1.5rem;
    }
  }

  @media (min-width: 1200px) {
    p {
      font-size: 1.2rem;
    }
  }
`

const AboutUs = () => {
  const query = gpl`
    query MyQuery {
      aboutUses {
        long
      }
    }
  `

  const { data } = useQuery(query);

  return (
    <Container>
      <h2>Troszkę więcej o nas i naszym celu</h2>
      <p>{data === undefined ? 'Loading...' : data.aboutUses[0].long}</p>
    </Container>
  )
}

export default AboutUs