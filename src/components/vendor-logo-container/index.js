import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import VendorLogo from "./vendor-logo"

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  small: PropTypes.bool
}

VendorLogoContainer.defaultProps = {
  small: false
}

export default VendorLogoContainer
