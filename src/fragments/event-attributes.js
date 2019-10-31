import { graphql } from "gatsby"

export const EventAttributes = graphql`
  fragment EventAttributes on ContentfulEvent {
    id
    title
    subtitle
    permalink
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
  }
`
