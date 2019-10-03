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

const Label = styled.h4`
  text-transform: uppercase;
  font-size: 1.7rem;
  font-weight: 900;
  color: ${g.colors.gray500};
  text-align: center;
  padding-bottom: 1rem;
  letter-spacing: normal;
  padding-top: 0.4rem;
  padding-bottom: 1.4rem;
`

const getItems = (items, section) =>
  items.map((item, idx) => (
    <MenuItem {...item} key={`${section}-item-${idx}`} />
  ))

const MenuSections = props => (
  <Container aria-label="" padding={{ desktop: "0rem", mobile: "0.5rem" }}>
    <Row center="xs">
      <Col md={9} lg={7} xl={6}>
        <section role="tabpanel" aria-label={`${props.label}`}>
          {props.sections &&
            props.sections.map((section, s_idx) => (
              <MenuSection
                key={`menu-section-${s_idx}`}
                // aria-hidden={s_idx !== props.activeIdx ? true : false}
                id={`menupanel${s_idx + 1}`}
              >
                <Label>{section.label}</Label>
                {getItems(section.items, section.label)}
              </MenuSection>
            ))}
        </section>
      </Col>
    </Row>
  </Container>
)

MenuSections.propTypes = {
  label: PropTypes.string.isRequired,
  sections: PropTypes.array.isRequired,
  activeIdx: PropTypes.number
}

export default MenuSections
