import React from "react"
import { storiesOf } from "@storybook/react"

import GlobalStyles from "../src/components/global/styles"
import * as g from "../src/components/global/variables"

import Location from "../src/components/location"
import data from "./__fixtures__/pages"
import notes from "./__notes__/location.md"

const stories = storiesOf("Location", module)

stories.add(
  "Location",
  () => {
    return (
      <>
        <GlobalStyles />
        <Location
          hours={data.edges[0].node.containers[0].blocks[1].body}
          address={data.edges[0].node.containers[0].blocks[0].body}
        />
      </>
    )
  },
  { notes: notes }
)
