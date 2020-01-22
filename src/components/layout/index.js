import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Footer from "./footer"
import GlobalStyles from "../global/styles"
import Header from "./header"
import SEO from "./seo"
import HelloBarScript from "./hellobar"

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  footer {
    flex-grow: 1;
  }
`

const Layout = ({ children, location, navMenus, page, settings }) => {
  const getMenu = name => navMenus.filter(m => m.title === name)[0].links

  return (
    <>
      <GlobalStyles />
      <SEO location={location} page={page} settings={settings} />
      <StyledLayout>
        <Header nav={getMenu("header")} />
        <main>{children}</main>
        <Footer nav={getMenu("footer")} settings={settings} />
        <HelloBarScript />
      </StyledLayout>
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
