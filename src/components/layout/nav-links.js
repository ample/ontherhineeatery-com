import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

import * as g from "../global/variables"

import Link from "../utilities/link"
import Tooltip from "../utilities/tooltip"

const StyledLink = styled(Link)``

export const StyledText = css`
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
  &:focus,
  &.nav-active {
    cursor: pointer;
    color: ${g.colors.gray300};
  }

  @media ${g.screen.max.sm} {
    margin: 0.2rem;
    padding: 0.6rem;
    font-size: 1.4rem;
    letter-spacing: 0.07rem;
  }
`

const Wrapper = styled.nav`
  .trigger,
  ${StyledLink} {
    ${StyledText}
  }
  @media ${g.screen.max.sm} {
    display: flex;
    flex-direction: column;
  }
`

const NavLink = props => (
  <StyledLink
    to={props.url}
    activeClassName="nav-active"
    aria-label={props.title.toLowerCase()}
    key={`navLink_${props.idx}`}
    tabIndex={props.tabIndex}
  >
    {props.title}
  </StyledLink>
)

const NavLinks = ({ className, ...props }) => {
  const dropdown = (links, idx) =>
    links.map((navItem, d_idx) => (
      <NavLink key={`${idx}_${d_idx}`} {...navItem} />
    ))
  return (
    <Wrapper className={className} aria-label="Navigation">
      {props.nav.map((navItem, idx) =>
        navItem.children_links ? (
          <Tooltip
            placement="bottom-start"
            trigger={"hover"}
            tooltip={dropdown(navItem.children_links, idx)}
            key={`tooltip_${idx}`}
          >
            {navItem.title}
          </Tooltip>
        ) : (
          <NavLink key={idx} {...navItem} />
        )
      )}
    </Wrapper>
  )
}

NavLinks.propTypes = {
  nav: PropTypes.array.isRequired
}

export default NavLinks
