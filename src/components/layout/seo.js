import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import dig from "object-dig"

import { getSetting } from "../hooks"

const SEO = ({ location, page, settings }) => {
  const title = page.title || getSetting(settings, "default_meta_title")
  const titleTemplate = getSetting(settings, "meta_title_template")
  const image =
    dig(page, "image", "file", "url") ||
    dig(page, "meta_image", "file", "url") ||
    getSetting(settings, "default_meta_image")
  const url = dig(location, "href")
  const description =
    dig(page, "meta_description", "meta_description") ||
    dig(page, "description", "description") ||
    getSetting(settings, "default_meta_description")

  return (
    <Helmet title={title} titleTemplate={titleTemplate}>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

SEO.propTypes = {
  location: PropTypes.object.isRequired,
  page: PropTypes.object.isRequired,
  settings: PropTypes.array.isRequired
}

SEO.defaultProps = {
  location: {},
  page: {},
  settings: []
}

export default SEO
