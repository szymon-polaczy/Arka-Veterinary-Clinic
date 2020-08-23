import { useQuery } from '@apollo/react-hooks'
import gpl from 'graphql-tag'
import React, { useEffect } from 'react'
import Styled from 'styled-components'
import renderHTML from 'react-render-html'

const Container = Styled.article`
  max-width: 1600px;
  margin: 0 auto;
  padding: 5rem 0;
`

const Img = Styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
  border-bottom: 5px solid #548493;
`

const Title = Styled.h2`
  font-size: 3rem;
  letter-spacing: .1rem;
  font-family: 'Barrio', cursive;
  margin: 2.5rem;
  margin-left: 0;

  span {
    font-size: 1rem;
  }
`

const Post = Styled.article`
  p {
    font-size: 1.1rem;
    line-height: 145%;
  }
`

const BottomInfoWrapper = Styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: wrap;
  margin-top: 3rem;
`

const CategoryContainer = Styled.article`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: wrap;
`

const CategoryBlock = Styled.div`
  border: 2px solid #548493;
  margin: .3rem;
  padding: .35rem;
  width: fit-content;
  font-weight: 600;
  font-size: .85rem;
`

const InfoContainer = Styled.article`
  font-size: .8rem;
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: flex-start;
  margin-top: .4rem;

  p {
    padding: .25rem;
    margin: 0;
    line-height: 130%;
  }
`

const Article = ({title, lastUpdateDate, creationDate, creator, category, article, photo}) => {
  return (
    <>
      <Img src={photo.url} alt={title}/>
      <Title>{title} <span> - {creator}</span></Title>
      <Post>{renderHTML(article.html)}</Post>
      
      <BottomInfoWrapper>
        <CategoryContainer>
          Kategoria {category.map(cat => (<CategoryBlock>{cat}</CategoryBlock>))}
        </CategoryContainer>
        <InfoContainer>
          <p>Utworzone {creationDate}</p>
          <p>Ostatni Update {lastUpdateDate}</p>
        </InfoContainer>
      </BottomInfoWrapper>
    </>
  )
}

const BlogArticle = ({id}) => {
  const query = gpl`
    query BlogPost {
      blogPost(where: {id: "${id}"}) {
        title
        lastUpdateDate
        creationDate
        creator
        category
        article {
          html
        }
        photo {
          url
        }
      }
    }  
  `
  
  const { data } = useQuery(query); 

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <Container>
      { data === undefined ? 'Loading' : Article(data.blogPost)}
    </Container>
  )
}


export default BlogArticle