import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image/withIEPolyfill"
import { Row, Col } from "react-flexbox-grid"

import { screen } from "../global/variables"

import Container from "../layout/container"
import HTML from "../utilities/html"
import SocialIcons from "../social-icons"
import bgTexture from "../../images/bg-texture-alt.svg"

const HeroContainer = styled(Container)`
  padding-top: 3.6rem;
  img,
  picture,
  .gatsby-image-wrapper {
    width: 100%;
    height: 45rem;
    object-fit: cover;
  }

  @media ${screen.min.sm} {
    display: flex;
    background-image: url(${bgTexture});
    background-repeat: no-repeat;
    background-position: top right;
  }

  @media ${screen.min.lg} {
    background-size: 26rem;
  }

  @media ${screen.min.sm} and ${screen.max.lg} {
    background-size: 24rem;
    img,
    picture,
    .gatsby-image-wrapper {
      height: 30rem;
    }
  }

  @media ${screen.max.sm} {
    padding-top: 1.3rem;
    padding-left: 0rem;
    padding-right: 0rem;
    .container {
      padding: 0rem;
    }
    .row {
      margin: 0rem;
      > div {
        padding: 0rem;
      }
    }
    img,
    picture,
    .gatsby-image-wrapper {
      padding-right: 0rem;
      padding-left: 0rem;
      height: 26.4rem;
    }
  }
`
const ContentCol = styled(Col)``

const ContentContainer = styled(Container)`
  @media ${screen.min.md} {
    ${"" /* IE & Edge bugfix */}
    * {
      text-align: left;
    }
  }
  ${ContentCol} {
    @media ${screen.max.md} {
      margin-bottom: 8.2rem;
      h5 {
        margin-bottom: 3.6rem;
      }
    }
  }
`

const VendorJumbotron = props => (
  <>
    <HeroContainer padding={{ desktop: "0rem", mobile: "0rem" }}>
      <Row>
        <Col xs>
          <Img
            fluid={props.featured_image.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            aria-hidden={true}
          />
        </Col>
      </Row>
    </HeroContainer>
    <ContentContainer padding={{ desktop: "5rem", mobile: "5rem" }}>
      <Row center="xs" start="md">
        <Col xs>
          <h2>{props.title}</h2>
        </Col>
      </Row>
      <Row center="xs" start="md" middle="md" between="md">
        <ContentCol md={7} lg={7}>
          <HTML field={props.body} />
          {props.social_links && (
            <SocialIcons vendor={props.title} icons={props.social_links} />
          )}
        </ContentCol>
        <Col xs={7} sm={6} md={4} lg={3}>
          <Img
            fluid={props.body_image.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            aria-hidden={true}
          />
        </Col>
      </Row>
    </ContentContainer>
  </>
)

VendorJumbotron.propTypes = {
  title: PropTypes.string.isRequired,
  featured_image: PropTypes.object.isRequired,
  body: PropTypes.object.isRequired,
  body_image: PropTypes.object.isRequired,
  social_links: PropTypes.array
}

export default VendorJumbotron
