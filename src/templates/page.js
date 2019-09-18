import React from "react"
import { graphql } from "gatsby"
// import PropTypes from "prop-types"

// eslint-disable-next-line
import PageAttributes from "../fragments/page-attributes"

import Layout from "../components/layout"

const Page = props => {
  // const { page } = props.data
  const { navMenus, settings } = props.pageContext
  // console.log(navMenus)
  // console.log(page)
  return (
    <Layout navMenus={navMenus} settings={settings}>
      123
    </Layout>
  )
}

export default Page

export const query = graphql`
  query PageQuery($id: String!) {
    page: contentfulPage(contentful_id: { eq: $id }) {
      ...PageAttributes
    }
  }
`
