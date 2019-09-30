import React from "react"
import styled from "styled-components"
import Img from "gatsby-image/withIEPolyfill"

import { screen } from "../global/variables"

const StyledHero = styled.div`
  margin-bottom: 5rem;
  img,
  picture,
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    max-height: 38.2rem;
    object-fit: cover;
  }

  @media ${screen.min.sm} and ${screen.max.md} {
    img,
    picture,
    .gatsby-image-wrapper {
      max-height: 26rem;
    }
  }

  @media ${screen.max.sm} {
    img,
    picture,
    .gatsby-image-wrapper {
      width: auto;
      height: 20rem;
    }
  }
`

const ImageHero = ({ image }) => (
  <StyledHero>
    <Img fluid={image.fluid} objectFit="cover" objectPosition="50% 50%" />
  </StyledHero>
)

export default ImageHero
