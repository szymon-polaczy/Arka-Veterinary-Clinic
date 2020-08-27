import { useQuery } from '@apollo/react-hooks'
import gpl from 'graphql-tag'
import React, { useEffect } from 'react'
import Styled from 'styled-components'
import Macy from 'macy'

const MacyContainer = Styled.section`
  max-width: 1600px;
  margin: 0 auto;
  padding-bottom: 5rem;
`

const PaddingFromTop = Styled.div`
  height: 5rem;
`

const getOnePhoto = ({image, alt, title}) => {
  return (
    <img src={image.url} alt={alt} title={title} key={image.url}/>
  )
}

const Gallery = () => {
  useEffect(() => {
    function setMacy() {
      Macy({
        container: '#macy-container',
        mobileFirst: true,
        columns: 6,
        breakAt: {
          1200: 5,
          940: 3,
          520: 2,
          0: 1
        },
        margin: {
          x: 10,
          y: 10,
        }
      })
    }
    setMacy()

    window.addEventListener('resize', setMacy)
  })

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const query = gpl`
    query MyQuery {
      galleries {
        image {
          url
        }
        alt
        title
      }
    }
  `
  const { data } = useQuery(query); 

  return (
    <>
    <PaddingFromTop/>
    <MacyContainer id="macy-container">
      {data === undefined ? 'Loading...' : data.galleries.map(photo => getOnePhoto(photo))}
    </MacyContainer>
    </>
  )
}

export default Gallery