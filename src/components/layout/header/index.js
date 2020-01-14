import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import MediaQuery from "react-responsive"

import * as g from "../../global/variables"

import Link from "../../utilities/link"
import Logo from "../../logo"
import NavLinks from "../nav-links"
import NavMobile from "./nav-mobile"

const StyledHeader = styled.header`
  background-color: ${g.colors.gray800};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 6rem 1.8rem 4.4rem;
  position: relative;
  @media ${g.screen.max.xl} {
    padding: 1.1rem 1.4rem;
  }
`

const StyledLogo = styled(Logo)`
  height: 5.5rem;

  @media ${g.screen.max.xl} {
    height: 4.2rem;
  }

  ${"" /* IE 11 fallback */}
  @media all and (-ms-high-contrast:none) {
    max-width: 12rem;
  }
  @media all and (-ms-high-contrast: none) and ${g.screen.max.md} {
    max-width: 8rem;
  }
`

const Header = props => (
  <StyledHeader>
    <Link to="/" aria-label="On The Rhine Logo - Home Page Link">
      <StyledLogo />
    </Link>
    <MediaQuery query={g.screen.max.xl}>
      <NavMobile nav={props.nav} />
    </MediaQuery>
    <MediaQuery query={g.screen.min.xl}>
      <NavLinks nav={props.nav} />
    </MediaQuery>
  </StyledHeader>
)

Header.propTypes = {
  nav: PropTypes.array.isRequired
}

export default Header
