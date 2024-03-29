import React from "react"
import { storiesOf } from "@storybook/react"
import { number } from "@storybook/addon-knobs"

import Menus from "../../src/components/menus"
import data from "../__fixtures__/vendors.json"
import notes from "../__notes__/menus/index.md"

const stories = storiesOf("Menu", module)

stories.add(
  "Menus (Primary)",
  () => {
    const menus = data.edges[4].node.menus
    const tabCount = number("Tab Count", menus.length, {
      range: true,
      min: 1,
      max: menus.length,
      step: 1
    })
    return <Menus menus={menus.slice(0, tabCount)} />
  },
  { notes: notes }
)
