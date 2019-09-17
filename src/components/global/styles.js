import React from "react"
import PropTypes from "prop-types"
import { css, createGlobalStyle } from "styled-components"

import * as g from "./variables"
import normalize from "./_normalize"

const brand = css`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: ${g.fonts.source};
    font-size: 16px;
    font-size: 1.6rem;
    line-height: 1.5;
    color: ${g.colors.gray800 + "B3"};
  }

  a {
    color: inherit;
    transition: color 0.1s ease-out;
  }

  img,
  svg {
    display: inline-block;
    vertical-align: middle;
  }

  p {
    margin-top: 0;
    margin-bottom: 1em;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-transform: uppercase;
    margin: 0;
    line-height: 1;
  }

  h1,
  h2,
  h3 {
    font-family: ${g.fonts.oswald};
  }

  h4,
  h5,
  h6 {
    font-family: ${g.fonts.source};
    font-weight: 300;
    color: ${g.colors.black};
    margin-bottom: 0.7em;
  }

  h1 {
    font-weight: 500;
    font-size: 14rem;
    color: ${g.colors.gray800};
    line-height: 0.9;
    letter-spacing: -0.8rem;
    margin-bottom: 3rem;
  }

  h2 {
    font-weight: 700;
    font-size: 6.4rem;
    color: ${g.colors.black};
    letter-spacing: -0.2rem;
    margin-bottom: 1.3rem;
  }

  h3 {
    font-weight: 700;
    font-size: 3.6rem;
    color: ${g.colors.black};
    letter-spacing: -0.1rem;
    margin-bottom: 1.1rem;
  }

  h4 {
    font-size: 2.4rem;
    letter-spacing: 0.5rem;
  }

  h5 {
    font-size: 2.1rem;
    letter-spacing: 0.4rem;
  }

  h6 {
    font-size: 1.9rem;
    letter-spacing: 0.4rem;
  }

  ${"" /* Utility Classes */}
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  section,
  nav,
  header,
  footer,
  div {
    &.text-center,
    &.text-center * {
      text-align: center;
    }
    &.text-light,
    &.text-light * {
      color: ${g.colors.white};
    }
    &.text-xs,
    &.text-xs * {
      font-size: 1.3rem;
      line-height: 1.85;
    }
    &.text-sm,
    &.text-sm * {
      font-size: 1.4rem;
      line-height: 1.5;
    }
    ${"" /* Use 'md' only as a reset. This is the default style. */}
    &.text-md,
    &.text-md * {
      font-size: 1.6rem;
      line-height: 1.5;
    }
    &.text-quote,
    &.text-quote * {
      font-family: ${g.fonts.oswald};
      font-weight: 700;
      text-transform: uppercase;
      text-align: center;
      font-size: 3.6rem;
      color: ${g.colors.cantaloupe};
      letter-spacing: -0.1rem;
      line-height: 1.11;
    }
  }

  img,
  svg,
  picture,
  .gatsby-image-wrapper {
    &.border {
      border: 1rem solid ${g.colors.white};
    }
  }

  code,
  pre {
    font-family: "courier";
    font-size: 1.3rem;
  }

  ${"" /* Handles '\n' characters.  */}
  .newline {
    white-space: pre-line;
  }

  ${"" /* Styles below 'md' breakpoint */}

  @media ${g.screen.max.md} {
    body {
      font-size: 1.4rem;
      line-height: 1.4;
    }

    h1 {
      font-size: 9rem;
      letter-spacing: -0.5rem;
      margin-bottom: 1.7rem;
    }

    h2 {
      font-size: 5.1rem;
      letter-spacing: -0.16rem;
      margin-bottom: 1.1rem;
    }

    h3 {
      font-size: 2.8rem;
      letter-spacing: -0.08rem;
    }

    h4 {
      font-size: 1.9rem;
      letter-spacing: 0.4rem;
      line-height: 1.25
    }

    h5,
    h6 {
      font-size: 1.7rem;
      letter-spacing: 0.32rem;
    }

    p,
    section,
    nav,
    header,
    footer,
    div {
      &.text-xs,
      &.text-xs * {
        font-size: 1.05rem;
      }
      ${"" /* Use 'md' only as a reset. This is the default style. */}
      &.text-md,
      &.text-md * {
        font-size: 1.4rem;
        line-height: 1.4;
      }
      &.text-quote,
      &.text-quote * {
        font-size: 2.8rem;
      }
    }

    code,
    pre {
      font-family: "courier";
      font-size: 1.2rem;
    }
  }
`

const allstyles = css`
  ${normalize}
  ${brand}
`

const GlobalStyles = createGlobalStyle`${allstyles}`

export default GlobalStyles
