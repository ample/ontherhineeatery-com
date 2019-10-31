import React from "react"
import { StaticQuery, graphql } from "gatsby"

// eslint-disable-next-line
import EventAttributes from "../../fragments/event-attributes"

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
      const events = data.events.edges.map(({ node }) => (
        <h2 key={node.id}>{node.title}</h2>
      ))
      return <>{events}</>
    }}
  />
)

EventsContainer.propTypes = {}

EventsContainer.defaultProps = {}

export default EventsContainer
