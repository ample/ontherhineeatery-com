import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"

import * as g from "../global/variables"

import Link from "../utilities/link"

const StyledLogo = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: ${props => (props.small ? "0.3rem" : "0.6rem")};
  border: 0.4rem solid ${g.colors.gray100};
  border-radius: 100%;
  background-color: ${g.colors.white};
  width: ${props => (props.small ? "8.8rem" : "16.8rem")};
  height: ${props => (props.small ? "8.8rem" : "16.8rem")};
  transition: border 0.1s ease-out;
  &:hover,
  &:focus {
    border: 0.4rem solid ${g.colors.gray300};
  }
  img,
  picture,
  .gatsby-image-wrapper {
    border-radius: 100%;
    width: ${props => (props.small ? "7.2rem" : "14.6rem")};
    height: ${props => (props.small ? "7.2rem" : "14.6rem")};
    object-fit: cover;
  }

  @media ${g.screen.min.md} and ${g.screen.max.lg} {
    border: 0.3rem solid ${g.colors.gray100};
    width: ${props => (props.small ? "8.8rem" : "14rem")};
    height: ${props => (props.small ? "8.8rem" : "14rem")};
    &:hover,
    &:focus {
      border: 0.3rem solid ${g.colors.gray100} solid ${g.colors.gray300};
    }
    img,
    picture,
    .gatsby-image-wrapper {
      width: ${props => (props.small ? "7.2rem" : "11.8rem")};
      height: ${props => (props.small ? "7.2rem" : "11.8rem")};
    }
  }

  @media ${g.screen.max.md} {
    border: 0.3rem solid ${g.colors.gray100};
    width: ${props => (props.small ? "7.8rem" : "9.8rem")};
    height: ${props => (props.small ? "7.8rem" : "9.8rem")};
    margin: 0.3rem;
    &:hover,
    &:focus {
      border: 0.3rem solid ${g.colors.gray300};
    }
    img,
    picture,
    .gatsby-image-wrapper {
      width: ${props => (props.small ? "6.2rem" : "8.2rem")};
      height: ${props => (props.small ? "6.2rem" : "8.2rem")};
    }
  }
`

const VendorLogo = ({ children, small, ...props }) => (
  <StyledLogo
    small={small ? 1 : 0}
    aria-label={`${props.title} Link`}
    {...props}
  >
    <Img fluid={props.logo.fluid} />
  </StyledLogo>
)

VendorLogo.propTypes = {
  small: PropTypes.bool,
  title: PropTypes.string.isRequired,
  logo: PropTypes.object.isRequired, // gatsby-image fluid object

  // Link Props
  to: PropTypes.string.isRequired,
  target: PropTypes.string, // exclusive to external links
}

VendorLogo.defaultProps = {
  small: false,
}

export default VendorLogo
