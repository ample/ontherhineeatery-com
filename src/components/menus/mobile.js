import React, { useCallback } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import SVG from "react-inlinesvg"

import * as g from "../global/variables"
import iconDown from "../../images/icons/icon-down.svg"
import { Accordion, Panel } from "../utilities/accordion"
import MenuSections from "./sections"

const StyledAccordion = styled(Accordion)`
  &.rc-collapse {
    margin-top: 1.4rem;
    .rc-collapse-item {
      box-shadow: 0px -1px 0px 0px transparent;
      transition: box-shadow 0.3s ease-in-out;
      .rc-collapse-header {
        -webkit-tap-highlight-color: transparent;
        color: ${g.colors.gray700};
        border-bottom: 0.1rem solid ${g.colors.gray300};
        font-size: 1.7rem;
        font-weight: 200;
        line-height: 2.4rem;
        padding: 2rem 1.4rem;
      }
    }
    .rc-collapse-item-active {
      box-shadow: 0px 1px 0px 0px ${g.colors.gray300};
      transition: box-shadow 0.3s ease-in-out;
    }
  }
`

const StyledSVG = styled(SVG)`
  order: 2;
  margin-left: auto;
  margin-right: 0rem;
`

const MobileMenus = ({onClick, ...props}) => {
  const handleChange = useCallback((keys) => {
    // return the most recently opened Panel idx
    // else fallback to default activeIdx value
    if (keys.length > 0) {
      let idx = parseInt(keys.slice(-1)[0])
      onClick(idx)
    } else {
      onClick(-1)
    }
  }, [onClick])

  return (
    <StyledAccordion
      accordion={false}
      defaultActiveKey={props.activeIdx === "-1" ? "" : `${props.activeIdx}`}
      expandIcon={() => <StyledSVG src={iconDown} />}
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
