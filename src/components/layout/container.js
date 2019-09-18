import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Grid } from "react-flexbox-grid"

const Wrapper = styled.section`
  background-color: ${props => props.bgColor};
  padding: ${props => props.padding} 0rem;
`

const ContentBlock = ({ className, children, ...props }) => (
  <Wrapper className={className} {...props}>
    <Grid>{children}</Grid>
  </Wrapper>
)

ContentBlock.propTypes = {
  bgColor: PropTypes.string,
  padding: PropTypes.string, // single rem value, for top & bottom padding only
}

ContentBlock.defaultProps = {
  bgColor: "transparent",
  padding: "3.6rem",
}

export default ContentBlock
