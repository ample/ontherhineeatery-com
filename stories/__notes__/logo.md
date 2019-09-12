# Logo

The Logo component should be used for every Kitchen 1883 logo on the site.

(The component file was generated with
[SVGR](https://www.smooth-code.com/open-source/svgr/playground/).)

## Usage

Logo accepts one optional string prop: `color`. The default color is `white`.

```jsx
import Logo from "./logo"
import { colors } from "./global/variables"

<Logo color={colors.white} />
```

By default, the logo will scale to fill the width of its container. To change
the size of the logo use `height` in styled components. The width will scale
automatically:

```jsx
import styled from "styled-components"
import Logo from "./logo"
import { screen } from "./global/variables"

const StyledLogo = styled(Logo)`
  height: 3.6rem;
  @media ${screen.max.md} {
    height: 2.2rem;
  }
`
```
