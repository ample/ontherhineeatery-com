import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Row, Col } from "react-flexbox-grid"
import PropTypes from "prop-types"

// eslint-disable-next-line
import VendorAttributes from "../../fragments/vendor-attributes"

import * as g from "../global/variables"

import Container from "../layout/container"
import Form from "../form"
import HTML from "../utilities/html"
import Location from "../location"
import VendorLogoContainer from "../vendor-logo-container"
import ImageGrid from "../image/grid"

const Containers = props => {
  const renderLocation = data => (
    <Location
      key={data.title}
      hours={data.hours.hours}
      address={data.address.address}
      phone={data.phone}
    />
  )

  const renderContent = data => <ImageGrid images={data.blocks} />

  const renderVendors = containerData => (
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
              <HTML field={containerData.body} />
            </Col>
          </Row>
          <VendorLogoContainer logos={data.vendors.edges.map(v => v.node)} />
        </Container>
      )}
    />
  )

  const renderForm = data => (
    <Container
      key={data.title}
      bgColor={g.colors.gray100}
      padding={{ desktop: "10rem", mobile: "3.6rem" }}
    >
      <Row center="xs">
        <Col md={9} lg={7} xl={6}>
          <HTML field={data.body} />
          <Form name={data.title} config={data.formConfig} />
        </Col>
      </Row>
    </Container>
  )

  const containerRenderMap = {
    ContentfulLocationContainer: renderLocation,
    ContentfulFormContainer: renderForm,
    ContentfulContentContainer: renderContent,
    ContentfulVendorsContainer: renderVendors
  }

  return <div>{props.data.map(n => containerRenderMap[n.__typename](n))}</div>
}

Containers.propTypes = {
  data: PropTypes.object.isRequired
}

Containers.defaultProps = {}

export default Containers
