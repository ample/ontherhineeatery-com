import React from "react"
import { storiesOf } from "@storybook/react"
import { text } from "@storybook/addon-knobs"

import GlobalStyles from "../../src/components/global/styles"
import Link from "../../src/components/utilities/link"

import data from "../__fixtures__/utilities/link"
import notes from "../__notes__/utilities/link.md"

const stories = storiesOf("Utilities", module)

stories.add(
  "Link",
  () => (
    <>
      <GlobalStyles />
      {data.map((link, i) => (
        <div key={`link_${i}`} style={{ margin: 40 }}>
          <div>{link.desc}</div>
          <Link to={link.url}>{link.label}</Link>
        </div>
      ))}
    </>
  ),
  { notes: notes }
)
