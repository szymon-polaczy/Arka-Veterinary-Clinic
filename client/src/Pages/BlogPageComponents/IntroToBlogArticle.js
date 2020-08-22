import React from 'react'
import Styled from 'styled-components'

const ArticleIntro = Styled.article`
  padding: 1rem;
`

const Title = Styled.h3`
  margin: 0;
  padding: 0;

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

const Intro = Styled.p`
  padding: 0;
  margin: .45rem 0;
  line-height: 135%;
`

const IntroToBlogArticle = ({article}) => {
  const {title, creator, intro, category, creationDate, lastUpdateDate} = article;
  return (
    <ArticleIntro className="article-intro">
      <Title>{title} <span>{creator}</span></Title>
      <Intro>{intro}</Intro>
      <section>
        <CategoryContainer>
          Kategoria {category.map(cat => (<CategoryBlock>{cat}</CategoryBlock>))}
        </CategoryContainer>
        <InfoContainer>
          <p>Utworzone {creationDate}</p>
          <p>Ostatni Update {lastUpdateDate}</p>
        </InfoContainer>
      </section>
    </ArticleIntro>
  )
}

export default IntroToBlogArticle