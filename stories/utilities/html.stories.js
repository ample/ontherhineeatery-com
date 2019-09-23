import React from "react"
import { storiesOf } from "@storybook/react"

import HTML from "../../src/components/utilities/html"

import fixture from "../__fixtures__/utilities/html"
import notes from "../__notes__/utilities/html.md"

const stories = storiesOf("Utilities", module)

stories.add(
  "HTML",
  () => {
    return <HTML field={fixture[0].data} />
  },
  {
    knobs: { escapeHTML: false },
    notes: notes
  }
)
