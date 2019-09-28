import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image/withIEPolyfill"
import styled from "styled-components"

import * as g from "../global/variables"

import Link from "../utilities/link"

const StyledLogo = styled(Link)`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: ${g.colors.white};
  border: 0.4rem solid ${g.colors.gray100};
  margin: ${props => (props.small ? "0.3rem" : "0.6rem")};
  width: ${props => (props.small ? "8.8rem" : "16.8rem")};
  height: ${props => (props.small ? "8.8rem" : "16.8rem")};

  img,
  picture,
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    object-fit: cover;
  }

  @media ${g.screen.min.md} and ${g.screen.max.lg} {
    border: 0.3rem solid ${g.colors.gray100};
    width: ${props => (props.small ? "8.8rem" : "13.2rem")};
    height: ${props => (props.small ? "8.8rem" : "13.2rem")};
  }

  @media ${g.screen.max.md} {
    border: 0.3rem solid ${g.colors.gray100};
    margin: 0.3rem;
    width: ${props => (props.small ? "7.8rem" : "9.8rem")};
    height: ${props => (props.small ? "7.8rem" : "9.8rem")};
  }
`

const Logo = styled.div`
  border-radius: 100%;
  width: ${props => (props.small ? "7.2rem" : "14.6rem")};
  height: ${props => (props.small ? "7.2rem" : "14.6rem")};

  @media ${g.screen.min.md} and ${g.screen.max.lg} {
    width: ${props => (props.small ? "7.2rem" : "11.8rem")};
    height: ${props => (props.small ? "7.2rem" : "11.8rem")};
  }

  @media ${g.screen.max.md} {
    width: ${props => (props.small ? "6.2rem" : "8.2rem")};
    height: ${props => (props.small ? "6.2rem" : "8.2rem")};
  }

`
const FeaturedImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 100%;
  width: ${props => (props.small ? "8rem" : "16rem")};
  height: ${props => (props.small ? "8rem" : "16rem")};
  opacity: 0;
  transition: opacity 0.1s ease-in;
  ${StyledLogo}:hover & {
    opacity: 1;
    transition: opacity 0.1s ease-out;
  }

  @media ${g.screen.min.md} and ${g.screen.max.lg} {
    width: ${props => (props.small ? "8.2rem" : "12.6rem")};
    height: ${props => (props.small ? "8.2rem" : "12.6rem")};
  }

  @media ${g.screen.max.md} {
    width: ${props => (props.small ? "7.2rem" : "9.2rem")};
    height: ${props => (props.small ? "7.2rem" : "9.2rem")};
  }
`

const VendorLogo = ({ children, small, ...props }) => (
  <StyledLogo
    small={small ? 1 : 0}
    as={!props.to ? "div" : Link}
    aria-label={`${props.title} ${!props.to ? "Logo" : "Link"}`}
    {...props}
  >
    <Logo small={small ? 1 : 0}>
      <Img
        fluid={props.logo.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
      />
    </Logo>
    <FeaturedImg small={small ? 1 : 0}>
      <Img
        fluid={props.featured_image.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
      />
    </FeaturedImg>
  </StyledLogo>
)

VendorLogo.propTypes = {
  small: PropTypes.bool,
  title: PropTypes.string.isRequired,
  logo: PropTypes.object.isRequired, // gatsby-image fluid object
  featured_image: PropTypes.object.isRequired, // gatsby-image fluid object

  // Link Props
  to: PropTypes.string, // if `to` is null, this component renders as a div
  target: PropTypes.string // exclusive to external links
}

VendorLogo.defaultProps = {
  small: false
}

export default VendorLogo
