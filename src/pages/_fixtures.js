import React from "react"
import { graphql } from "gatsby"

import Container from "../components/layout/container"
import Layout from "../components/layout"

const FixturesPage = ({ data, pageContext }) => (
  <Layout
    navMenus={data.navMenus.edges.map(n => n.node)}
    settings={data.settings.edges.map(n => n.node)}
    location={pageContext.location}
  >
    <Container>
      <h2>Events</h2>
      <pre>{JSON.stringify(data.events, null, 2)}</pre>

      <h2>Nav Menus</h2>
      <pre>{JSON.stringify(data.navMenus, null, 2)}</pre>

      <h2>Pages</h2>
      <pre>{JSON.stringify(data.pages, null, 2)}</pre>

      <h2>Settings</h2>
      <pre>{JSON.stringify(data.settings, null, 2)}</pre>

      <h2>Vendors</h2>
      <pre>{JSON.stringify(data.vendors, null, 2)}</pre>
    </Container>
  </Layout>
)

export default FixturesPage

export const query = graphql`
  {
    pages: allContentfulPage {
      edges {
        node {
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
      }
    }

    vendors: allContentfulVendor {
      edges {
        node {
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
          menus {
            title
            label
            sections {
              id
              title
              label
              items {
                id
                title
                label
                price
                body {
                  body
                  childMarkdownRemark {
                    html
                  }
                }
              }
            }
          }
        }
      }
    }

    settings: allContentfulSetting {
      edges {
        node {
          id
          key
          value {
            value
          }
        }
      }
    }

    navMenus: allContentfulNavMenu {
      edges {
        node {
          id
          title
          links {
            id
            title
            url
            children_links {
              id
              title
              url
            }
          }
        }
      }
    }

    events: allContentfulEvent {
      edges {
        node {
          id
          title
          permalink
          date
          subtitle
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
      }
    }
  }
`
