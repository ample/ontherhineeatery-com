import React from "react"
import { storiesOf } from "@storybook/react"
import { boolean } from "@storybook/addon-knobs"

import * as g from "../../src/components/global/variables"
import data from "../__fixtures__/pages.json"

import TwoColContainer from "../../src/components/layout/two-col"
import notes from "../__notes__/layout/two-col.md"

const stories = storiesOf("Layout", module)

stories.add(
  "TwoColContainer",
  () => {
    const image1 = data.edges[1].node.containers[1].blocks[0].image
    const image2 = data.edges[1].node.containers[1].blocks[1].image
    const content_block = data.edges[1].node.containers[0].blocks[0]
    return (
      <>
        <TwoColContainer
          image1={image1}
          image2={image2}
          content_block={content_block}
        />
        {/* Sample Component */}
        <div style={{ border: "1px solid orange", height: 100 }}>
          /* Next Container */
        </div>
      </>
    )
  },
  { notes: notes }
)
