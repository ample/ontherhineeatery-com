import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Row } from "react-flexbox-grid"

import * as g from "../global/variables"
import MenuSections from "./sections"

const Tabs = styled(Row)`
  align-items: stretch !important;
  padding-top: 0.7rem;
`

const Tab = styled.button`
  flex: 1;
  min-width: calc(100% / 6);
  max-width: calc(100% / 6);
  font-size: 1.6rem;
  font-weight: 200;
  line-height: 2.4rem;
  color: ${g.colors.gray700};
  background-color: transparent;
  border: none;
  border-bottom: 0.2rem solid transparent;
  height: 100%;
  padding: 0rem;
  &:hover {
    border-bottom: 0.2rem solid ${g.colors.gray300};
    cursor: pointer;
    transition: border-bottom 0.1s ease-out;
  }
  span {
    ${"" /* displays outline only with tab key */}
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 4.6rem;
    height: 100%;
  }
  &.active-tab {
    font-weight: 600;
    border-bottom: 0.2rem solid ${g.colors.gray700};
    &:hover {
      text-decoration: none;
    }
  }
`

const DesktopMenus = props => (
  <>
    <Tabs center="xs" role="tablist">
      {props.tabs.map((tab, idx) => (
        <Tab
          type="button"
          role="tab"
          id={`menutab${idx + 1}`}
          aria-controls={`menupanel${idx + 1}`}
          aria-selected={idx === props.activeIdx ? true : false}
          className={idx === props.activeIdx ? " active-tab " : ""}
          key={`menu_${idx}`}
          onClick={() => props.onClick(idx)}
        >
          <span tabIndex="-1">{tab}</span>
        </Tab>
      ))}
    </Tabs>
    <MenuSections
      label={props.tabs[props.activeIdx]}
      sections={props.sections[props.activeIdx]}
      activeIdx={props.activeIdx}
    />
  </>
)

DesktopMenus.propTypes = {
  tabs: PropTypes.array.isRequired,
  sections: PropTypes.array.isRequired,
  activeIdx: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default DesktopMenus
