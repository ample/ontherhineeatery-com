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
  padding: 2.3rem 7rem 2.3rem 4.4rem;
  position: relative;
  @media ${g.screen.max.md} {
    padding: 1.4rem;
  }
`

const StyledLogo = styled(Logo)`
  height: 4.5rem;
  @media ${g.screen.max.md} {
    height: 3.5rem;
  }
`

const Header = props => (
  <StyledHeader>
    <Link to="/" aria-label="On The Rhine Logo - Home Page Link">
      <StyledLogo />
    </Link>
    <MediaQuery query={g.screen.max.sm}>
      <NavMobile nav={props.nav} />
    </MediaQuery>
    <MediaQuery query={g.screen.min.sm}>
      <NavLinks nav={props.nav} />
    </MediaQuery>
  </StyledHeader>
)

Header.propTypes = {
  nav: PropTypes.array.isRequired,
}

export default Header
