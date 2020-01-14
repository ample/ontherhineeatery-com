import React, { useRef, useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import SVG from "react-inlinesvg"

import * as g from "../../global/variables"

import Link from "../../utilities/link"
import { Accordion, Panel } from "../../utilities/accordion"
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

const linkMixin = css`
  display: flex;
  font-family: ${g.fonts.acumin};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  color: ${g.colors.gray500};
  font-size: 1.4rem;
  padding: 2.4rem 0rem;
  margin: 0rem 1rem;
  border-top: 1px solid ${g.colors.gray300};
  &:hover,
  &:focus,
  &.nav-active {
    color: ${g.colors.gray700};
  }
`

const StyledNavLinks = styled.div`
  display: ${props => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 6.3rem;
  width: 100%;
  z-index: 9999;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.5);
  background-color: ${g.colors.white};
  a {
    ${linkMixin}
    &:first-child {
      border-top: none;
    }
  }
`

const StyledAccordion = styled(Accordion)`
  &.rc-collapse {
    .rc-collapse-item .rc-collapse-header {
      ${linkMixin}
    }

    ${"" /* child links */}
    .rc-collapse-content-box {
      box-shadow: inset 0 1px 10px 0 rgba(0, 0, 0, 0.5);
      background-color: ${g.colors.gray200};
      max-width: calc(100% + 20px);
      margin-left: -10px;
      margin-right: -10px;
      padding: 0px 10px;
    }
  }
`

const NavMobile = props => {
  const nodeRef = useRef()
  const [isOpen, setMenuState] = useState(false)

  useEffect(() => {
    const handleOutsideClick = e => {
      if (!nodeRef.current.contains(e.target)) setMenuState(!isOpen)
    }
    if (isOpen) document.addEventListener("mousedown", handleOutsideClick)
    return () => document.removeEventListener("mousedown", handleOutsideClick)
  }, [isOpen])

  const navLink = (link, idx) => (
    <Link to={link.url} activeClassName="nav-active" key={`mobile_nav_${idx}`}>
      {link.title}
    </Link>
  )

  const navAccordion = (parent, idx) => (
    <StyledAccordion accordion={false} key={`nav_${idx}`}>
      <Panel header={parent.title}>
        {parent.children_links.map((link, idx) => (
          <Link
            to={link.url}
            activeClassName="nav-active"
            onClick={props.onclick}
            key={`nav_mobile_${parent.title}_${idx}`}
          >
            {link.title}
          </Link>
        ))}
      </Panel>
    </StyledAccordion>
  )

  return (
    <div ref={nodeRef}>
      <NavBtn
        onClick={() => setMenuState(!isOpen)}
        role="button"
        aria-expanded={isOpen ? true : false}
        aria-label={`Toggle Navigation Menu`}
        tabIndex="0"
      >
        <span tabIndex="-1">
          <SVG src={hamburger} aria-label={`Navigation Menu Button`} />
        </span>
      </NavBtn>
      <StyledNavLinks isOpen={isOpen}>
        {props.nav.map((link, idx) =>
          link.children_links ? navAccordion(link, idx) : navLink(link, idx)
        )}
      </StyledNavLinks>
    </div>
  )
}

NavMobile.propTypes = {
  nav: PropTypes.array.isRequired
}

export default NavMobile
