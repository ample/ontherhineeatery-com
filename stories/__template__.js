import React from "react"
import { storiesOf } from "@storybook/react"
// import { text } from "@storybook/addon-knobs"

import * as g from "../src/components/global/variables"

import /* Component */ from "../src/components/"
// import data from "./__fixtures__/component"
// import notes from "./__notes__/component.md"

const stories = storiesOf(/* Story Group */, module)
// stories.addParameters({
//   backgrounds: [
//     { name: "white", value: g.colors.white, default: true },
//     { name: "gray200", value: g.colors.gray200, default: false },
//     { name: "robinegg", value: g.colors.robinegg, default: false },
//     { name: "gray700", value: g.colors.gray700, default: false },
//   ],
// })

stories.add(
  /* Story Name */,
  () => {
    // let knob = text("Text", "Hello World")

    return (
      {/* <Component /> */}
    )
  },
  // { notes: notes }
)
