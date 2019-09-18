import React, { useState } from "react"
import Select from "react-select"
import styled from "styled-components"

import { colors } from "../global/variables"
import { fieldMixin } from "../global/_forms"

const StyledSelect = styled(Select)`
  ${fieldMixin}
  height: auto;
  padding: 0rem;
  border: none;
  *:hover {
    cursor: pointer;
  }

  ${"" /* Field container */}
  .form-select__control {
    box-shadow: none;
    border: 1px solid ${colors.white};
    &:hover {
      border: 1px solid ${colors.gray300};
    }
    &--is-focused {
      box-shadow: none;
      border: 1px solid ${colors.robinegg};
      &:hover {
        border: 1px solid ${colors.robinegg};
      }
    }
    &--menu-is-open {
      box-shadow: 0rem 0.3rem 0.6rem ${colors.gray300};
    }
  }

  ${"" /* Text inside field */}
  .form-select__value-container {
    padding: 0rem 2rem;
  }
  .form-select__input input,
  .form-select__value-container * {
    margin: 0rem;
  }

  ${"" /* Placeholder text */}
  .form-select__placeholder {
    font-style: italic;
  }

  ${"" /* Drop down arrow */}
  .form-select__indicator-separator {
    display: none;
  }

  .form-select__dropdown-indicator {
    padding: 0rem 1.5rem;
  }

  ${"" /* Opened Menu */}
  .form-select__menu {
    border-radius: none;
    margin-top: -0.1rem;
    padding: 0.1rem 0.5rem;
    border: 0.1rem solid ${colors.robinegg};
    border-top: 0.1rem solid ${colors.gray300};
    box-shadow: 0rem 0.3rem 0.6rem ${colors.gray300};
    text-align: left;
  }
`

const FormSelect = ({ className, ...props }) => {
  const [selectedOption, setSelect] = useState()

  return (
    <StyledSelect
      value={selectedOption}
      onChange={() => setSelect(selectedOption)}
      className={className}
      classNamePrefix="form-select"
      required
      theme={theme => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary: colors.robinegg,
          primary75: colors.robinegg + "BF",
          primary50: colors.robinegg + "80",
          primary25: colors.robinegg + "40",
          neutral20: colors.gray300, // indicator
          neutral40: colors.gray300, // indicator:hover
          neutral60: colors.gray300 // indicator:focus
        }
      })}
      {...props}
    />
  )
}

// See react-select documentation for props:
// https://react-select.com/props

FormSelect.defaultProps = {
  isSearchable: false
}

export default FormSelect
