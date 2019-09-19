import React from "react"
import { storiesOf } from "@storybook/react"
import { boolean } from "@storybook/addon-knobs"

import { colors } from "../../src/components/global/variables"

import VendorLogoContainer from "../../src/components/vendor-logo-container"
import data from "../__fixtures__/vendors"
import notes from "../__notes__/vendor-logo-container/index.md"

const stories = storiesOf("Vendor Logos", module)

stories.addParameters({
  backgrounds: [
    { name: "white", value: colors.white },
    { name: "gray200", value: colors.gray200, default: true }
  ]
})

stories.add(
  "VendorLogoContainer",
  () => {
    const vendorsList = [
      data.edges[0].node,
      data.edges[0].node,
      data.edges[0].node,
      data.edges[0].node,
      data.edges[0].node
    ]
    const small = boolean("Small", false)
    return <VendorLogoContainer logos={vendorsList} small={small} />
  },
  { notes: notes }
)
