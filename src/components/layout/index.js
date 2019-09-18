import React from "react"
import PropTypes from "prop-types"

import Footer from "./footer"
import GlobalStyles from "../global/styles"
import Header from "./header"

const Layout = ({ children, navMenus, settings }) => {
  const getMenu = name => navMenus.filter(m => m.title === name)[0].links

  console.log(navMenus)

  return (
    <>
      <GlobalStyles />
      <Header nav={getMenu("header")} />
      <main>{children}</main>
      <Footer nav={getMenu("footer")} settings={settings} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
