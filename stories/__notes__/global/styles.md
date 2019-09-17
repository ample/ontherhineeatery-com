# Global Styles

This component combines normalized CSS with the default On The Rhine brand.
Styles can be found in `components/global/styles`. Except for bug fixes, these
files shouldn't be edited since they may break dependent component styles.

## No Import Required

Global Styles are available to every component automatically, without import.
This component is not meant to be used in production outside of the `<Layout />`
file.

## Media Queries

The type styles adjust to mobile-friendly sizes at the `md` breakpoint.

## Size Units

Use rems wherever possible. `1rem` = `10px`

## &lt;p>, &lt;h1>, &lt;h2>, &lt;h3>, &lt;h4>, &lt;h5>, &lt;h6>, &lt;section>, &lt;nav>, &lt;header>, &lt;footer>, &lt;div>

These elements have six optional utility classes, shown on the Canvas tab:
`text-xs`, `text-sm`, `text-md`, `text-center`, `text-light`, and `text-quote`.
You can use `text-md` to reset the font size back to default.

`text-center` and `text-light` are available as to test as story knobs.

## &lt;a>

Links inherit their parent component's style and color.

## Block Quotes

Style block quotes with either the `<blockquote>` tag or the `text-quote` class.

## `\n` Character

Add the `newline` class to elements whose data includes newline (`\n`)
characters. The `HTML` utility includes this class by default.

## &lt;img>, &lt;svg>

Images are set to `display: inline-block; vertical-align: middle;` to remove the
default bottom white space.

Images have a utility class `border` that adds a 10px white border.
