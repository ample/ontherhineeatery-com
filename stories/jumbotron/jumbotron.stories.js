import React from "react"
import { storiesOf } from "@storybook/react"
import { boolean, select } from "@storybook/addon-knobs"

import * as g from "../../src/components/global/variables"

import Jumbotron from "../../src/components/jumbotron/"
import data from "../__fixtures__/pages.json"
import notes from "../__notes__/jumbotron/jumbotron.md"

const stories = storiesOf("Jumbotron", module)

stories.add(
  "Jumbotron",
  () => {
    let hero = boolean("hero", true)
    let jumbotron_texture = boolean("jumbotron_texture", true)
    let jumbotron_color = select(
      "jumbotron_color",
      {
        Gray: "gray",
        Robinegg: "robinegg",
        Cantaloupe: "cantaloupe"
      },
      "robinegg"
    )
    return (
      <>
        <Jumbotron
          title={data.edges[0].node.title}
          subtitle={data.edges[0].node.subtitle}
          hero={hero ? data.edges[0].node.image : null}
          texture={
            jumbotron_texture ? data.edges[0].node.jumbotron_texture : null
          }
          color={jumbotron_color}
        />
        {/* Sample Component */}
        <div style={{ border: "1px solid orange", height: 100 }}>
          /* Next Container */
        </div>
      </>
    )
  },
  { notes: notes }
)
