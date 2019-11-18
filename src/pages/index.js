import React from "react"
import { graphql } from "gatsby"

// eslint-disable-next-line
import PageAttributes from "../fragments/page-attributes"

import * as g from "../components/global/variables"

import Containers from "../components/containers"
import GlobalStyles from "../components/global/styles"
import HomeJumbotron from "../components/jumbotron/home"
import HTML from "../components/utilities/html"
import Layout from "../components/layout"

const IndexPage = props => {
  const { navMenus, page, settings } = props.data

  return (
    <Layout
      navMenus={navMenus.edges.map(n => n.node)}
      settings={settings.edges.map(n => n.node)}
      page={page}
      location={props.location}
    >
      <GlobalStyles />
      <HomeJumbotron hero={page.image} color={g.colors[page.jumbotron_color]}>
        <HTML field={page.containers[0].blocks[0].body} />
      </HomeJumbotron>

      <Containers data={page.containers.slice(1)} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomePageQuery {
    page: contentfulPage(layout: { eq: "home" }) {
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
            children_links {
              id
              title
              url
            }
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
