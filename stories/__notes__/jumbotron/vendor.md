# Vendor Jumbotron

The Vendor Jumbotron component renders the Vendor Menu Page header content,
including the hero image, title, subtitle, description, social links, and body
image. It transitions to the mobile layout at the `md` breakpoint.

## Props

The Jumbotron accepts the following props:

- `title` (required string)
- `featured_image` (required object) - hero image
- `body` (required object) - subtitle and description
- `body_image` (required object) - image next to description text
- `social_links` (array)

## Usage

The `VendorJumbotron` is a self-closing tag with no children. All content is
passed as props:

```jsx
<VendorJumbotron
  title={data.title}
  featured_image={data.featured_image}
  body={data.body}
  body_image={data.body_image}
  social_links={data.socialLinks}
/>
```
