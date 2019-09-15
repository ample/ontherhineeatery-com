import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"
import { Grid, Row, Col } from "react-flexbox-grid"

import * as g from "./global/variables"

const Title = styled.div``
const Hero = styled.div``

const Texture = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  img,
  picture,
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center !important;
    mix-blend-mode: screen;
  }
`

const StyledJumbotron = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.color};
  height: ${props => (props.hero ? "48.8rem" : "auto")};
  position: relative;
  z-index: 10;
  ${Title} {
    position: relative;
    z-index: 20;
    padding: 3.2rem;
    padding-top: 9rem;
  }
  ${Hero} {
    position: relative;
    z-index: 30;
    width: 100%;
    margin-top: 0.8rem;
    img,
    picture,
    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
      max-height: 38.2rem;
      object-fit: cover;
    }
  }

  @media ${g.screen.min.sm} and ${g.screen.max.md} {
    height: ${props => (props.hero ? "38.2rem" : "auto")};
    ${Title} {
      padding-top: ${props => (props.hero ? "9rem" : "3.2rem")};
      display: ${props => (props.hero ? "block" : "flex")};
      flex-direction: column;
      justify-content: center;
      min-height: ${props => (props.hero ? "auto" : "34rem")};
    }
    ${Hero} {
      img,
      picture,
      .gatsby-image-wrapper {
        max-height: 30rem;
      }
    }
  }

  @media ${g.screen.max.sm} {
    height: auto;
    ${Title} {
      padding: 3.2rem;
      order: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 34rem;
    }
    ${Hero} {
      order: 1;
      margin-top: 0rem;
      img,
      picture,
      .gatsby-image-wrapper {
        width: auto;
        height: 60rem;
      }
      .container {
        padding: 0rem;
      }
      .row {
        margin: 0rem;
        > div {
          padding: 0rem;
        }
      }
      .border {
        border-left: 0rem;
        border-right: 0rem;
      }
    }
  }
`

const colorList = {
  robinegg: g.colors.robinegg,
  cantaloupe: g.colors.cantaloupe,
  gray: g.colors.gray500,
}

const Jumbotron = props => (
  <StyledJumbotron
    className="text-center"
    hero={props.hero ? true : false}
    color={colorList[props.jumbotron_color]}
  >
    <Title>
      <h1 className="text-light">{props.title}</h1>
      <h4 className={props.jumbotron_color === "gray" ? "text-light" : ""}>
        {props.subtitle}
      </h4>
    </Title>
    {props.hero && (
      <Hero>
        <Grid>
          <Row center="xs">
            <Col lg={10}>
              <Img fluid={props.hero.fluid} className="border" />
            </Col>
          </Row>
        </Grid>
      </Hero>
    )}
    {props.jumbotron_texture && (
      <Texture>
        <Img fluid={props.jumbotron_texture.fluid} />
      </Texture>
    )}
  </StyledJumbotron>
)

Jumbotron.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  hero: PropTypes.object, // contains fluid image
  jumbotron_texture: PropTypes.object, // contains fluid image
  jumbotron_color: PropTypes.string,
}

Jumbotron.defaultProps = {
  jumbotron_color: "robinegg", // "gray", "cantaloupe", "robinegg"
}

export default Jumbotron
