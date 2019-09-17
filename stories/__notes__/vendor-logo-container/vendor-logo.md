# VendorLogo

The VendorLogo component extends `Link` and can be used with or without `VendorLogoContainer`.

## Props

- `small` (optional boolean) - Controls the size the logos. default: `false`
- `title` (string) - Vendor name used for aria tags.
- `logo` (object) - Fluid image object.
- `featured_image` (object) - Fluid image object. Replaces logo on hover.
- `to` (optional string) - Link URL
- `target` (optional string) - Link target

## Element Type

### Link

If this component receives a `to` prop, it will render as a `Link`.

### Div

If `to` is null or undefined, it will render as a `div`. (See story knobs.)