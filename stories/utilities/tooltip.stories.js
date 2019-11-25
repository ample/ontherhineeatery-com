import React from "react"
import { storiesOf } from "@storybook/react"

import Tooltip from "../../src/components/utilities/tooltip"
import notes from "../__notes__/utilities/tooltip.md"

const stories = storiesOf("Utilities", module)

stories.add(
  "Tooltip",
  () => {
    const dropdown = () => <div>Tooltip Content</div>
    return (
      <Tooltip placement="bottom" trigger="hover" tooltip={dropdown()}>
        Tooltip Trigger
      </Tooltip>
    )
  },
  { notes: notes }
)
