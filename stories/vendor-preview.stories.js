import React from "react"
import { storiesOf } from "@storybook/react"

import VendorPreview from "../src/components/vendor-preview"
import data from "./__fixtures__/vendors.json"
import notes from "./__notes__/vendor-preview.md"

const stories = storiesOf("Vendor Preview", module)

stories.add(
  "Vendor Preview",
  () => (
    <VendorPreview
      images={data.edges[0].node.images}
      logo={data.edges[0].node.logo}
      featured_image={data.edges[0].node.featured_image}
      title={data.edges[0].node.title}
      description={data.edges[0].node.description}
      permalink={data.edges[0].node.permalink}
    />
  ),
  { notes: notes }
)
