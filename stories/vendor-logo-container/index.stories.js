import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean } from "@storybook/addon-knobs"

import GlobalStyles from "../../src/components/global/styles"
import { colors } from "../../src/components/global/variables"

import VendorLogoContainer from "../../src/components/vendor-logo-container"
import data from "../__fixtures__/vendors"
import notes from "../__notes__/vendor-logos.md"

const stories = storiesOf("Vendor Logos", module)

stories.addDecorator(withKnobs)

stories.addParameters({
  backgrounds: [
    { name: "white", value: colors.white },
    { name: "gray200", value: colors.gray200, default: true },
  ],
})

stories.add(
  "VendorLogoContainer",
  () => {
    const vendorsList = [
      data.edges[0].node,
      data.edges[0].node,
      data.edges[0].node,
      data.edges[0].node,
      data.edges[0].node,
    ]
    const small = boolean("Small", false)
    return (
      <>
        <GlobalStyles />
        <VendorLogoContainer logos={vendorsList} small={small} />
      </>
    )
  },
  { notes: notes }
)
