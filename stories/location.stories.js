import React from "react"
import { storiesOf } from "@storybook/react"

import Location from "../src/components/location"
import data from "./__fixtures__/pages"
import notes from "./__notes__/location.md"

const stories = storiesOf("Location", module)

stories.add(
  "Location",
  () => {
    return (
      <Location
        hours={data.edges[0].node.containers[0].hours.hours}
        address={data.edges[0].node.containers[0].address.address}
        phone={data.edges[0].node.containers[0].phone}
      />
    )
  },
  { notes: notes }
)
