import { graphql } from "gatsby"

export const EventAttributes = graphql`
  fragment EventAttributes on ContentfulEvent {
    id
    contentful_id
    title
    subtitle
    meta
    date
    image {
      fluid(maxWidth: 2400) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
    body {
      body
      childMarkdownRemark {
        html
      }
    }
    event_type {
      contentful_id
      title
    }
  }
`
