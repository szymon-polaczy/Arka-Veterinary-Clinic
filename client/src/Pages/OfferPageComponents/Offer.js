import React, { useState } from "react";
import OfferSection from './OfferSection'
import Styled from 'styled-components'

const HidingSection = Styled.section`
  display: ${({open}) => open ? 'block' : 'none'};
`

const AStyledOffer = Styled.article`
  background: ${props => props.theme.light};
  max-width: 800px;
  margin: 2.5rem;
  color: ${props => props.theme.dark};
  border: 5px solid ${props => props.theme.light};
`

const Img = Styled.img`
  max-width: 100%;
  max-height: 400px;
  object-fit: cover;
  cursor: pointer;
  transition: .2s filter ease-in-out;

  &:hover {
    filter: brightness(110%);
  }
`

const Title = Styled.h2`
  font-size: 1.65rem;
  cursor: pointer;
  margin: 0;
  padding: 1.5rem 6px;
  transition: .2s all ease-in-out;

  &:hover {
    font-size: 1.75rem;
  }
`

const Offer = ({ offer }) => {
  const {title, fullOffer, image} = offer
  const [open, setOpen] = useState(false)

  return (
    <AStyledOffer key={title}>
      <Img style={{width: "100%"}} src={image.url} alt={title}
        onClick={() => setOpen(state => !state)}/>
      <Title open={open} onClick={() => setOpen(state => !state)}>{title}</Title>
      <HidingSection open={open}>
        { fullOffer.offers.map((offer, index) => 
          <OfferSection offer={offer} key={offer.title}/>) }
      </HidingSection>
    </AStyledOffer>
  );
};

export default Offer;
