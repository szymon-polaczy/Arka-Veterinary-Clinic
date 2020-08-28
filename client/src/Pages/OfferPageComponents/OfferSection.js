import React, { useState } from 'react'
import Styled from 'styled-components'

const HidingParagraph = Styled.p`
  display: ${({open}) => open ? 'block' : 'none'};
  padding: 1rem;
  margin: .2rem 0;
  line-height: 130%;
`

const Button = Styled.button`
  border: none;
  outline: none;
  background: transparent;
  color: inherit;
  border-top: 2px solid ${props => props.theme.akcent};
  border-bottom: 2px solid ${props => props.theme.akcent};
  font-size: 1.45rem;
  width: 100%;
  text-align: left;
  padding: .25rem 1.4rem;
  margin: .25rem 0;
`

const OfferSection = ({offer}) => {
  const {title, description} = offer
  const [smallOpen, setSmallOpen] = useState(false)

  return (
    <section>
      <Button onClick={() => setSmallOpen(state => !state)}>
        {title}
      </Button>
      <HidingParagraph open={smallOpen}>{description}</HidingParagraph>
    </section>
  )
}

export default OfferSection