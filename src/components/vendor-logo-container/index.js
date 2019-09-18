import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { screen } from "../global/variables"

import VendorLogo from "./vendor-logo"

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2.4rem 0rem;
  @media ${screen.max.md} {
    padding: 0.4rem 0rem;
  }
`

const VendorLogoContainer = props => (
  <Wrapper>
    {props.logos.map((vendor, idx) => (
      <VendorLogo
        key={`vendor-logo_${idx}`}
        title={vendor.title}
        // to={`/${vendor.permalink}`}
        logo={vendor.logo}
        featured_image={vendor.featured_image}
        small={props.small}
      />
    ))}
  </Wrapper>
)

VendorLogoContainer.propTypes = {
  logos: PropTypes.array.isRequired,
  small: PropTypes.bool,
}

VendorLogoContainer.dxefaultProps = {
  small: false,
}

export default VendorLogoContainer
