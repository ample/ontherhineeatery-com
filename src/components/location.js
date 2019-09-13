import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { Row, Col } from "react-flexbox-grid"

import * as g from "./global/variables"

import HTML from "./utilities/html"
import Container from "./layout/container"

const smallMixin = css`
  small,
  small * {
    color: ${g.colors.cantaloupe};
    font-size: 1.1rem;
    a,
    a * {
      &:hover,
      &:focus {
        text-decoration: none;
      }
    }
  }
`

const HoursCol = styled(Col)`
  order: 2;
  color: ${g.colors.gray500};
  ${smallMixin}
  h2 {
    font-family: ${g.fonts.source};
    text-transform: capitalize;
    font-size: 2.1rem;
    letter-spacing: normal;
    color: ${g.colors.gray800 + "B3"};
    margin-bottom: auto;
  }
  p {
    white-space: pre;
  }

  @media ${g.screen.max.sm} {
    order: 1;
    text-align: center;
  }
`

const AddressCol = styled(Col)`
  order: 1;
  text-align: right;
  color: ${g.colors.gray800 + "B3"};
  font-size: 2.1rem;
  line-height: 1.5;
  p {
    text-decoration: underline;
    text-transform: uppercase;
    white-space: pre;
    letter-spacing: 0.175rem;
  }
  ${smallMixin}

  @media ${g.screen.max.sm} {
    order: 2;
    text-align: center;
    margin-top: 3.6rem;
    font-size: 1.6rem;
    line-height: 1.6;
    small, small * {
      font-size: 1.6rem;
    }
  }
`

const Location = props => (
  <Container>
    <Row middle="sm">
      <HoursCol xs={12} sm>
        <HTML field={props.hours} className="text-sm" />
      </HoursCol>
      <AddressCol xs={12} sm>
        <HTML field={props.address} />
      </AddressCol>
    </Row>
  </Container>
)

Location.propTypes = {
  hours: PropTypes.object.isRequired,
  address: PropTypes.object.isRequired,
}

export default Location
