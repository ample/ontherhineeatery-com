import React from "react"
import { storiesOf } from "@storybook/react"
import { boolean } from "@storybook/addon-knobs"

import * as g from "../src/components/global/variables"

import SocialIcons from "../src/components/social-icons"
import data from "./__fixtures__/vendors"
import notes from "./__notes__/social-icons.md"

const stories = storiesOf("Social Icons", module)

stories.addParameters({
  backgrounds: [
    { name: "white", value: g.colors.white, default: true },
    { name: "gray800", value: g.colors.gray800 }
  ]
})

stories.add(
  "Social Icons",
  () => {
    const dark = boolean("Dark", false)
    return (
      <SocialIcons
        vendor={data.edges[0].node.permalink}
        icons={data.edges[0].node.socialLinks}
        dark={dark}
      />
    )
  },
  { notes: notes }
)
