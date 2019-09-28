import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import MediaQuery from "react-responsive"
import { Grid, Row, Col } from "react-flexbox-grid"
import Img from "gatsby-image/withIEPolyfill"

import { colors, screen } from "../global/variables"
import Slideshow from "../utilities/slideshow"

const StyledGrid = styled(Grid)`
  background-color: ${props => props.bgcolor};
  padding-top: ${props => props.padding.desktop};
  padding-bottom: ${props => props.padding.desktop};
  @media ${screen.max.sm} {
    padding: ${props => props.padding.mobile} 0rem;
    padding-left: 0rem !important;
    padding-right: 0rem !important;
  }
`

const StyledCol = styled(Col)`
  padding-left: 0.5rem !important;
  padding-right: 0.5rem !important;
  img,
  picture,
  .gatsby-image-wrapper {
    width: 100%;
    height: 24.8rem;
    object-fit: cover;
  }
}
`

const ImageTiles = props => (
  <StyledGrid fluid padding={props.padding} bgcolor={props.bgColor}>
    <MediaQuery query={screen.max.sm}>
      <Slideshow>
        {props.images.map((img, idx) => (
          <div key={`slideshowImg_${idx}`}>
            <Img
              fluid={img.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt=""
            />
          </div>
        ))}
      </Slideshow>
    </MediaQuery>

    <MediaQuery query={screen.min.sm}>
      <Row>
        {props.images.map((img, idx) => (
          <StyledCol key={`tileImg_${idx}`} sm>
            <Img
              fluid={img.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt=""
            />
          </StyledCol>
        ))}
      </Row>
    </MediaQuery>
  </StyledGrid>
)

ImageTiles.propTypes = {
  images: PropTypes.array.isRequired,
  bgcolor: PropTypes.string,
  padding: PropTypes.object
}

ImageTiles.defaultProps = {
  bgcolor: colors.gray100,
  padding: {
    desktop: "4rem",
    mobile: "2rem"
  }
}

export default ImageTiles
