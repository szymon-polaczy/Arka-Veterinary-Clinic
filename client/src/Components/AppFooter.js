import React from 'react'
import Styled from 'styled-components'

const Footer = Styled.footer`
  box-shadow: 0 -.5rem .5rem #f0f0f0;
  text-align: center;
  line-height: 120%;

  .wrapper {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: wrap;

  }

  p, a {
    padding: .35rem 1rem;
  }

  @media (max-width: 700px) {
    .wrapper {
      flex-flow: column;
      padding-bottom: 1rem;
    }
  }
`

const AppFooter = () => {
  return (
    <Footer>
      <div className="wrapper">
        <p>Copyright &copy; Przychodnia Weterynaryjna Arka</p>
        <a href="https://github.com/szymon-polaczy" target="_blank" title="Skontaktuj się ze mną" rel="noopener noreferrer">Made by Szymon Polaczy</a>
      </div>
    </Footer>
  )
}

export default AppFooter