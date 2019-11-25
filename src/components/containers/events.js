import React from "react"
import styled from "styled-components"
import { Row, Col } from "react-flexbox-grid"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
// eslint-disable-next-line
import EventAttributes from "../../fragments/event-attributes"

import { screen } from "../global/variables"
import Container from "../layout/container"
import Link from "../utilities/link"
import HTML from "../utilities/html"

const StyledLink = styled(Link)`
  display: block;
  text-align: left;
  text-decoration: none;
  margin-bottom: 3.6rem;
  &:hover h3,
  &:focus h3 {
    text-decoration: ${props => (props.as === "div" ? "none" : "underline")};
  }

  img,
  picture,
  .gatsby-image-wrapper {
    height: 100%;
    height: 24.6rem;
  }

  @media ${screen.max.md} {
    margin-bottom: 5rem;
    text-align: center;
    h3 {
      text-decoration: ${props => (props.as === "div" ? "none" : "underline")};
    }
    .gatsby-image-wrapper {
      margin-bottom: 1.8rem;
    }
  }
`

const EventsContainer = props => (
  <StaticQuery
    query={graphql`
      {
        events: allContentfulEvent(sort: { fields: [title] }) {
          edges {
            node {
              ...EventAttributes
            }
          }
        }
      }
    `}
    render={data => {
      const events = data.events.edges.map(({ node }, idx) => (
        <StyledLink
          as={node.permalink ? Link : "div"}
          to={node.permalink && node.permalink}
          key={`special-event_${idx}`}
          aria-label={`Event: ${node.title}. Description: ${node.subtitle}. ${node.body.body}`}
        >
          <Row>
            {node.image && (
              <Col md={5} xl={4}>
                <Img
                  fluid={node.image.fluid}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  aria-hidden={true}
                />
              </Col>
            )}
            <Col xs>
              <h3>{node.title}</h3>
              <h6>{node.subtitle}</h6>
              {node.body && <HTML field={node.body} />}
            </Col>
          </Row>
        </StyledLink>
      ))
      return (
        <Container as="section" aria-label="Upcoming Special Events">
          <Row center="xs">
            <Col lg={9}>{events}</Col>
          </Row>
        </Container>
      )
    }}
  />
)

export default EventsContainer
