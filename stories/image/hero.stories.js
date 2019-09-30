import React from "react"
import { storiesOf } from "@storybook/react"

import * as g from "../../src/components/global/variables"

import ImageHero from "../../src/components/image/hero"
import data from "../__fixtures__/pages.json"
import notes from "../__notes__/image/hero.md"

const stories = storiesOf("Images", module)

stories.addParameters({
  backgrounds: [
    { name: "white", value: g.colors.white, default: true },
    { name: "robinegg", value: g.colors.robinegg }
  ]
})

stories.add("Hero", () => <ImageHero image={data.edges[0].node.image} />, {
  notes: notes
})
