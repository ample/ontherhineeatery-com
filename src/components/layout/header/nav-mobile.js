import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import MediaQuery from "react-responsive"
import SVG from "react-inlinesvg"

import * as g from "../../global/variables"

import NavLinks from "../nav-links"
import hamburger from "../../../images/icons/icon-hamburger.svg"

const NavBtn = styled.button`
  background: none;
  padding: 0rem;
  border: none;

  svg {
    width: 2.4rem;
    fill: ${g.colors.white};
    transition: fill 0.1s ease-out;
  }

  &:hover svg,
  &:focus svg {
    fill: ${g.colors.gray300};
    cursor: pointer;
  }

  span:focus {
    outline: none;
  }
`

const StyledNavLinks = styled(NavLinks)`
  display: ${props => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 6.3rem;
  width: 100%;
  z-index: 9999;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.5);
  padding: 0rem 1rem;
  a {
    color: ${g.colors.gray500};
    font-size: 1.4rem;
    padding: 2.4rem 0rem;
    text-align: center;
    &:not(:first-of-type) {
      border-top: 1px solid ${g.colors.gray300};
    }
    &:hover,
    &:focus,
    &.nav-active {
      color: ${g.colors.gray700};
    }
  }
`

const NavMobile = props => {
  const [isOpen, setOpen] = useState(false)
  const toggleNav = () => setOpen(!isOpen)

  const nodeRef = useRef()

  useEffect(() => {
    const handleOutsideClick = e => {
      if (!nodeRef.current.contains(e.target)) {
        toggleNav()
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick)
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [isOpen])

  return (
    <div ref={nodeRef}>
      <NavBtn
        onClick={toggleNav}
        role="button"
        aria-expanded={isOpen ? true : false}
        aria-label={`Toggle Navigation Menu`}
        tabindex="0"
      >
        <span tabIndex="-1">
          <SVG src={hamburger} aria-label={`Navigation Menu Button`} />
        </span>
      </NavBtn>
      <StyledNavLinks nav={props.nav} isOpen={isOpen} />
    </div>
  )
}

NavMobile.propTypes = {
  nav: PropTypes.array.isRequired,
}

export default NavMobile
