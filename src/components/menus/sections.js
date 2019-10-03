import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Row, Col } from "react-flexbox-grid"

import * as g from "../global/variables"

import MenuItem from "./item"
import Container from "../layout/container"

const MenuSection = styled.section`
  margin-top: 4rem;
  @media ${g.screen.max.md} {
    margin-left: -0.8rem;
    margin-right: -0.8rem;
  }
`

const Label = styled.div`
  text-transform: uppercase;
  font-size: 1.7rem;
  font-weight: 900;
  color: ${g.colors.gray500};
  text-align: center;
  padding-bottom: 1rem;
`

const getItems = (items, section) =>
  items.map((item, idx) => (
    <MenuItem {...item} key={`${section}-item-${idx}`} />
  ))

const MenuSections = props => (
  <Container aria-label="" padding={{ desktop: "0rem", mobile: "0.5rem" }}>
    <Row center="xs">
      <Col md={9} lg={7} xl={6}>
        {props.sections &&
          props.sections.map((section, s_idx) => (
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
  sections: PropTypes.array.isRequired
}

export default MenuSections
