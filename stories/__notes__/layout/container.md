# Container

The Container component applies a background color and wraps its children in the
default `Grid` component from the `react-flexbox-grid`. Use this component to
create edge-to edge sections that need a grid for their inner content. It
accepts two optional props:

- `bgColor` (string) - This color will fill the width of its parent container.
  default: `"transparent"`
- `padding` (string) - Single rem value that affects top and bottom padding.
  default: `"3.6rem"`

## Styling

### Markdown Styles

The Global stylesheet should handle the styling for any elements passed in from
the CMS markdown editor.

### Utility Classes

See the Global Styles story for a full list of available utility classes.
Classes added to the Container will apply to all child components.

- `.text-center` centers all text
- `.text-light` makes text white for dark backgrounds

### Line Breaks

The `\n` character will create a line-break on any string rendered inside curly
brackets ` {``} `.

## The Grid System

All children are wrapped in a `<Grid>` component from the
[`react-flexbox-grid`](http://roylee0704.github.io/react-flexbox-grid/) plugin.

### Row & Col

Children can optionally be wrapped in `<Row>` and `<Col>` components. Both
of these are valid:

```jsx
import { Row, Col } from "react-flexbox-grid"
import Container from "./layout/container"

// No Additional Wrappers
<Container>
  <div />
</Container>

// Row & Col Wrappers
<Container>
  <Row center="md">
    <Col md={6}>
      <div />
    </Col>
  </Row>
</Container>
```

### Alignment

For vertical and horizontal row/column alignment options, see the
[`react-flexbox-grid`](http://roylee0704.github.io/react-flexbox-grid/)
documentation.

### Column Breakpoints

Column breakpoint props (e.g. `xs`) can accept numbers or boolean values.
Boolean breakpoints will set each `<Col>` to equal width. This means you don't
have to do column calculations based on the length of an array of data.

Note: There is an `xl` breakpoint prop even though it isn't listed in the
documentation.

In this example, the Columns will be equal width at the `xl` breakpoint and
above.

```jsx
<Container>
  <Row>
    <Col md={4} xl />
    <Col md={6} xl />
  </Row>
</Container>
```

A single full-width `<Col>` in a `<Row>` must list at least one breakpoint.
Without this there is a bug at the `xl` breakpoint:

```jsx
<Container>
  <Row>
    <Col xs>
      <p>Morbi leo risus, porta ac consectetur.</p>
    </Col>
  </Row>
</Container>
```

## ContentBlocks

ContentBlocks from the CMS can use a combination of the Container component,
grid system, and HTML utility.

Here is an example of a ContentBlock with a custom background color and padding:

```jsx
import { Row, Col } from "react-flexbox-grid"

import Container from "./layout/container"
import HTML from "./utilities/html"

<Container bgColor={g.colors.gray100} padding="9rem" className="text-centered">
  <Row center="xs">
    <Col md={9} lg={8} xl={6}>
      <HTML field={props.contentBlockData} />
    </Col>
  </Row>
</Container>
```
