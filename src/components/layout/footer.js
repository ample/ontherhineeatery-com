import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import * as g from "../global/variables"
import { useSetting, useMapLink } from "../hooks"

import Link from "../utilities/link"
import Logo from "../logo"
import SocialIcons from "../social-icons"
import NavLinks from "./nav-links"

const StyledFooter = styled.footer`
  padding: 6.4rem 2.4rem 2.4rem 2.4rem;
  background-color: ${g.colors.gray800};

  @media ${g.screen.max.md} {
    padding: 3rem 2.4rem 5.5rem 2.4rem;
  }
`

const StyledLogo = styled(Logo)`
  height: 6.5rem;
  @media ${g.screen.max.md} {
    height: 5rem;
  }
`

const StyledNavLinks = styled(NavLinks)`
  padding: 3.2rem 2.4rem 2.4rem 2.4rem;
`

const Hours = styled.div`
  color: ${g.colors.white + "B3"};
  list-style-type: none;
  margin-bottom: 2.4rem;
`

const LocationLink = styled(Link)`
  display: block;
  color: ${g.colors.white + "B3"};
  &:last-of-type {
    margin-bottom: 2.4rem;
  }
  &:hover,
  &:focus {
    color: ${g.colors.white};
  }
`

const Copyright = styled.p`
  color: ${g.colors.white + "66"};
  max-width: 60%;
  margin: auto;
  margin-top: 3rem;
`

const Footer = props => {
  const getSetting = name => useSetting(props.settings, name)
  return (
    <StyledFooter className="text-center">
      <Link to="/" aria-label="On The Rhine Logo - Home Page Link">
        <StyledLogo />
      </Link>

      <StyledNavLinks nav={props.nav} />

      <Hours
        aria-label="On The Rhine Food Hall Hours"
        className="newline"
        dangerouslySetInnerHTML={{
          __html: getSetting("hours"),
        }}
      />

      <LocationLink
        to={useMapLink(getSetting("address"))}
        aria-label={`On The Rhine Google Maps Link`}
        className="newline"
        dangerouslySetInnerHTML={{
          __html: getSetting("address"),
        }}
      />

      <LocationLink
        to={`tel:${getSetting("phone")}`}
        target="_self"
        aria-label={`On The Rhine Phone Number Link`}
      >
        {getSetting("phone")}
      </LocationLink>

      <SocialIcons
        vendor="On The Rhine Food Hall"
        icons={JSON.parse(getSetting("footer_icons"))}
        dark={true}
      />

      <Copyright className="text-xs">{getSetting("copyright")}</Copyright>
    </StyledFooter>
  )
}

Footer.propTypes = {
  settings: PropTypes.array.isRequired,
  nav: PropTypes.array.isRequired,
}

export default Footer
