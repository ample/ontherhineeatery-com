import React from "react"
import { storiesOf } from "@storybook/react"

import GlobalStyles from "../../src/components/global/styles"
import HTML from "../../src/components/utilities/html"

import fixture from "../__fixtures__/utilities/html"
import notes from "../__notes__/utilities/html.md"

const stories = storiesOf("Utilities", module)

stories.add(
  "HTML",
  () => {
    return (
      <GlobalStyles>
        <HTML field={fixture[0].data} />
      </GlobalStyles>
    )
  },
  {
    knobs: { escapeHTML: false },
    notes: notes,
  }
)
