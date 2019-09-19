import React from "react"
import { storiesOf } from "@storybook/react"
import { text } from "@storybook/addon-knobs"

import GlobalStyles from "../src/components/global/styles"
import { colors } from "../src/components/global/variables"

import Logo from "../src/components/logo"
import notes from "./__notes__/logo.md"

const stories = storiesOf("Logo", module)

stories.addParameters({
  backgrounds: [
    { name: "white", value: colors.white },
    { name: "gray800", value: colors.gray800, default: true },
  ],
})

stories.add(
  "Logo",
  () => {
    let color = text("Color", "#FFFFFF")
    return (
      <>
        <GlobalStyles />
        <Logo color={color} style={{ maxWidth: 300 }} />
      </>
    )
  },
  { notes: notes }
)
