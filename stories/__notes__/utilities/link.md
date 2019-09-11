# Link Utility

The Link utility decides if a link should be rendered using a standard `<a>` tag
or a [Gatsby Link](https://www.gatsbyjs.org/docs/gatsby-link/). It has one
required string prop `to` which is the URL for the link. There are two optional
props:

`target` is a string that will only be passed to external links. The default is
`"_blank"`.

`activeClassName` is a string that will only be passed to [internal
links](https://www.gatsbyjs.org/docs/gatsby-link/#add-custom-styles-for-the-currently-active-link).

All other props will be passed down. This component should be used for every
link on the site.

## Usage

Pass any internal or external URL to the Link component:

```jsx
import Link from "./utilities/link"

<Link to={url}>Link Contents</Link>
```

The component will parse the URL and decide if is an external or internal link,
and then use the correct component to render:

```jsx
<Link to="https://www.kitchen1883.com">External Link</Link>
// => <a href="https://www.kitchen1883.com" target="_blank">External Link</a>

<Link to="/about">Internal Link</Link>
// => <Link to="/about">Internal Link</Link>
```
