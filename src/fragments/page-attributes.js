import { graphql } from "gatsby"

export const PageAttributes = graphql`
  fragment PageAttributes on ContentfulPage {
    id
    title
    permalink
    subtitle
    jumbotron_color
    jumbotron_texture {
      fluid(maxWidth: 2400) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
    image {
      fluid(maxWidth: 2400) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
    layout
    containers {
      ... on ContentfulContentContainer {
        title
        blocks {
          # ... on ContentfulContentBlock {
          #   id
          #   title
          #   body {
          #     body
          #     childMarkdownRemark {
          #       html
          #     }
          #   }
          #   # button_label
          #   # button_url
          # }
          ... on ContentfulImageBlock {
            id
            title
            image {
              fluid(maxWidth: 2400) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
        background_color
        style
      }
      ... on ContentfulFormContainer {
        id
        title
        body {
          body
          childMarkdownRemark {
            html
          }
        }
        formConfig {
          name
          label
          required
          options
          type
        }
      }
      ... on ContentfulLocationContainer {
        title
        address {
          address
        }
        hours {
          hours
        }
        phone
      }
      ... on ContentfulVendorsContainer {
        title
        body {
          body
          childMarkdownRemark {
            html
          }
        }
        expanded
      }
    }
  }
`