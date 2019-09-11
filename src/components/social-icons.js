import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import SVG from "react-inlinesvg"

import * as g from "./global/variables"

import Link from "./utilities/link"
import website from "../images/icons/social-instagram.svg"
import facebook from "../images/icons/social-facebook.svg"
import instagram from "../images/icons/social-instagram.svg"
import twitter from "../images/icons/social-twitter.svg"

const Icon = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0.2rem;
  padding: 0.4rem;
  svg {
    width: 1.8rem;
    fill: ${props => (props.dark ? g.colors.gray300 : "#4A4A4A")};
    transition: fill 0.1s ease-out;
  }

  &:hover svg,
  &:focus svg {
    fill: ${props => (props.dark ? g.colors.white : g.colors.gray700)};
  }

  @media ${g.screen.max.sm} {
    svg {
      width: ${props => (props.dark ? "1.5rem" : "1.8rem")};
      height: ${props => (props.dark ? "1.5rem" : "1.8rem")};
    }
  }
`

const typeList = {
  website: website,
  facebook: facebook,
  instagram: instagram,
  twitter: twitter,
}

const SocialIcons = props => (
  <div>
    {props.icons.map((icon, idx) => (
      <Icon
        to={icon.url}
        key={`social_${props.vendor.replace(/\s/g, "")}_${idx}`}
        dark={props.dark ? 1 : 0}
      >
        <SVG
          src={typeList[icon.icon]}
          aria-label={`${props.vendor} ${icon.icon} Link`}
        />
      </Icon>
    ))}
  </div>
)

SocialIcons.propTypes = {
  icons: PropTypes.array.isRequired,
  // valid icon types: "facebook", "twitter", "instagram", "website"
  vendor: PropTypes.string.isRequired,
  dark: PropTypes.bool,
}

SocialIcons.defaultProps = {
  dark: false,
}

export default SocialIcons
