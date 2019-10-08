import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image/withIEPolyfill"
import { Row, Col } from "react-flexbox-grid"

import { screen } from "../global/variables"

import Container from "./container"
import HTML from "../utilities/html"
import Button from "../button"

const LeftCol = styled(Col)`
  img,
  picture,
  .gatsby-image-wrapper {
    width: 100%;
    height: 32rem;
    object-fit: cover;
  }
  @media ${screen.min.md} and ${screen.max.xl} {
    img,
    picture,
    .gatsby-image-wrapper {
      padding-right: 1.4rem;
    }
  }
  @media ${screen.max.md} {
    img,
    picture,
    .gatsby-image-wrapper {
      height: 16rem;
      margin-bottom: 1.5rem;
    }
  }
`

const RightCol = styled(Col)`
  img,
  picture,
  .gatsby-image-wrapper {
    width: 100%;
    height: 30rem;
    object-fit: cover;
    margin-bottom: 2.5rem;
  }
  @media ${screen.min.md} and ${screen.max.lg} {
    img,
    picture,
    .gatsby-image-wrapper {
      height: 24rem;
    }
  }
  @media ${screen.max.md} {
    img,
    picture,
    .gatsby-image-wrapper {
      height: 16rem;
    }
  }
`

const StyledButton = styled(Button)`
  margin-top: 2.8rem;
  margin-bottom: 7.5rem;
  @media ${screen.max.md} {
    margin-bottom: 4rem;
  }
`

const TwoColContainer = props => (
  <Container padding={{ desktop: "4rem", mobile: "1rem" }}>
    <Row middle="md" between="md" center="xs" start="md">
      <LeftCol md={4} xl={3}>
        <Img
          fluid={props.image1.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
          aria-hidden={true}
        />
      </LeftCol>
      <RightCol md={8} xl={8}>
        {props.image2 && (
          <Img
            fluid={props.image2.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            aria-hidden={true}
          />
        )}
        <HTML field={props.content_block.body} />
        {props.content_block.button_url && (
          <StyledButton to={props.content_block.button_url} padding="3rem" bold>
            {props.content_block.button_label}
          </StyledButton>
        )}
      </RightCol>
    </Row>
  </Container>
)

TwoColContainer.propTypes = {
  image1: PropTypes.object.isRequired,
  image2: PropTypes.object,
  content_block: PropTypes.object.isRequired
  // body, button_label, button_url
}

export default TwoColContainer
