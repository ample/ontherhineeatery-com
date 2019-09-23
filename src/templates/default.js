import React from "react"
import { graphql } from "gatsby"

// eslint-disable-next-line
import PageAttributes from "../fragments/page-attributes"

import Containers from "../components/containers"
import Jumbotron from "../components/jumbotron"
import Layout from "../components/layout"

const Page = props => {
  const { page } = props.data
  const { navMenus, settings } = props.pageContext

  return (
    <Layout navMenus={navMenus} settings={settings}>
      <Jumbotron
        title={page.title}
        subtitle={page.subtitle}
        hero={page.image}
        texture={page.jumbotron_texture}
        color={page.jumbotron_color}
      />

      <Containers data={page.containers} />
    </Layout>
  )
}

export default Page

export const query = graphql`
  query DefaultPageQuery($id: String!) {
    page: contentfulPage(contentful_id: { eq: $id }) {
      ...PageAttributes
    }
  }
`
