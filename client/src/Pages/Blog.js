import { useQuery } from '@apollo/react-hooks'
import gpl from 'graphql-tag'
import React, { useEffect } from 'react'
import AboutOurBlog from './BlogPageComponents/AboutOurBlog'
import Styled from 'styled-components'
import IntroToBlogArticle from './BlogPageComponents/IntroToBlogArticle'

const ArticleIntrosContainer = Styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: 2rem;

  h2 {
    padding-left: 1rem;
    margin-top: 5rem;
    letter-spacing: .2rem;
    font-size: 2.5rem;
    font-family: ${props => props.theme.secondaryFontFamily};
  }

  .article-intro {
    margin-bottom: 3rem;
    background: ${props => props.theme.gray};
    color: ${props => props.theme.light};
  }
`

const Blog = () => {
  const query = gpl`
    query BlogPosts  {
      blogPosts {
        id
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

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <>
      <AboutOurBlog/>
      <ArticleIntrosContainer>
        <h2>Oto nasze dzieła</h2>
        {data === undefined ? 'Loading...' : 
          data.blogPosts.map(article => 
            <IntroToBlogArticle article={article} key={article.id}/>)}
      </ArticleIntrosContainer>
    </>
  )
}

export default Blog