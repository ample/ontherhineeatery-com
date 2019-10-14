import React from "react"
import { storiesOf } from "@storybook/react"

import MenuSections from "../../src/components/menus/sections"
import data from "../__fixtures__/vendors.json"
import notes from "../__notes__/menus/sections.md"

const stories = storiesOf("Menu", module)

stories.add(
  "MenuSections",
  () => {
    const sections = data.edges[4].node.menus[1].sections
    return <MenuSections sections={sections} label={sections[0].label}/>
  },
  { notes: notes }
)
