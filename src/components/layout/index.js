import React from "react"
import PropTypes from "prop-types"

import Footer from "./footer"
import GlobalStyles from "../global/styles"
import Header from "./header"
import SEO from "./seo"

const Layout = ({ children, location, navMenus, page, settings }) => {
  const getMenu = name => navMenus.filter(m => m.title === name)[0].links

  return (
    <>
      <GlobalStyles />
      <SEO location={location} page={page} settings={settings} />
      <Header nav={getMenu("header")} />
      <main>{children}</main>
      <Footer nav={getMenu("footer")} settings={settings} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
  page: PropTypes.object.isRequired,
  settings: PropTypes.array.isRequired
}

Layout.defaultProps = {
  location: {},
  page: {}
}

export default Layout
