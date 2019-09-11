import React from "react"
import { storiesOf } from "@storybook/react"
// import { withKnobs, text } from "@storybook/addon-knobs"

import GlobalStyles from "../../src/components/global/styles"
import * as g from "../../src/components/global/variables"

import Footer from "../../src/components/layout/footer"
import settings from "../__fixtures__/settings"
import navMenus from "../__fixtures__/nav_menus"
import vendors from "../__fixtures__/vendors"
// import notes from "./__notes__/component.md"

const stories = storiesOf("Layout", module)

// stories.addDecorator(withKnobs)

stories.add(
  "Footer",
  () => {
    // let knob = text("Text", "Hello World")

    return (
      <>
        <GlobalStyles />
        {console.log("node: ", navMenus.edges[0].node.links)}
        <Footer
          settings={settings.edges}
          nav={navMenus.edges[0].node.links}
          social={vendors.edges[0].node.socialLinks}
        />
      </>
    )
  }
  // { notes: notes }
)
