# Home Jumbotron

The Home Jumbotron renders the Home Page header, including the hero image,
background color, and any children. It transitions to the mobile layout at the
`md` breakpoint.

## Props

There are two optional props (see knobs):

- `hero` (object) - The featured image below the subtitle.
- `jumbotron_color`
  (string) - Background color. Accepts any color variable. default:
  `colors.robinegg`

## Usage

The `hero` image is passed in as a prop. Any children of `HomeJumbotron` will
render in the left column.

```jsx
<HomeJumbotron hero={props.hero}>
  <HTML field={field} />
  <Button to="#">Who We Are</Button>
</HomeJumbotron>
```

## Overlapping Background

The background color extends beyond the boundary of this component to create the
overlapping effect shown in the design. The orange outline in the story preview
shows where the `ImageGrid` will sit.