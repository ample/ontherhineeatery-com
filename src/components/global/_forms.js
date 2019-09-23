import { css } from "styled-components"

import * as g from "./variables"

const fieldMixin = css`
  width: 100%;
  margin: 1rem auto;
  padding: 2rem;
  border: 1px solid ${g.colors.white};
  height: 4.8rem;
  &::placeholder {
    font-style: italic;
    color: ${g.colors.gray500};
  }
  &.invalid {
    box-shadow: 0rem 0rem 0rem 0.2rem ${g.colors.cantaloupe};
  }
`

const formStyles = css`
  ${"" /* "/global/_normalize.js" includes additional form style resets */}

  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1rem 0rem;
  }

  input,
  textarea,
  select {
    ${fieldMixin}
    :hover {
      border: 1px solid ${g.colors.gray300};
    }
    :focus {
      outline: none;
      border: 1px solid ${g.colors.robinegg};
    }
  }

  textarea {
    height: auto;
    min-height: 4.8rem;
  }

  form button {
    margin-top: 1rem;
  }

${"" /* utility classes */}
@media ${g.screen.min.sm} {
  .field-50 {
    width: calc(50% - 1rem);
    &.col-left {
      margin-right: 1rem;
    }
    &.col-right {
      margin-left: 1rem;
    }
  }
}

${"" /* Bug fix for react-flexbox-grid */}
  @media ${g.screen.max.md} {
    form  {
      font-size: 1.6rem;
      padding: 0rem 0.7rem;
    }
  }
}
`

export { fieldMixin }
export { formStyles as default }
