# Image Tiles

The Image Tiles component displays images in a single horizontal row. At the
`sm` breakpoint, it switches to an infinitely scrolling `Slideshow` component.

## Props

This component accepts three props:

- `images` (required array) - Fluid images
- `bgcolor` (string) - Color of the Container background.
  - default: `gray200`
- `padding` (object) - Top & bottom padding on the Container. Has two keys that
  accept a single rem value: `desktop` & `mobile`
  - default: `{ desktop: "4rem", mobile: "2rem"}`

`bgcolor` and `padding` are available as story knobs.
