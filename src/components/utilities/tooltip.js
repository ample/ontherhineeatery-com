import React from "react"
import styled from "styled-components"
import TooltipTrigger from "react-popper-tooltip"

import * as g from "../global/variables"

export const TooltipContainer = styled.div`
  z-index: 2147483647;
  background-color: ${g.colors.gray800};
  a {
    display: block;
    margin: 1rem;
    padding: 1rem;
    font-family: ${g.fonts.acumin};
    font-size: 1.7rem;
    font-weight: 600;
    text-transform: uppercase;
    color: ${g.colors.white};
    letter-spacing: 0.08rem;
    text-decoration: none;
    &:hover,
    &:focus,
    &.nav-active {
      cursor: pointer;
      color: ${g.colors.gray300};
    }
    @media ${g.screen.max.sm} {
      margin: 0.2rem;
      padding: 0.6rem;
      font-size: 1.4rem;
      letter-spacing: 0.07rem;
    }
  }
`

const Tooltip = ({ children, tooltip, hideArrow, ...props }) => (
  <TooltipTrigger
    {...props}
    tooltip={({
      arrowRef,
      tooltipRef,
      getArrowProps,
      getTooltipProps,
      placement
    }) => (
      <TooltipContainer
        {...getTooltipProps({
          ref: tooltipRef,
          className: "tooltip-container"
        })}
      >
        {tooltip}
      </TooltipContainer>
    )}
  >
    {({ getTriggerProps, triggerRef }) => (
      <span
        {...getTriggerProps({
          ref: triggerRef,
          className: "trigger"
        })}
      >
        {children}
      </span>
    )}
  </TooltipTrigger>
)

export default Tooltip
