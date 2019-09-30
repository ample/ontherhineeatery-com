import React from "react"
import { graphql } from "gatsby"

// eslint-disable-next-line
import PageAttributes from "../fragments/page-attributes"

import Containers from "../components/containers"
import Layout from "../components/layout"

const NotFoundPage = ({ data, ...props }) => (
  <Layout
    navMenus={data.navMenus.edges.map(n => n.node)}
    settings={data.settings.edges.map(n => n.node)}
    page={data.page}
    location={props.location}
  >
    <Containers data={data.page.containers} />
  </Layout>
)

export default NotFoundPage

export const query = graphql`
  query NotFoundPageQuery {
    page: contentfulPage(layout: { eq: "404" }) {
      ...PageAttributes
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
