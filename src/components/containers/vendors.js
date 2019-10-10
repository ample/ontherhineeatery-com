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

const VendorsContainer = ({ body, children, ignoreVendors }) => (
  <StaticQuery
    query={graphql`
      {
        vendors: allContentfulVendor {
          edges {
            node {
              ...VendorAttributes
            }
          }
        }
      }
    `}
    render={data => (
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
        <VendorLogoContainer
          logos={data.vendors.edges
            .filter(
              ({ node }) =>
                !ignoreVendors.map(v => v.permalink).includes(node.permalink)
            )
            .map(v => v.node)}
        />
      </Container>
    )}
  />
)

VendorsContainer.propTypes = {
  body: PropTypes.object,
  ignoreVendors: PropTypes.array
}

VendorsContainer.defaultProps = {
  ignoreVendors: []
}

export default VendorsContainer
