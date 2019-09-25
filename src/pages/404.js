import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Row, Col } from "react-flexbox-grid"
// import Img from "gatsby-image/withIEPolyfill"

import { screen } from "../components/global/variables"

import Layout from "../components/layout"
import GlobalStyles from "../components/global/styles"
import Container from "../components/layout/container"

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

const NotFoundPage = ({ data, ...props }) => (
  <Layout
    navMenus={data.navMenus.edges.map(n => n.node)}
    settings={data.settings.edges.map(n => n.node)}
    location={props.location}
  >
    <GlobalStyles />

    <Container
      className="text-center"
      padding={{ desktop: "3.6rem", mobile: "3.6rem" }}
    >
      <Row center="md">
        <Col lg={9}>
          <StyledHero>
            {/* <Img
              fluid={props.hero.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
            /> */}
          </StyledHero>
        </Col>
      </Row>
      <Row center="md">
        <Col md={9} lg={7} xl={6}>
          <h3>Page Not Found</h3>
          <p class="text-sm">
            The page you're trying to access cannot be located.
          </p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default NotFoundPage

export const query = graphql`
  query NotFoundPageQuery {
    navMenus: allContentfulNavMenu {
      edges {
        node {
          id
          title
          links {
            id
            title
            url
          }
        }
      }
    }

    settings: allContentfulSetting {
      edges {
        node {
          key
          value {
            value
          }
        }
      }
    }
  }
`
