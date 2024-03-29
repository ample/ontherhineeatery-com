# Jumbotron

The Jumbotron component renders the page header content, including the title,
subtitle, and hero image, along with a background color and texture. It
transitions to the mobile layout at the `sm` breakpoint.

The Jumbotron on the Home Page and Vendor Menu Page will use a separate
component.

## Props

The Jumbotron accepts two required props:

- `title` (string)
- `subtitle` (string)

There are three optional props (see knobs):

- `hero` (object) - The featured image below the subtitle.
- `color` (string) - Adds one of three colors behind the title &
  subtitle. default: `"robinegg"`
  - options:
    - `"gray"` (Makes the subtitle text color white.)
    - `"cantaloupe"`
    - `"robinegg"`
- `texture` (object) - Semi-transparent image that is colored based on
  `color`

## Usage

The Jumbotron is a self-closing tag with no children. All content is passed as
props:

```jsx
<Jumbotron
  title={title}
  subtitle={subtitle}
  hero={hero}
  texture={jumbotron_texture}
  color={jumbotron_color}
/>
```
