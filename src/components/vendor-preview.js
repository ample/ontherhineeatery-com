import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Row, Col } from "react-flexbox-grid"

import { colors, screen } from "./global/variables"

import Container from "./layout/container"
import Button from "./button"
import HTML from "./utilities/html"
import VendorLogo from "./vendor-logo-container/vendor-logo"
import ImageTiles from "./image/tiles"

const Hero = styled.div``
const StyledLogo = styled(VendorLogo)``

const StyledPreview = styled.section`
  padding-bottom: 2.6rem;
  ${Hero} {
    position: relative;
  }
  ${StyledLogo} {
    position: relative;
    display: flex;
    margin: auto;
    margin-top: -6.4rem;
  }
  @media ${screen.max.md} {
    padding-bottom: 3.2rem;
    ${StyledLogo} {
      margin-top: -5rem;
    }
  }
  @media ${screen.max.sm} {
    ${StyledLogo} {
      margin-top: -4rem;
    }
  }
`

const VendorPreview = props => (
  <StyledPreview aria-label="Vendor">
    <Hero>
      <ImageTiles
        images={props.images}
        padding={{ desktop: "1rem", mobile: "0rem" }}
        bgcolor={colors.white}
      />
    </Hero>
    <StyledLogo
      title={props.title}
      logo={props.logo}
      featured_image={props.featured_image}
      small={true}
      to={null}
    />
    <Container padding={{ desktop: "1.4rem", mobile: "0.8rem" }}>
      <Row center="xs">
        <Col md={10} xl={8} aria-label="Vendor Description">
          <h3>{props.title}</h3>
          <HTML field={props.description} />
          <Button to={props.permalink}>Menu + Details</Button>
        </Col>
      </Row>
    </Container>
  </StyledPreview>
)

VendorPreview.propTypes = {
  images: PropTypes.array.isRequired,
  logo: PropTypes.object.isRequired, // gatsby-image fluid object,
  featured_image: PropTypes.object.isRequired, // hover state for logo
  title: PropTypes.string.isRequired,
  description: PropTypes.object.isRequired,
  permalink: PropTypes.string.isRequired
}

export default VendorPreview
