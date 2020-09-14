import React from 'react'
import Styled from 'styled-components'
import GraphImg from 'graphcms-image'

const Img = Styled(GraphImg)`
  display: none;

  @media (min-width: 1800px) {
    display: block;
    height: 400px;
    width: calc(100vw - 8rem);
    max-width: 2000px;
    position: fixed !important;
    left: 50%;
    bottom: 28rem;
    transform: translateX(-50%);
    object-fit: cover;
  }
`

const DesktopImage = ({photo}) => {
  const {image, alt} = photo;
  return <Img image={image} maxWidth={2000} alt={alt}/>
}

export default DesktopImage