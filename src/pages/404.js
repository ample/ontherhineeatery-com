import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import GlobalStyles from "../components/global/styles"
import Jumbotron from "../components/jumbotron"

const NotFoundPage = ({ data }) => (
  <Layout
    navMenus={data.navMenus.edges.map(n => n.node)}
    settings={data.settings.edges.map(n => n.node)}
  >
    <GlobalStyles />

    <Jumbotron
      title="Page Not Found"
      subtitle="The page you're trying to access cannot be located."
      color="robinegg"
    />
  </Layout>
)

export default NotFoundPage

export const query = graphql`
  query NotFoundPageQuery {
    navMenus: allContentfulNavMenu {
      edges {
        node {
          id
          title
          links {
            id
            title
            url
          }
        }
      }
    }

    settings: allContentfulSetting {
      edges {
        node {
          key
          value {
            value
          }
        }
      }
    }
  }
`
