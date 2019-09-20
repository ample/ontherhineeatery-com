import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Row, Col } from "react-flexbox-grid"

import * as g from "./global/variables"
import { useMapLink } from "./hooks"

import Link from "./utilities/link"
import Container from "./layout/container"

const Note = styled.div`
  color: ${g.colors.cantaloupe};
  font-size: 1.1rem;
  margin-top: 1.6rem;
  a,
  a * {
    font-style: italic;
    &:hover,
    &:focus {
      color: ${g.colors.gray400};
    }
  }
`

const Hours = styled.div``

const HoursCol = styled(Col)`
  order: 2;
  color: ${g.colors.gray500};
  ${Hours} {
    white-space: pre-wrap;
  }
  h6 {
    color: ${g.colors.gray800 + "B3"};
    font-family: ${g.fonts.source};
    font-size: 2.1rem;
    line-height: 1.5;
    font-weight: 700;
    text-transform: capitalize;
    letter-spacing: normal;
    margin-bottom: auto;
  }
  ${Note} a {
    font-weight: 700;
  }
  @media ${g.screen.max.sm} {
    order: 1;
    text-align: center;
  }
`

const Primary = styled.div``

const AddressCol = styled(Col)`
  order: 1;
  text-align: right;
  font-size: 2.1rem;
  ${Primary} {
    white-space: pre;
    text-transform: uppercase;
    letter-spacing: 0.175rem;
    margin-bottom: 2.6rem;
    line-height: 1.5;
  }
  a {
    display: block;
    &:hover,
    &:focus {
      color: ${g.colors.gray400};
    }
  }
  @media ${g.screen.max.sm} {
    order: 2;
    text-align: center;
    margin-top: 4rem;
    font-size: 1.6rem;
    ${Note} {
      font-size: 1.6rem;
    }
  }
`

const HoursBlock = props => (
  <>
    <h6>{props.title}</h6>
    <Hours className="text-sm">{props.hours}</Hours>
    <Note>
      *Restaurant times may vary. See our{" "}
      <Link to="/vendors" aria-label={`Full Lineup Link`}>
        full lineup
      </Link>{" "}
      for details.
    </Note>
  </>
)

const AddressBlock = props => (
  <>
    <Primary>
      <Link
        to={useMapLink(props.address)}
        aria-label={`On The Rhine Google Maps Link`}
      >
        {props.address}
      </Link>
      <Link
        to={`tel:${props.phone}`}
        target="_self"
        aria-label={`On The Rhine Phone Number Link`}
      >
        {props.phone}
      </Link>
    </Primary>

    <Note>
      <Link
        to={useMapLink(props.address)}
        aria-label={`On The Rhine Google Maps Link`}
      >
        Get directions
      </Link>
    </Note>
  </>
)

const Location = props => (
  <Container padding={{ desktop: "5rem", mobile: "3.6rem" }}>
    <Row middle="sm">
      <HoursCol xs={12} sm>
        <HoursBlock {...props} />
      </HoursCol>
      <AddressCol xs={12} sm>
        <AddressBlock {...props} />
      </AddressCol>
    </Row>
  </Container>
)

Location.propTypes = {
  title: PropTypes.string, // Hours column title
  hours: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
}

Location.defaultProps = {
  title: "Food Hall Hours"
}

export default Location
