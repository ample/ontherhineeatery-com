import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"
import { Grid, Row, Col } from "react-flexbox-grid"

import * as g from "../global/variables"

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
  position: relative;
  z-index: 10;
  ${Title} {
    position: relative;
    background-color: ${props => props.color};
    min-height: ${props => (props.hero ? "48.8rem" : "auto")};
    z-index: 19;
    padding: 9rem 3.2rem;
    padding-bottom: ${props => (props.hero ? "20rem" : "3.2rem")};
    hgroup {
      position: relative;
      z-index: 20;
    }
  }
  ${Hero} {
    position: relative;
    z-index: 30;
    width: 100%;
    margin-top: calc((38.2rem / -2) + 3rem);
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
    ${Title} {
      display: ${props => (props.hero ? "block" : "flex")};
      flex-direction: column;
      justify-content: center;
      padding-bottom: ${props => (props.hero ? "15.8rem" : "3.2rem")};
      padding-top: ${props => (props.hero ? "9rem" : "3.2rem")};
      min-height: ${props => (props.hero ? "auto" : "34rem")};
    }
    ${Hero} {
      margin-top: calc((30rem / -2) + 3.2rem);
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
  gray: g.colors.gray500
}

const Jumbotron = props => (
  <StyledJumbotron
    className="text-center"
    hero={props.hero ? true : false}
    color={colorList[props.color]}
  >
    <Title>
      <hgroup>
        <h1 className="text-light">{props.title}</h1>
        <h4 className={props.color === "gray" ? "text-light" : ""}>
          {props.subtitle}
        </h4>
      </hgroup>
      {props.texture && (
        <Texture>
          <Img fluid={props.texture.fluid} />
        </Texture>
      )}
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
  </StyledJumbotron>
)

Jumbotron.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  hero: PropTypes.object, // contains fluid image
  texture: PropTypes.object, // contains fluid image
  color: PropTypes.string
}

Jumbotron.defaultProps = {
  color: "robinegg" // "gray", "cantaloupe", "robinegg"
}

export default Jumbotron
