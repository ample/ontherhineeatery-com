import React from "react"
import { storiesOf } from "@storybook/react"
import { text } from "@storybook/addon-knobs"

import MenuItem from "../../src/components/menu/item"
import data from "../__fixtures__/vendors.json"
// import notes from "../__notes__/menu/item.md"

const stories = storiesOf("Menu", module)

stories.add(
  "MenuItem",
  () => {
    const item = data.edges[0].node.menus[0].items[0]
    const price = text("price", item.price)
    return (
      <MenuItem
        title={item.title}
        price={item.price}
        body={item.body}
      />
    )
  }
  // { notes: notes }
)
