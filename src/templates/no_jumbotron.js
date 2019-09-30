import React from "react"
import { graphql } from "gatsby"

// eslint-disable-next-line
import PageAttributes from "../fragments/page-attributes"

import Containers from "../components/containers"
import ImageHero from "../components/image/hero"
import Layout from "../components/layout"

const Page = props => {
  const { page } = props.data
  const { navMenus, settings } = props.pageContext

  return (
    <Layout
      navMenus={navMenus}
      settings={settings}
      page={page}
      location={props.location}
    >
      {page.image && <ImageHero image={page.image} />}
      <Containers data={page.containers} />
    </Layout>
  )
}

export default Page

export const query = graphql`
  query NoJumbotronPageQuery($id: String!) {
    page: contentfulPage(contentful_id: { eq: $id }) {
      ...PageAttributes
    }
  }
`
