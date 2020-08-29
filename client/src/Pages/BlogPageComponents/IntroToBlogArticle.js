import React from 'react'
import Styled from 'styled-components'
import {Link} from 'react-router-dom'

const ArticleIntro = Styled.article`
  padding: 2rem;

  @media (min-width: 1050px) {
    border-radius: .65rem;
  }
`

const Title = Styled.h3`
  margin: 0;
  padding: 0;
  font-size: 2rem;
  padding-bottom: 1rem;

  &::after {
    display: block;
    content: '';
    width: 15rem;
    background: ${props => props.theme.akcent};
    height: 2px;
    margin-top: .4rem;
  }

  span {
    color: #999;
    font-size: .9rem;

    &::before {
      content: ' - ';
      display: inline-block;
    }
  }
`

const CategoryContainer = Styled.article`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: wrap;
`

const CategoryBlock = Styled.div`
  border: 2px solid ${props => props.theme.akcent};
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

const Intro = Styled.p`
  padding: 0;
  margin: .45rem 0 1rem 0;
  line-height: 150%;
  letter-spacing: .05rem;
`

const Container = Styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: wrap;
`

const IntroToBlogArticle = ({article}) => {
  const {id, title, creator, intro, category, creationDate, lastUpdateDate} = article;
  return (
    <Link to={`/blog-${id}`}>
      <ArticleIntro className="article-intro">
        <Title>{title} <span>{creator}</span></Title>
        <Intro>{intro}</Intro>
        <Container>
          <CategoryContainer>
            Kategoria {category.map(cat => (<CategoryBlock key={`${id} ${cat}`}>{cat}</CategoryBlock>))}
          </CategoryContainer>
          <InfoContainer>
            <p>Utworzone {creationDate}</p>
            <p>Ostatni Update {lastUpdateDate}</p>
          </InfoContainer>
        </Container>
      </ArticleIntro>
    </Link>
  )
}

export default IntroToBlogArticle