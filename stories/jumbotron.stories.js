import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean, select } from "@storybook/addon-knobs"

import GlobalStyles from "../src/components/global/styles"
import * as g from "../src/components/global/variables"

import Jumbotron from "../src/components/jumbotron"
import data from "./__fixtures__/pages.json"
// import notes from "./__notes__/jumbotron.md"

const stories = storiesOf("Jumbotron", module)

stories.addDecorator(withKnobs)

stories.add(
  "Jumbotron",
  () => {
    let hero = boolean("hero", true)
    let bgTexture = boolean("bgTexture", true)
    let bgColor = select(
      "bgColor",
      {
        Gray: "gray",
        Robinegg: "robinegg",
        Cantaloupe: "cantaloupe",
      },
      "robinegg"
    )
    return (
      <>
        <GlobalStyles />
        <Jumbotron
          title={data.edges[0].node.title}
          subtitle={data.edges[0].node.subtitle}
          hero={hero ? data.edges[0].node.image : null}
          bgTexture={bgTexture ? data.edges[0].node.image : null}
          bgColor={bgColor}
        />
      </>
    )
  }
  // { notes: notes }
)
