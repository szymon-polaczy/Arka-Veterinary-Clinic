import React, { useState } from "react";
import OfferSection from './OfferSection'
import Styled from 'styled-components'

const HidingSection = Styled.section`
  display: ${({open}) => open ? 'block' : 'none'};
`

const AStyledOffer = Styled.article`
  background: ${props => props.theme.gray};
  max-width: 800px;
  margin: 2.5rem;

  @media (min-width: 850px) {
    box-shadow: 0 0 .75rem #000;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    overflow: hidden;
  }
`

const Img = Styled.img`
  max-width: 100%;
  max-height: 400px;
  object-fit: cover;
`

const Title = Styled.h2`
  font-size: 2rem;
  letter-spacing: .1rem;
  font-family: ${props => props.theme.secondaryFontFamily};
  padding: .65rem 1.4rem;
  margin: 0;
`

const Offer = ({ offer }) => {
  const {title, fullOffer, image} = offer
  const [open, setOpen ] = useState(false)

  return (
    <AStyledOffer key={title}>
      <Img style={{width: "100%"}} src={image.url} alt={title}
        onClick={() => setOpen(state => !state)}/>
      <Title onClick={() => setOpen(state => !state)}>{title}</Title>
      <HidingSection open={open}>
        { fullOffer.offers.map((offer, index) => 
          <OfferSection offer={offer} key={offer.title}/>) }
      </HidingSection>
    </AStyledOffer>
  );
};

export default Offer;
