# Container

The Container component applies a background color and wraps its children in the
default Grid. This component doesn't work with background images.

It accepts two optional props:

- `bgColor` (string) - This color will fill the width of its parent container.
default: `"transparent"`
- `padding` (string) - Single rem value that affects top and bottom padding.
default: `"3.6rem"`

All children are wrapped in a `<Grid>` component from the
[`react-flexbox-grid`](http://roylee0704.github.io/react-flexbox-grid/) plugin.

## Line Breaks

The `\n` character will create a line-break on any string inside curly
brackets `{}` or passed to the `HTML` utility.

## Usage

Children can optionally be wrapped in `<Row>` or `<Col>` components. All of
these are valid:


```jsx
import { Row, Col } from "react-flexbox-grid"
import Container from "./layout/container"

// No Additional Wrappers
<Container>
  <p>
    Morbi leo risus, porta ac consectetur.
  </p>
</Container>

// Col Wrapper
<Container>
  <Col md={6} mdOffset={3}>
    <p>
      Morbi leo risus, porta ac consectetur.
    </p>
  </Col>
</Container>

// Row & Col Wrappers
<Container>
  <Row center="md">
    <Col md={6}>
      <p>
        Morbi leo risus, porta ac consectetur.
      </p>
    </Col>
  </Row>
</Container>
```

A single, full-width `<Col>` inside of `<Row>` must list at least one
breakpoint, which can be a boolean. Without this there is a bug at the
`xl` breakpoint:

```jsx
<Container>
  <Row>
    <Col xs>
      <p>Morbi leo risus, porta ac consectetur.</p>
    </Col>
  </Row>
</Container>
```
