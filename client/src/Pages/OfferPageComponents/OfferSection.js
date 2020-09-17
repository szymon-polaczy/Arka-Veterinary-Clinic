import React, { useState } from 'react'
import Styled from 'styled-components'

const HidingParagraph = Styled.p`
  line-height: 130%;
  padding: 0 6px;
  opacity: ${({open}) => open ? '1' : '0'};
  transform: scaleY(${({open}) => open ? '1' : '0'});
  height: ${({open}) => open ? 'auto' : '0'};
  transition: .3s all ease-in-out;
  transform-origin: top;
`

const Button = Styled.button`
  border: none;
  outline: none;
  background: transparent;
  color: inherit;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 5px;
  padding: 0 6px;

  &::after {
    content: '(Rozwiń)';
    color: ${props => props.theme.gray};
    font-size: .9rem;
    padding-left: 10px;
  }
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