import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Row, Col } from "react-flexbox-grid"

import * as g from "../global/variables"
import MenuSections from "./sections"

const Tabs = styled(Row)`
  align-items: stretch !important;
  padding-top: 0.7rem;
`

const Tab = styled.button`
  flex: 1;
  color: ${g.colors.gray700};
  border: none;
  width: 100%;
  min-height: 4.6rem;
  height: 100%;
  font-size: 1.6rem;
  font-weight: 200;
  line-height: 2.4rem;
  border-bottom: 0.2rem solid ${g.colors.white};
  &:hover {
    border-bottom: 0.2rem solid ${g.colors.gray300};
    cursor: pointer;
    transition: border-bottom 0.15s ease-out;
  }
  &:focus {
    outline: none;
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
    <Tabs center="xs">
      {props.tabs.map((tab, idx) => (
        <Col md={2} key={`menu_${idx}`}>
          <Tab
            type="button"
            className={idx === props.activeIdx ? " active-tab " : ""}
            onClick={() => props.onClick(idx)}
          >
            {tab}
          </Tab>
        </Col>
      ))}
    </Tabs>
    <MenuSections sections={props.sections[props.activeIdx]} />
  </>
)

DesktopMenus.propTypes = {
  tabs: PropTypes.array.isRequired,
  sections: PropTypes.array.isRequired,
  activeIdx: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default DesktopMenus
