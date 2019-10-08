# Two Column Container

The `TwoColContainer` component displays two images and a content block.

## Props

- `image1` (required object) - Fluid image that appears in the left column
- `image2` (object) - Optional fluid image that appears in the right column
- `content_block` (required object) - Object that can contain:
  - `body` (required object) - Markdown content
  - `button_label` (string) - Optional button label
  - `button_url` (string) - Optional button URL. Determines if a `Button` should
    be rendered.

## Usage

`TwoColContainer` is a self-closing tag that does not accept children.

```jsx
<TwoColContainer
  image1={image1}
  image2={image2}
  content_block={content_block}
/>
```
