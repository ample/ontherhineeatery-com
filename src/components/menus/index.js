import React, { useState } from "react"
import styled from "styled-components"
import MediaQuery from "react-responsive"

import * as g from "../global/variables"
import Container from "../layout/container"
import MobileMenus from "./mobile"
import DesktopMenus from "./desktop"

const Header = styled.h3`
  text-align: center;
  color: ${g.colors.gray700};
`

const Menus = props => {
  const tabs = Array.from(props.menus, menu => menu.label)
  const sections = Array.from(props.menus, menu => menu.sections)

  let [activeIdx, setIdx] = useState(-1)
  const changeCategory = idx => setIdx(idx)

  return (
    <Container>
      <Header>Menu</Header>

      <MediaQuery query={g.screen.max.md}>
        <MobileMenus
          tabs={tabs}
          sections={sections}
          activeIdx={activeIdx}
          onClick={changeCategory}
        />
      </MediaQuery>

      <MediaQuery query={g.screen.min.md}>
        <DesktopMenus
          tabs={tabs}
          sections={sections}
          activeIdx={activeIdx === -1 ? 0 : activeIdx}
          onClick={changeCategory}
        />
      </MediaQuery>
    </Container>
  )
}

Menus.propTypes = {}

export default Menus