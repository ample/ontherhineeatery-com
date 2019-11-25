import React from "react"
import { storiesOf } from "@storybook/react"

import * as g from "../../src/components/global/variables"

import Header from "../../src/components/layout/header"
import navMenus from "../__fixtures__/nav_menus"

const stories = storiesOf("Layout", module)

stories.add("Header", () => {
  return <Header nav={navMenus.edges[1].node.links} />
})
