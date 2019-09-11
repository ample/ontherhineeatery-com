import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import * as g from "../global/variables"

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
`

const Address = styled.div`
  color: ${g.colors.white + "B3"};
  text-decoration: underline;
  padding: 2.4rem;
`

const Copyright = styled.p`
  color: ${g.colors.white + "66"};
  max-width: 60%;
  margin: auto;
  margin-top: 3rem;
`

const Footer = props => {
  const getSetting = name => {
    const collection = props.settings.filter(n => n.node.key === name)
    return collection.length > 0 ? collection[0].node.value.value : null
  }
  // console.log("this is the setting: ", getSetting("address"))
  return (
    <StyledFooter className="text-center">
      <Link to="/" aria-label="On The Rhine Logo - Home Page Link">
        <StyledLogo />
      </Link>
      <StyledNavLinks nav={props.nav} />
      <Hours
        aria-label="On The Rhine Food Hall Hours"
        dangerouslySetInnerHTML={{
          __html: getSetting("hours").replace(/\n/g, "<br />"),
        }}
      ></Hours>
      <Address
        dangerouslySetInnerHTML={{
          __html: getSetting("address").replace(/\n/g, "<br />"),
        }}
      />
      <SocialIcons
        vendor="On The Rhine Food Hall"
        icons={props.social} // Replace with footer social links
        dark={true}
      />
      <Copyright className="text-xs">{getSetting("copyright")}</Copyright>
    </StyledFooter>
  )
}

Footer.propTypes = {
  settings: PropTypes.object.isRequired,
  nav: PropTypes.array.isRequired,
  social: PropTypes.object.isRequired,
}

export default Footer
