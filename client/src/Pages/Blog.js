import { useQuery } from '@apollo/react-hooks'
import gpl from 'graphql-tag'
import React from 'react'
/*(import Styled from 'styled-components'*/

const getOneArticle = ({title, category, creationDate, lastUpdateDate, creator, intro}) => {
  return (
    <article>
      <h3>{title} <span>{creator}</span></h3>
      <p>{intro}</p>
      <section>
        <article>
          Kategoria
          {category.map(cat => (<span style={{background: '#2b2b2b', border: '1px solid #5498f0', margin: '.3rem', padding: '.2rem'}}>{cat}</span>))}
          </article>
        <article>
          <p>Utworzone {creationDate}</p>
          <p>Ostatni Update {lastUpdateDate}</p>
        </article>
      </section>
    </article>
  )
}

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
      <section>
        <h2>Oto nasz blog</h2>
        <p>Postanowiliśmy stworzyć bloga w celu pomocy właścicielom z ich 
          zwierzakami. Wszystko co tu znajdziesz jest napisane przez 
          profesjonalistów i powstało aby jak najbardziej pomóc 
          zwierzakowi i Tobie poczuć że tworszycie jedną rodzinę</p>
      </section>
      <section>
        <h2>Artykuły jakie napisaliśmy</h2>
        {data === undefined ? 'Loading...' : data.blogPosts.map(article => getOneArticle(article))}
      </section>
    </>
  )
}

export default Blog