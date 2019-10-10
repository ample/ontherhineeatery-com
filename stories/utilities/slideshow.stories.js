import React from "react"
import { storiesOf } from "@storybook/react"

import Slideshow from "../../src/components/utilities/slideshow"
import notes from "../__notes__/utilities/slideshow.md"

const stories = storiesOf("Utilities", module)

stories.add(
  "Slideshow",
  () => (
    <Slideshow>
      <div>
        <img src="https://via.placeholder.com/400x150?text=1" alt="" />
      </div>
      <div>
        <img src="https://via.placeholder.com/400x250?text=2" alt="" />
      </div>
      <div>
        <img src="https://via.placeholder.com/400x100?text=3" alt="" />
      </div>
    </Slideshow>
  ),
  { notes: notes }
)
