import React from "react"
import { storiesOf } from "@storybook/react"
import { text, object } from "@storybook/addon-knobs"

import * as g from "../../src/components/global/variables"

import ImageTiles from "../../src/components/image/tiles"
import data from "../__fixtures__/vendors.json"
import notes from "../__notes__/image/tiles.md"

const stories = storiesOf("Images", module)

stories.add(
  "Image Tiles",
  () => {
    let bgColor = text("bgColor", g.colors.gray100)
    let padding = object("padding", {
      desktop: "4rem",
      mobile: "2rem"
    })
    return (
      <ImageTiles
        images={data.edges[0].node.images}
        bgColor={bgColor}
        padding={padding}
      />
    )
  },
  { notes: notes }
)
