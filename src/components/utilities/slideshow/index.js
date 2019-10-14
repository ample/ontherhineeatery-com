import React from "react"
import { Carousel } from "react-responsive-carousel"
import styled from "styled-components"

import slideshowStyles from "./styles"

const StyledCarousel = styled(Carousel)`
  ${slideshowStyles}
`

const Slideshow = ({ children, className, ...props }) => (
  <StyledCarousel className={className} {...props}>
    {children}
  </StyledCarousel>
)

Slideshow.defaultProps = {
  showStatus: false,
  showIndicators: false,
  showThumbs: false,
  infiniteLoop: true,
  useKeyboardArrows: true
}

export default Slideshow
