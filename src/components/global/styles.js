import React from "react"
import PropTypes from "prop-types"
import { css, createGlobalStyle } from "styled-components"

import normalize from "./normalize"

const allstyles = css`
  ${normalize}
`

const GlobalStyles = createGlobalStyle`${allstyles}`

export default GlobalStyles
