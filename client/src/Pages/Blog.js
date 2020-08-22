import { useQuery } from '@apollo/react-hooks'
import gpl from 'graphql-tag'
import React from 'react'
import AboutOurBlog from './BlogPageComponents/AboutOurBlog'
import Styled from 'styled-components'
import IntroToBlogArticle from './BlogPageComponents/IntroToBlogArticle'

const ArticleIntrosContainer = Styled.section`
  h2 {
    padding-left: 1rem;
    margin-top: 5rem;
    letter-spacing: .2rem;
    font-size: 2.5rem;
    font-family: 'Barrio', cursive;
  }

  .article-intro:nth-child(even) {
    background: #fff;
    color: #1b1b1b;
  }
`

const Blog = () => {
  const query = gpl`
    query BlogPosts  {
      blogPosts {
        title
        category
        creationDate
        creator
        intro
        lastUpdateDate
      }
    }
  `
  
  const { data } = useQuery(query); 

  return (
    <>
      <AboutOurBlog/>
      <ArticleIntrosContainer>
        <h2>Artykuły jakie napisaliśmy</h2>
        {data === undefined ? 'Loading...' : 
          data.blogPosts.map(article => <IntroToBlogArticle article={article}/>)}
      </ArticleIntrosContainer>
    </>
  )
}

export default Blog