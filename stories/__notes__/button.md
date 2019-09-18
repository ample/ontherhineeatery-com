# Button

The Button component extends `Link`. It transitions to the mobile size at the
`sm` breakpoint. It accepts all Link props plus:

- `bold` (boolean) Makes the text bold. default: `false`
- `padding` (string) Single rem value that affects left and right padding.
default: `"3.6rem"`

## Element Type

### Link

If Button receives a `to` prop, it will render as a `Link` component.

### Button

If Button does not receive a `to` prop, it will render as an html `<button>`.
Any other props like `type="submit"` will be passed down.
