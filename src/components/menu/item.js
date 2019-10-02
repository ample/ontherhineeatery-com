import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import * as g from "../global/variables"

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

const Body = styled.div`
  color: ${g.colors.black};
  font-weight: 200;
  font-size: 1.3rem;
  line-height: 2.4rem;
`

const StyledItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${Body} {
    flex-basis: 100%;
  }
`

const formatPrice = price => (isNaN(parseFloat(price)) ? price : `$${price}`)

const MenuItem = props => (
  <StyledItem>
    <Title>{props.title}</Title>
    <Price>{formatPrice(props.price)}</Price>
    <Body>{props.body.body}</Body>
  </StyledItem>
)

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}

export default MenuItem
