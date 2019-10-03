import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import * as g from "../global/variables"

import HTML from "../utilities/html"

const Title = styled.div`
  text-transform: uppercase;
  color: ${g.colors.gray700};
  font-weight: 900;
  letter-spacing: -0.05rem;
  font-size: 2rem;
  line-height: 2.4rem;
  @media ${g.screen.max.sm} {
    font-size: 1.7rem;
    letter-spacing: -0.35px;
  }
`

const Price = styled.div`
  text-transform: uppercase;
  color: ${g.colors.gray500};
  font-weight: 200;
  font-size: 1.9rem;
  line-height: 2.4rem;
  @media ${g.screen.max.sm} {
    font-size: 1.7rem;
  }
`

const Body = styled(HTML)`
  color: ${g.colors.black};
  font-weight: 200;
  font-size: 1.3rem;
  line-height: 2rem;
  text-align: left;
`

const StyledItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1.4rem auto;

  ${Body} {
    flex-basis: 100%;
  }
`

const formatPrice = price => (isNaN(parseFloat(price)) ? price : `$${price}`)

const MenuItem = props => (
  <StyledItem>
    <Title>{props.label}</Title>
    {props.price && <Price>{formatPrice(props.price)}</Price>}
    {props.body && <Body className="newline" field={props.body} />}
  </StyledItem>
)

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  price: PropTypes.string,
  body: PropTypes.object
}

export default MenuItem
