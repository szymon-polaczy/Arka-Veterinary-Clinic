import { useQuery } from '@apollo/react-hooks'
import gpl from 'graphql-tag'
import React from 'react'
import Styled from 'styled-components'

const Container = Styled.article` 
  padding: 0 1rem;

  h2, p {
    margin: 0;
    text-align: center;
  }

  h2 {
    padding: 1.5rem 1rem;
    font-family: ${props => props.theme.secondaryFontFamily};
    letter-spacing: .1rem;
    font-size: 1.75rem;
  }

  p {
    line-height: 150%;
    font-size: 1.2rem;
    letter-spacing: 0.01rem;
  }

  @media (min-width: 900px) {
    background: ${props => props.theme.light};
    color: ${props => props.theme.dark};
  }

  @media (min-width: 1200px) {
    h2 {
      padding-top: 0;
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