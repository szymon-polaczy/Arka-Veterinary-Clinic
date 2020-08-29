import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'

const Article = Styled.article`
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-flow: column-reverse;

  @media (min-width: 900px) {
    flex-flow: row;
    align-items: center;
    justify-content: space-around;
  }
`

const Links = Styled.section`
  display: flex;
  flex-flow: column;

  a {
    padding: .25rem;
  }

  @media (min-width: 900px) {
    flex-flow: row;

    a {
      padding: 0 .65rem;
    }
  }
`

const BottomSection = () => {
  return (
    <Article>
      <p>Copyright &copy; Przychodnia Weterynaryjna Arka</p>
      <Links>
        <Link to="/polityka-prywatnosci">Polityka Prywatności</Link>
        <a href="https://github.com/szymon-polaczy" target="_blank"
          title="Skontaktuj się ze mną" rel="noopener noreferrer">
            Made by Szymon Polaczy
          </a>
      </Links>
    </Article>
  )
}

export default BottomSection