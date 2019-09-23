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

const VendorsContainer = ({ body }) => (
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
            <HTML field={body} />
          </Col>
        </Row>
        <VendorLogoContainer logos={data.vendors.edges.map(v => v.node)} />
      </Container>
    )}
  />
)

VendorsContainer.propTypes = {
  body: PropTypes.object
}

VendorsContainer.defaultProps = {}

export default VendorsContainer
