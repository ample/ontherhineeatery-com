import React, { useState, useCallback } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import * as g from "../global/variables"
import { Accordion, Panel } from "../utilities/accordion"
import MenuSections from "./sections"

const StyledAccordion = styled(Accordion)`
  &.rc-collapse {
    .rc-collapse-item {
      ${"" /* background-color: ${g.colors.white}; */}
      .rc-collapse-header {
        ${"" /* justify-content: center; */}
        -webkit-tap-highlight-color: transparent;
        color: ${g.colors.gray700};
        border-bottom: 0.1rem solid ${g.colors.gray200};
        font-size: 1.7rem;
        font-weight: 200;
        line-height: 2.4rem;
        padding: 1.2rem;
      }
    }
    .rc-collapse-item-active {
      .rc-collapse-header {
        ${"" /* background-color: ${g.colors.white};
        color: ${g.colors.navy};
        box-shadow: inset 0 0.1rem 1rem 0 ${g.colors.gray200};
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
          box-shadow 0.15s ease-in-out; */}
      }
    }
  }
`

const MobileMenus = props => {
  const handleChange = useCallback(keys => {
    // return the most recently opened Panel idx
    // else fallback to default activeIdx value
    if (keys.length > 0) {
      let idx = parseInt(keys.slice(-1)[0])
      return props.onClick(idx)
    }
    else {
      return props.onClick(-1)
    }
  })
  return (
    <StyledAccordion
      accordion={false}
      defaultActiveKey={props.activeIdx === "-1" ? "" : `${props.activeIdx}`}
      onChange={keys => handleChange(keys)}
    >
      {props.sections.map((group, idx) => (
        <Panel header={props.tabs[idx]} key={idx}>
          <MenuSections sections={group} />
        </Panel>
      ))}
    </StyledAccordion>
  )
}

MobileMenus.propTypes = {
  tabs: PropTypes.array.isRequired,
  activeIdx: PropTypes.number,
  sections: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}

export default MobileMenus
