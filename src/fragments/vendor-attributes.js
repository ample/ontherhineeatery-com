import { graphql } from "gatsby"

export const VendorAttributes = graphql`
  fragment VendorAttributes on ContentfulVendor {
    id
    title
    permalink
    logo {
      fluid(maxWidth: 2400) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
    featured_image {
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
    body_image {
      fluid(maxWidth: 2400) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
    description {
      description
      childMarkdownRemark {
        html
      }
    }
    menu_pdf {
      file {
        url
      }
    }
    images {
      fluid(maxWidth: 2400) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
    hours {
      hours
    }
    socialLinks {
      icon
      url
    }
  }
`
