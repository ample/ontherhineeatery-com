import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import * as g from "./global/variables"
import Link from "./utilities/link"

const StyledButton = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: ${props => (props.bold ? 600 : 400)};
  text-decoration: none;
  color: ${g.colors.gray400};
  background: ${g.colors.white};
  height: 5rem;
  padding: 0rem ${props => props.padding};
  border: 0.2rem solid ${g.colors.gray500};
  border-radius: 0.3rem;
  transition: background 0.15s ease-in, box-shadow 0.1s ease-in,
    color 0.1s ease-in;

  &:hover,
  &:focus {
    background: ${g.colors.gray500};
    box-shadow: inset 0 0.1rem 0.9rem 0 rgba(0, 0, 0, 0.5);
    color: ${g.colors.white};
    cursor: pointer;
    transition: background 0.15s ease-out, box-shadow 0.1s ease-out,
      color 0.1s ease-out;
  }

  @media ${g.screen.min.sm} {
    font-size: 1.6rem;
  }

  @media ${g.screen.max.sm} {
    height: 4rem;
    font-size: 1.3rem;
    border: 0.16rem solid ${g.colors.gray500};
    border-radius: 0.24rem;
  }
`

const Button = ({ children, bold, ...props }) => (
  <StyledButton bold={bold ? 1 : 0} as={!props.to ? "button" : Link} {...props}>
    {children}
  </StyledButton>
)

Button.propTypes = {
  bold: PropTypes.bool,
  padding: PropTypes.string, // single rem value, for left & right padding only

  // Link Props
  to: PropTypes.string,
  target: PropTypes.string, // exclusive to external links
  activeClassName: PropTypes.string // exclusive to internal links
}

Button.defaultProps = {
  bold: false,
  padding: "3.6rem"
}

export default Button
