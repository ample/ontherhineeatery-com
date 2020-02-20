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
        ...GatsbyContentfulFluid_withWebp_noBase64
      }
    }
    image {
      fluid(maxWidth: 2400) {
        ...GatsbyContentfulFluid_withWebp
      }
      file {
        url
      }
    }
    layout
    containers {
      ... on ContentfulContentContainer {
        title
        blocks {
          ... on ContentfulContentBlock {
            id
            title
            body {
              body
              childMarkdownRemark {
                html
              }
            }
            button_label
            button_url
          }
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
          action
          form_fields {
            name
            label
            required
            options {
              label
              value
            }
            type
          }
        }
      }
      ... on ContentfulEventsContainer {
        title
        contentful_id
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
    meta_image {
      file {
        url
      }
    }
    meta_description {
      meta_description
    }
  }
`
