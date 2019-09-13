# Location

The Location component extends `Container`. It accepts two props:

- `hours` (object) - `HTML` content, displayed in the left column
- `address` (object) - `HTML` content, displayed in the right column

## Usage

This component is set up to process `childMarkdownRemark.html` content. The following rules are in place:

- The header in the `hours` column should use `<h2>` (`##`).
- Bold and italic styles should be applied in the markdown editor.
- Any text wrapped in `<small>` tags will display small and pink.
- The address text will always be uppercase and underlined.
- The columns switch to a single column with centered text at the medium
breakpoint. The `hours` column will be displayed first.