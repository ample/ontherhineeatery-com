# Location

The Location component extends `Container`. It displays a list of open days and
times, along with the business address and phone number.

## Props

The following props are required:

- `hours` (string) - Open days and times. Supports `\n` characters
- `address` (string) - Address. Supports `\n` characters
- `phone` (string) - Phone Number

There is also an optional title prop:

- `title` (string) - Title for the Hours column. default: `Food Hall Hours`
