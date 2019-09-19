import React from "react"
import { storiesOf } from "@storybook/react"
import { boolean } from "@storybook/addon-knobs"

import { colors } from "../../src/components/global/variables"

import VendorLogo from "../../src/components/vendor-logo-container/vendor-logo"
import data from "../__fixtures__/vendors"
import notes from "../__notes__/vendor-logo-container/vendor-logo.md"

const stories = storiesOf("Vendor Logos", module)

stories.addParameters({
  backgrounds: [
    { name: "white", value: colors.white },
    { name: "gray200", value: colors.gray200, default: true }
  ]
})

stories.add(
  "VendorLogo",
  () => {
    const vendor = data.edges[0].node
    const small = boolean("Small", false)
    const link = boolean("Includes a `to` prop.", true)
    return (
      <VendorLogo
        title={vendor.title}
        logo={vendor.logo}
        featured_image={vendor.featured_image}
        small={small}
        to={link ? `/${vendor.permalink}` : null}
      />
    )
  },
  { notes: notes }
)
