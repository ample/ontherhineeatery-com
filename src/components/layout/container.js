import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Grid } from "react-flexbox-grid"

const Wrapper = styled.section`
  background-color: ${props => props.bgColor};
  padding: 3.6rem 0rem;
`

const ContentBlock = ({ className, children, ...props }) => (
  <Wrapper className={className} {...props}>
    <Grid>{children}</Grid>
  </Wrapper>
)

ContentBlock.propTypes = {
  bgColor: PropTypes.string,
}

ContentBlock.defaultProps = {
  bgColor: "#FFFFFF",
}

export default ContentBlock
