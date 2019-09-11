import React from "react"
import { storiesOf } from "@storybook/react"

import GlobalStyles from "../../src/components/global/styles"
import * as g from "../../src/components/global/variables"

import Footer from "../../src/components/layout/footer"
import settings from "../__fixtures__/settings"
import navMenus from "../__fixtures__/nav_menus"
import vendors from "../__fixtures__/vendors"

const stories = storiesOf("Layout", module)

stories.add("Footer", () => {
  return (
    <>
      <GlobalStyles />
      <Footer
        settings={settings.edges}
        nav={navMenus.edges[0].node.links}
        social={vendors.edges[0].node.socialLinks}
      />
    </>
  )
})
