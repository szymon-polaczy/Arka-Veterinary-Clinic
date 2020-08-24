import { useQuery } from '@apollo/react-hooks'
import gpl from 'graphql-tag'
import React, {useEffect, useState} from 'react'
import Styled from 'styled-components'

const OfferSection = Styled.section`
`

const Section = Styled.section`
  display: ${({big}) => big ? 'none' : 'block'}
`

const Paragraph = Styled.p`
  display: ${({small}) => small ? 'none' : 'block'}
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
  
  const { data } = useQuery(query)

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const [big, setBig] = useState(true)
  const [small, setSmall] = useState(true)

  return (
    <OfferSection>
      {data && 
        <article>
          <img style={{width: "100%"}} src={data.offers[0].image.url} alt={data.offers[0].title}/>
          <h2 onClick={() => setBig(state => !state)}>{data.offers[0].title}</h2>
          <Section big={big}>
            {data.offers[0].fullOffer.offers.map((offer, index) => {
              return (
                <div key={index + 'blooczek'}>
                  <button onClick={() => setSmall(state => !state)}>{offer.title}</button>
                  <Paragraph small={small}>{offer.description}</Paragraph>
                </div>
              )
            })}
          </Section>
        </article>
      }
    </OfferSection>
  )
}

export default OfferPage