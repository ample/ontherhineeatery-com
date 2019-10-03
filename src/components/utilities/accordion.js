import React from "react"
import styled from "styled-components"
import Collapse, { Panel } from "rc-collapse"

const StyledCollapse = styled(Collapse)`
  &.rc-collapse {
    ${"" /* Accordion container */}
    border: none;
    background-color: transparent;

    .rc-collapse-item {
      ${"" /* Accordion.Panel container */}
      border: none;

      .rc-collapse-header {
        ${"" /* Accordion.Panel tab */}
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 0rem;
        user-select: none;

        &:focus {
          outline: none;
        }
        .arrow {
          display: none;
        }
      }
    }
    .rc-collapse-item-active {
      .rc-collapse-header {
        ${"" /* Accordion.Panel tab - open state*/}
      }
    }
  }

  .rc-collapse-anim-active {
    transition: height 0.3s ease-in-out;
  }

  .rc-collapse-content {
    ${"" /* content container */}
    overflow: hidden;
    padding: 0rem;

    .rc-collapse-content-box {
      ${"" /* content container inner */}
      margin: 0rem;
    }
  }
`

const Accordion = ({ children, className, ...props }) => (
  <StyledCollapse className={className} {...props}>
    {children}
  </StyledCollapse>
)

Accordion.defaultProps = {
  destroyInactivePanel: true
}

export { Accordion, Panel }

export default Accordion
