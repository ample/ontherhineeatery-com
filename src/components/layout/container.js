import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Grid } from "react-flexbox-grid"

import { screen } from "../global/variables"

const Wrapper = styled.section`
  background-color: ${props => props.bgColor};
  padding: ${props => props.padding.desktop} 2.4rem;
  @media ${screen.max.md} {
    padding: ${props => props.padding.mobile} 0.8rem;
  }
`

const ContentBlock = ({ className, children, ...props }) => (
  <Wrapper className={className} {...props}>
    <Grid>{children}</Grid>
  </Wrapper>
)

ContentBlock.propTypes = {
  bgColor: PropTypes.string,
  padding: PropTypes.object // object with two keys:
  // desktop: single rem value, for top & bottom padding above 'md'
  // mobile: single rem value, for top & bottom padding below 'md'
}

ContentBlock.defaultProps = {
  bgColor: "transparent",
  padding: {
    desktop: "3.6rem",
    mobile: "3.6rem"
  }
}

export default ContentBlock
