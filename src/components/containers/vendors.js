import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Row, Col } from "react-flexbox-grid"
import PropTypes from "prop-types"

// eslint-disable-next-line
import VendorAttributes from "../../fragments/vendor-attributes"

import * as g from "../global/variables"

import Container from "../layout/container"
import HTML from "../utilities/html"
import VendorLogoContainer from "../vendor-logo-container"
import VendorPreview from "../vendor-preview"

const ExpandedVendorsContainer = ({ body, children, vendors }) => (
  <>
    <Container
      className="text-center"
      bgColor={g.colors.gray200}
      padding={{ desktop: "6rem", mobile: "3rem" }}
    >
      <Row center="md">
        <Col md={9} lg={8} xl={6}>
          {body && <HTML field={body} />}
          {children && children}
        </Col>
      </Row>
    </Container>
    {vendors.map((v, i) => (
      <VendorPreview
        key={i}
        images={v.images}
        logo={v.logo}
        featured_image={v.featured_image}
        title={v.title}
        description={v.description}
        permalink={`/vendors/${v.permalink}`}
      />
    ))}
  </>
)

const CompactVendorsContainer = ({ body, children, vendors }) => (
  <Container
    className="text-center"
    bgColor={g.colors.gray200}
    padding={{ desktop: "9rem", mobile: "3.6rem" }}
  >
    <Row center="md">
      <Col md={9} lg={8} xl={6}>
        {body && <HTML field={body} />}
        {children && children}
      </Col>
    </Row>
    <VendorLogoContainer logos={vendors} />
  </Container>
)

const VendorsContainer = ({ expanded, ignoreVendors, ...props }) => (
  <StaticQuery
    query={graphql`
      {
        vendors: allContentfulVendor(sort: { fields: [title] }) {
          edges {
            node {
              ...VendorAttributes
            }
          }
        }
      }
    `}
    render={data => {
      const TagName = expanded
        ? ExpandedVendorsContainer
        : CompactVendorsContainer

      const vendors = data.vendors.edges
        .filter(
          ({ node }) =>
            !ignoreVendors.map(v => v.permalink).includes(node.permalink)
        )
        .map(v => v.node)
      return <TagName vendors={vendors} {...props} />
    }}
  />
)

VendorsContainer.propTypes = {
  body: PropTypes.object,
  expanded: PropTypes.bool,
  ignoreVendors: PropTypes.array
}

VendorsContainer.defaultProps = {
  ignoreVendors: [],
  expanded: false
}

export default VendorsContainer
