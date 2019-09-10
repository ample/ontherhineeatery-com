import React from "react"
import { storiesOf } from "@storybook/react"

import GlobalStyles from "../src/components/global/styles"

storiesOf("Welcome", module).add("to Storybook", () => (
  <GlobalStyles>
    <p>Hi there</p>
  </GlobalStyles>
))
