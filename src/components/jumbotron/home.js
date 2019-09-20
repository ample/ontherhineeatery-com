import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"
import MediaQuery from "react-responsive"
import { Grid, Row, Col } from "react-flexbox-grid"

import * as g from "../global/variables"

import Container from "../layout/container"

const Content = styled(Container)`
  @media ${g.screen.max.sm} {
    padding-left: 0rem;
    padding-right: 0rem;
  }
`
const StyledRow = styled(Row)``
const ContentCol = styled(Col)``
const ImgCol = styled(Col)``

const Background = styled.div`
  position: absolute;
  width: calc((8 / 12) * 100vw);
  height: calc(100% + 5.5rem);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  @media ${g.screen.max.md} {
    width: 100%;
    height: 100%;
  }
`

const StyledJumbotron = styled.section`
  position: relative;
  .col-color {
    background-color: ${props => props.color};
  }
  h1{
    margin-top: 6.8rem;
  }
  ${ContentCol} {
    order: 1;
    z-index: 2;
    padding-left: 3.2rem;
    padding-right: 3.2rem;
  }

  ${ImgCol} {
    order: 2;
    img,
    picture,
    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
      max-height: 57.8rem;
      object-fit: cover;
    }
    ${"" /* IE 11 fallback */}
    @media all and (-ms-high-contrast:none) {
      .gatsby-image-wrapper {
        width: auto !important;
        height: 100%;
        max-height: none;
      }
      img,
      picture {
        width: auto !important;
        max-height: none;
        height: 100%;
        margin-left: -50%;
      }
    }
    @media all and (-ms-high-contrast:none) and ${g.screen.max.md}{
      img,
      picture {
        height: auto;
        width: 100% !important;
        margin-left: 0px;
      }
    }
  }

  @media ${g.screen.min.md} and ${g.screen.max.lg} {
    h1{
      margin-top: 3.4rem;
    }
    ${ImgCol} {
      img,
      picture,
      .gatsby-image-wrapper {
        max-height: 48rem;
      }
    }
  }

  @media ${g.screen.max.md} {
    h1{
      margin-top: 1.5rem;
      font-size: 11.2rem;
    }
    ${Content} {
      padding-top: 3rem;
      padding-bottom: 3rem;
    }
    ${ContentCol} {
      order: 2;
      text-align: center;
    }
    ${ImgCol} {
      order: 1;
      padding-right: 0rem;
      padding-left: 0rem;
      img,
      picture,
      .gatsby-image-wrapper {
        max-height: 28.4rem;
      }
    }
  }

  @media ${g.screen.max.sm} {
    ${Content} {
      padding-top: 0rem;
    }
    ${ImgCol} {
      img,
      picture,
      .gatsby-image-wrapper {
        margin: 0rem;
        border-left: 0rem;
        border-right: 0rem;
      }
    }
  }
`

const HomeJumbotron = ({ children, ...props }) => (
  <StyledJumbotron color={props.color}>
    <Background className="col-color" />
    <Content padding={{ desktop: "5rem", mobile: "5rem" }}>
      <StyledRow between="xl">
        <ContentCol sm={12} md={7} xl={6}>
          {children}
        </ContentCol>
        {props.hero && (
          <ImgCol m={12} md={5}>
            <Img fluid={props.hero.fluid} className="border" />
          </ImgCol>
        )}
      </StyledRow>
    </Content>
  </StyledJumbotron>
)

HomeJumbotron.propTypes = {
  hero: PropTypes.object, // contains fluid image
  color: PropTypes.string
}

HomeJumbotron.defaultProps = {
  color: g.colors.robinegg
}

export default HomeJumbotron
