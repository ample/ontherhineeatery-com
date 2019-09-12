# Vendor Logos

`VendorLogoContainer` is a wrapper that maps individual `VendorLogo` components.

## VendorLogoContainer

### Props

- `logos` (array) - List of all logo data
- `small` (optional boolean) - Controls the logo size. default: `false`.
## VendorLogo

This component extends `Link` and can be used without `VendorLogoContainer`.

### Props

- `small` (optional boolean) - Controls the size the logos. default: `false`
- `title` (string) - Vendor name used for aria tags.
- `logo` (object) - Fluid image object.
- `to` (string) - Link URL
- `target` (optional string) - Link target
