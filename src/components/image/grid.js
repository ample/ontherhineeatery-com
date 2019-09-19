import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"

import { screen } from "../global/variables"

import Container from "../layout/container"

const GridBlock = styled.div``

const StyledGrid = styled.div`
  display: -ms-grid;
  ${'' /* prettier-ignore */}
  -ms-grid-columns: (1fr)[4] 1rem (1fr)[8];
  ${'' /* prettier-ignore */}
  -ms-grid-rows: (1fr)[4] 1rem (1fr)[4];

  display: grid;
  height: 64rem;
  margin: 1rem;
  grid-gap: 1rem;
  grid-template-columns: repeat(12, 1fr);

  grid-template-rows: repeat(8, 1fr);

  img,
  picture,
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${GridBlock} {
    box-shadow: 0rem 0rem 0rem 1rem white;
  }

  .grid-image_0 {
    -ms-grid-row: 3;
    -ms-grid-row-span: 5;
    -ms-grid-column: 1;
    -ms-grid-column-span: 4;

    grid-row: 3 / 7;
    grid-column: 1 / 5;
  }

  .grid-image_1 {
    -ms-grid-row: 1;
    -ms-grid-row-span: 4;
    -ms-grid-column: 6;
    -ms-grid-column-span: 8;

    grid-row: 1 / 5;
    grid-column: 5 / 13;
  }

  .grid-image_2 {
    -ms-grid-row: 6;
    -ms-grid-row-span: 3;
    -ms-grid-column: 8;
    -ms-grid-column-span: 6;

    grid-row: 5 / 8;
    grid-column: 7 / 13;
  }

  @media ${screen.max.xl} {
    height: 55.2rem;
  }

  @media ${screen.max.md} {
    display: block;
    grid-gap: 0rem;
    height: auto;
    margin: 0rem;

    ${GridBlock} {
      margin: 1.5rem 0rem;
      box-shadow: none;
    }

    img,
    picture,
    .gatsby-image-wrapper {
      max-height: 19rem;
    }
  }

  @media ${screen.max.sm} {
    ${GridBlock} {
      margin: 1.5rem 0.75rem;
    }

    .gatsby-image-wrapper {
      max-height: 16rem;
    }
  }
`

const ImageGrid = props => (
  <Container padding={{ desktop: "0rem", mobile: "0rem" }}>
    <StyledGrid>
      {props.images.map((block, idx) => (
        <GridBlock
          className={`grid-image_${idx}`}
          key={`home-image-grid-${idx}`}
        >
          <Img fluid={block.image.fluid} alt={block.title} />
        </GridBlock>
      ))}
    </StyledGrid>
  </Container>
)

ImageGrid.propTypes = {
  images: PropTypes.array.isRequired // array of ImageBlocks
}

export default ImageGrid
