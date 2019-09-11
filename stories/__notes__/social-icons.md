# Social Icons

The Social Icons component displays a list of social media icons and links. It
has an optional dark theme and scales automatically at the `sm` breakpoint. The
icon will render as an inline SVG to control the hover state.

The `dark` prop is set up as a story knob.

## Usage

Component:

```jsx
<SocialIcons vendor={data.location} icons={data.icons} dark={bool} />
```

## Adding New Social Media Types

This component is setup to work with `facebook`, `instagram`, `twitter`,
`website` icon types. If more account types need to be added in the future:

Import the svg to the SocialIcons file:

```jsx
import instagram from "../images/icons/social-instagram.svg"
```

Add the image file to the `typeList` object. This passes the file into the
`<SVG />` component:

```jsx
const typeList = {
  instagram: instagram,
}
```

Update the comment in `propTypes` to document the available options:

```jsx
SocialIcons.propTypes = {
  icons: PropTypes.array.isRequired,
  // valid icon types: "facebook", "twitter", "instagram", "website"
}
```
