import React from "react"
import { storiesOf } from "@storybook/react"
import { text } from "@storybook/addon-knobs"

import MenuSections from "../../src/components/menu/sections"
import data from "../__fixtures__/vendors.json"
// import notes from "../__notes__/menu/item.md"

const stories = storiesOf("Menu", module)

stories.add(
  "MenuSections",
  () => {
    const menus = data.edges[3].node.menus[6].sections
    return <MenuSections menus={menus} />
  }
  // { notes: notes }
)
