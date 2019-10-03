import React from "react"
import { storiesOf } from "@storybook/react"

import Menus from "../../src/components/menus"
import data from "../__fixtures__/vendors.json"
// import notes from "../__notes__/menus/item.md"

const stories = storiesOf("Menu", module)

stories.add(
  "Menus (Panel)",
  () => {
    const menus = data.edges[3].node.menus
    return <Menus menus={menus} />
  }
  // { notes: notes }
)
