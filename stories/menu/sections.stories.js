import React from "react"
import { storiesOf } from "@storybook/react"

import MenuSections from "../../src/components/menus/sections"
import data from "../__fixtures__/vendors.json"
// import notes from "../__notes__/menus/item.md"

const stories = storiesOf("Menu", module)

stories.add(
  "MenuSections",
  () => {
    const sections = data.edges[3].node.menus[6].sections
    return <MenuSections sections={sections} />
  }
  // { notes: notes }
)
