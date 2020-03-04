import React from "react"
import styled from "styled-components"
import { Row, Col } from "react-flexbox-grid"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import dig from "object-dig"

import { screen, colors } from "../global/variables"
import Container from "../layout/container"
import Link from "../utilities/link"
import HTML from "../utilities/html"
import WeeklyEventImage from "../../images/header_img-1@2x.png"

const OneColumnContainer = styled(Container)`
  /* One column styles here ... */
`

const TwoColumnContainer = styled(Container)`
  /* Two column styles here ... */

  ${StyledRow} {
    /* Nested styled row styles here ... */
  }
`

const StyledRow = styled(Row)`
  border-style: solid;
  border-color: ${colors.gray300};
  border-width: 0 0 1px 0;

  &:last-of-type {
    border-style: none;
  }

  .col-lg-9,
  .col-md-6 {
    padding-left: 16px;
    padding-right: 16px;

    &:first-of-type {
      > div {
        position: relative;

        :after {
          background-color: ${colors.gray300};
          position: absolute;
          right: -15px;
          height: 100%;
          top: 0;
          box-sizing: border-box;
          border: 0.5px solid ${colors.gray300};

          @media ${screen.max.md} {
            border-style: none;
          }
        }
      }
    }
  }

  .has-image {
    align-self: center;
  }

  @media ${screen.max.md} {
    border-style: none;
    padding-bottom: 0;
  }
`

const StyledImage = styled.div`
  .gatsby-image-wrapper {
    margin-top: 20px;
    margin-bottom: 20px;

    @media ${screen.max.md} {
      height: 24rem;
      margin-bottom: 0px;
    }
  }
`

const StyledDetails = styled.div`
  text-align: left;
  margin: 3rem 0;

  :after {
    content: "";
  }

  ul {
    display: inline-block;
    padding: 0;
    text-align: left;

    li {
      display: inline;

      :after {
        content: "•";
        letter-spacing: 1em;
        background: center center no-repeat;
        padding-left: 1rem;
        white-space: nowrap;
      }

      :last-of-type {
        :after {
          content: " ";
        }
      }
    }
  }

  h3 {
    margin-bottom: 1.5rem;
  }

  a,
  a > h3 {
    text-decoration: none;
  }

  a:hover > h3,
  a:focus > h3 {
    text-decoration: underline;
  }

  @media ${screen.max.md} {
    img {
      height: 100%;
      width: 50%;
      height: 12rem;
    }

    a > h3 {
      text-decoration: underline;
    }

    .gatsby-image-wrapper {
      margin-bottom: 1.8rem;
    }
  }
`

const StyledCol = styled(Col)`
  h2 {
    margin-bottom: 3rem;
  }
  h3 {
    margin-bottom: 1.5rem;
    margin-top: 3rem;
    @media ${screen.max.md} {
      margin-top: 1.5rem;
    }
  }
  img {
    height: 250px;
    width: auto;
  }
`

const StyledEvents = styled.div`
  background-color: ${colors.gray200};
  padding-top: 3rem;
`

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
        <StyledImage>
          <Img fluid={image.fluid} objectFit="cover" objectPosition="50% 50%" aria-hidden={true} />
        </StyledImage>
      )

      const eventDetails = event => (
        <StyledDetails>
          {eventTitle(event)}
          <h6>{event.subtitle}</h6>
          {event.body && <HTML field={event.body} />}
          <ul>
            <li>8 pm - 2 am</li>
            <li>8 pm - 2 am</li>
            <li>8 pm - 2 am</li>
          </ul>
          {event.meta && event.meta.map((m, i) => <p key={i}>{m}</p>)}
        </StyledDetails>
      )

      const eventsLayout = []
      events.map(event => {
        if (event.image) return eventsLayout.push([event.image, event])
        const lastRow = eventsLayout[eventsLayout.length - 1]
        return (lastRow || []).length === 1 ? lastRow.push(event) : eventsLayout.push([event])
      })

      const eventsHtml = eventsLayout.map((cols, idx) => (
        <StyledRow key={idx}>
          {cols.map((col, idx) => (
            <Col
              md={props.layout === "One Column" ? 12 : 6}
              key={idx}
              className={col.fluid ? "has-image" : null}
            >
              {col.fluid ? eventImage(col) : eventDetails(col)}
            </Col>
          ))}
        </StyledRow>
      ))

      const ContainerTagName =
        props.layout === "One Column" ? OneColumnContainer : TwoColumnContainer

      return (
        <>
          <ContainerTagName as="section" aria-label={props.title}>
            {props.body && <HTML field={props.body} />}
            <Row center="xs">
              <Col lg={9}>{eventsHtml}</Col>
            </Row>
          </ContainerTagName>

          <StyledEvents>
            <Container>
              <Row center="xs">
                <StyledCol lg={9}>
                  <h2>Weekly Events</h2>
                  <img
                    alt=""
                    src={WeeklyEventImage}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    aria-hidden={true}
                  />

                  <h3>Sunday Brunch</h3>
                  <h6>New American comfort food</h6>
                  <p>
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                    mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam
                    eget risus varius blandit sit amet non magna.
                  </p>
                </StyledCol>
              </Row>
            </Container>
          </StyledEvents>
        </>
      )
    }}
  />
)

export default EventsContainer
