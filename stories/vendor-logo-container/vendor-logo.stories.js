import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean } from "@storybook/addon-knobs"

import GlobalStyles from "../../src/components/global/styles"
import { colors } from "../../src/components/global/variables"

import VendorLogo from "../../src/components/vendor-logo-container/vendor-logo"
import data from "../__fixtures__/vendors"
import notes from "../__notes__/vendor-logo-container/vendor-logo.md"

const stories = storiesOf("Vendor Logos", module)

stories.addDecorator(withKnobs)

stories.addParameters({
  backgrounds: [
    { name: "white", value: colors.white },
    { name: "gray200", value: colors.gray200, default: true },
  ],
})

stories.add(
  "VendorLogo",
  () => {
    const vendor = data.edges[0].node
    const small = boolean("Small", false)
    return (
      <>
        <GlobalStyles />
        <VendorLogo
          title={vendor.title}
          logo={vendor.logo}
          featured_image={vendor.featured_image}
          small={small}
          to={`/${vendor.permalink}`}
        />
      </>
    )
  },
  { notes: notes }
)