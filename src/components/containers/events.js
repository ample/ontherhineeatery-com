import React from "react"
import styled from "styled-components"
import { Row, Col } from "react-flexbox-grid"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import dig from "object-dig"

// import { screen } from "../global/variables"
import Container from "../layout/container"
import Link from "../utilities/link"
import HTML from "../utilities/html"

// const StyledEvent = styled(Row)`
//   margin-bottom: 3.6rem;
//   text-align: left;

//   a,
//   a > h3 {
//     text-decoration: none;
//   }

//   a:hover > h3,
//   a:focus > h3 {
//     text-decoration: underline;
//   }

//   img,
//   picture,
//   .gatsby-image-wrapper {
//     height: 100%;
//     height: 24.6rem;
//   }

//   @media ${screen.max.md} {
//     margin-bottom: 5rem;
//     text-align: center;

//     a > h3 {
//       text-decoration: underline;
//     }

//     .gatsby-image-wrapper {
//       margin-bottom: 1.8rem;
//     }
//   }
// `

const EventsContainer = props => (
  <StaticQuery
    query={graphql`
      {
        events: allContentfulEvent {
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
        .filter(event => dig(event, "event_type", "contentful_id") === dig(props, "contentful_id"))
        .sort((a, b) => (a[props.sort] > b[props.sort] ? 1 : -1))

      const eventTitle = event => {
        const title = <h3>{event.title}</h3>
        if (!event.attachment && !event.permalink) return title
        return (
          <Link to={event.attachment ? dig(event, "attachment", "file", "url") : event.permalink}>
            {title}
          </Link>
        )
      }

      const eventImage = image => (
        <Img fluid={image.fluid} objectFit="cover" objectPosition="50% 50%" aria-hidden={true} />
      )

      const eventDetails = event => (
        <>
          {eventTitle(event)}
          <h6>{event.subtitle}</h6>
          {event.body && <HTML field={event.body} />}
          <p>---</p>
          <p>Meta stuff goes here ...</p>
          {event.meta && event.meta.map((m, i) => <p key={i}>{m}</p>)}
        </>
      )

      const eventsLayout = []
      events.map(event => {
        if (event.image) return eventsLayout.push([event.image, event])
        const lastRow = eventsLayout[eventsLayout.length - 1]
        return (lastRow || []).length === 1 ? lastRow.push(event) : eventsLayout.push([event])
      })

      const eventsHtml = eventsLayout.map((cols, idx) => (
        <Row key={idx}>
          {cols.map((col, idx) => (
            <Col md={props.layout === "One Column" ? 12 : 6}>
              {col.fluid ? eventImage(col) : eventDetails(col)}
            </Col>
          ))}
        </Row>
      ))

      return (
        <Container as="section" aria-label="Upcoming Special Events" layout={props.layout}>
          {props.body && <HTML field={props.body} />}
          <p>---</p>
          <p>
            <strong>
              This container should have {props.layout} and a {props.background_color} background
              color.
            </strong>
          </p>
          <Row center="xs">
            <Col lg={9}>{eventsHtml}</Col>
          </Row>
        </Container>
      )
    }}
  />
)

export default EventsContainer
