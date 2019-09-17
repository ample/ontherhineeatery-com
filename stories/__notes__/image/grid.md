# Image Grid

The Image Grid displays three images in a CSS grid layout. It switches to a
single column layout at the `md` breakpoint.

## Props

This component has one required prop:

- `images`: An array of ContentfulImageBlock objects

## Images

### Order

The images are added to the grid clockwise from the left column.

###  Borders

All images have a 10px white border that is visible when this component overlaps
with the Home Jumbotron or the background texture. To test these borders, there
is a `robinegg` background color available in the story toolbar.