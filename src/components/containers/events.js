import React from "react"
import styled from "styled-components"
import { Row, Col } from "react-flexbox-grid"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import dig from "object-dig"

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
      // Filter events
      const events = data.events.edges
        .map(({ node }) => node)
        .filter(event => {
          // If the container hasn't specified an event type, show all events.
          if (!props.event_type) return true
          // Otherwise, the event's event type must match the container's event
          // type.
          return (
            dig(event, "event_type", "contentful_id") ===
            dig(props, "event_type", "contentful_id")
          )
        })

      const eventsHtml = events.map((event, idx) => (
        <StyledLink
          as={event.permalink ? Link : "div"}
          to={event.permalink && event.permalink}
          key={`special-event_${idx}`}
          aria-label={`Event: ${event.title}. Description: ${event.subtitle}. ${event.body.body}`}
        >
          <Row>
            {event.image && (
              <Col md={5} xl={4}>
                <Img
                  fluid={event.image.fluid}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  aria-hidden={true}
                />
              </Col>
            )}
            <Col xs>
              <h3>{event.title}</h3>
              <h6>{event.subtitle}</h6>
              {event.body && <HTML field={event.body} />}
            </Col>
          </Row>
        </StyledLink>
      ))
      return (
        <Container as="section" aria-label="Upcoming Special Events">
          <Row center="xs">
            <Col lg={9}>{eventsHtml}</Col>
          </Row>
        </Container>
      )
    }}
  />
)

export default EventsContainer
