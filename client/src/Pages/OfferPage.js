import { useQuery } from '@apollo/react-hooks'
import gpl from 'graphql-tag'
import React, {useEffect} from 'react'
import Offer from './OfferPageComponents/Offer'
import Styled from 'styled-components'

const Container = Styled.section`
  padding: 2.5rem 1rem;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  max-width: 2000px;
  margin: 0 auto;
`

const OfferPage = () => {
  const query = gpl`
    query BlogPosts {
      offers {
        title
        fullOffer
        image {
          url
        }
      }
    }  
  `
  
  const { loading, error, data } = useQuery(query)

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <Container>
      {loading ? 'Ładowanie...' : 
        error !== undefined ? 'Coś poszło nie tak!' :
        data.offers.map(offer => 
          <Offer offer={offer} key={offer.title}/>) }
    </Container>
  )
}

export default OfferPage