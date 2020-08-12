import React from 'react'
import Styled from 'styled-components'

const OfferPageContainer = Styled.main`
  padding: 2rem .65rem;
`

const OfferPage = () => {
  return (
    <OfferPageContainer>
      <h2>Strona Oferty Arki</h2>

      <b>Połączenie <a href="http://www.fizjowet.pl/">Tego</a> i <a href="https://www.skvet.pl/uslugi">Tego</a></b> <br/>
      Plus na kartce sobie jakiś plan narysowałem
    </OfferPageContainer>
  )
}

export default OfferPage