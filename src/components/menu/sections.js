import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Row, Col } from "react-flexbox-grid"

import * as g from "../global/variables"

import MenuItem from "./item"
import Container from "../layout/container"

const MenuSection = styled.section`
  margin-top: 4rem;
`

const Label = styled.div`
  text-transform: uppercase;
  font-size: 1.7rem;
  font-weight: 900;
  color: ${g.colors.gray500};
  text-align: center;
`

const getItems = (items, section) =>
  items.map((item, idx) => (
    <MenuItem {...item} key={`${section}-item-${idx}`} />
  ))

const MenuSections = props => (
  <Container aria-label="">
    <Row center="xs">
      <Col md={9}>
        {props.menus.map((section, s_idx) => (
          <MenuSection key={`menu-section-${s_idx}`}>
            <Label>{section.label}</Label>
            {getItems(section.items, section.label)}
          </MenuSection>
        ))}
      </Col>
    </Row>
  </Container>
)

MenuSections.propTypes = {
  menus: PropTypes.array.isRequired
}

export default MenuSections
