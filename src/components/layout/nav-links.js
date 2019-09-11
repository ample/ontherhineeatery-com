import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import * as g from "../global/variables"

import Link from "../utilities/link"

const Wrapper = styled.nav`
  a {
    margin: 1rem;
    padding: 1rem;
    font-family: ${g.fonts.acumin};
    font-size: 1.7rem;
    font-weight: 600;
    text-transform: uppercase;
    color: ${g.colors.white};
    letter-spacing: 0.08rem;
    text-decoration: none;
    &:hover,
    &:focus {
      color: ${g.colors.gray300};
    }
  }
  @media ${g.screen.max.sm} {
    display: flex;
    flex-direction: column;
    a {
      margin: 0.2rem;
      padding: 0.6rem;
      font-size: 1.4rem;
      letter-spacing: 0.07rem;
    }
  }
`

const NavLinks = ({ className, ...props }) => (
  <Wrapper className={className}>
    {props.nav.map((navItem, idx) => (
      <Link
        to={navItem.url}
        activeClassName="nav-active"
        aria-label={navItem.title.toLowerCase()}
      >
        {navItem.title}
      </Link>
    ))}
  </Wrapper>
)

NavLinks.propTypes = {
  nav: PropTypes.array.isRequired,
}

export default NavLinks
