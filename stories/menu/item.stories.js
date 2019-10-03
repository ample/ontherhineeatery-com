import React from "react"
import { storiesOf } from "@storybook/react"
import { text } from "@storybook/addon-knobs"

import MenuItem from "../../src/components/menus/item"
import data from "../__fixtures__/vendors.json"
// import notes from "../__notes__/menus/item.md"

const stories = storiesOf("Menu", module)

stories.add(
  "MenuItem",
  () => {
    const item = data.edges[3].node.menus[6].sections[0].items[0]
    const price = text("price", item.price)
    return (
      <MenuItem
        label={item.label}
        price={price}
        body={item.body}
      />
    )
  }
  // { notes: notes }
)
