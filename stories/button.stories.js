import React from "react"
import { storiesOf } from "@storybook/react"
import { text, boolean } from "@storybook/addon-knobs"

import Button from "../src/components/button"
import notes from "./__notes__/button.md"

const stories = storiesOf("Button", module)

stories.add(
  "Button",
  () => {
    let bold = boolean("Bold", false)
    let padding = text("Padding", "3.6rem")
    let to = boolean("To", true)
    return (
      <Button to={to ? "/" : null} bold={bold} padding={padding}>
        Renders as {to ? "<a>" : "<button>"}
      </Button>
    )
  },
  { notes: notes }
)
