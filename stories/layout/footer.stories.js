import React from "react"
import { storiesOf } from "@storybook/react"

import Footer from "../../src/components/layout/footer"
import settings from "../__fixtures__/settings"
import navMenus from "../__fixtures__/nav_menus"

const stories = storiesOf("Layout", module)

stories.add("Footer", () => {
  return (
    <Footer
      settings={settings.edges.map(s => s.node)}
      nav={navMenus.edges[0].node.links}
    />
  )
})
