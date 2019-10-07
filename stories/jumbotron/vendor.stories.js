import React from "react"
import { storiesOf } from "@storybook/react"

import * as g from "../../src/components/global/variables"

import VendorJumbotron from "../../src/components/jumbotron/vendor"
import data from "../__fixtures__/vendors.json"
import notes from "../__notes__/jumbotron/vendor.md"

const stories = storiesOf("Jumbotron", module)
const vendor = data.edges[4].node

stories.add(
  "VendorJumbotron",
  () => (
    <VendorJumbotron
      title={vendor.title}
      featured_image={vendor.featured_image}
      body={vendor.body}
      body_image={vendor.body_image}
      social_links={vendor.socialLinks}
    />
  ),
  { notes: notes }
)
