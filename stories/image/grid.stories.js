import React from "react"
import { storiesOf } from "@storybook/react"

import GlobalStyles from "../../src/components/global/styles"
import * as g from "../../src/components/global/variables"

import ImageGrid from "../../src/components/image/grid"
import data from "../__fixtures__/pages.json"
import notes from "../__notes__/image/grid.md"

const stories = storiesOf("Images", module)

stories.addParameters({
  backgrounds: [
    { name: "white", value: g.colors.white, default: true},
    { name: "robinegg", value: g.colors.robinegg },
  ],
})

stories.add(
  "Image Grid",
  () => {
    return (
      <>
        <GlobalStyles />
        <ImageGrid images={data.edges[1].node.containers[0].blocks} />
      </>
    )
  },
  { notes: notes }
)
