# Vendor Preview

The Vendor Preview component shows an overview of each vendor on the Vendor List
page. The `ImageTiles` switch from a row to a slideshow at the `sm` breakpoint.

## Usage

The `ImageTiles` section of this component extends to the edge of the viewport,
outside of the standard grid. Because of this, `VendorPreview` should not be
wrapped in any other containers.

## Props

There are six required props:

- `images` (array) - Fluid images for the ImageTiles component
- `logo` (object) - Fluid image
- `featured_image` (object) - Fluid image for the VendorLogo hover state
- `title` (string) - Vendor name
- `description` (object) - Vendor description containing `childMarkdownRemark`
- `permalink` (string) - Button link to Vendor detail page
