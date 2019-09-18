import React from "react"
import { StaticQuery, graphql } from "gatsby"

// eslint-disable-next-line
import VendorAttributes from "../../fragments/vendor-attributes"

import * as g from "../global/variables"

import Container from "../layout/container"
import HTML from "../utilities/html"
import Location from "../location"
import VendorLogoContainer from "../vendor-logo-container"
import ImageGrid from "../image/grid"

const Containers = props => {
  console.log(props)

  const renderLocation = data => (
    <Location
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
        <Container bgColor={g.colors.gray100}>
          <HTML field={containerData.body} />
          <VendorLogoContainer logos={data.vendors.edges.map(v => v.node)} />
        </Container>
      )}
    />
  )

  const renderForm = data => <p>Form goes here...</p>

  const containerRenderMap = {
    ContentfulLocationContainer: renderLocation,
    ContentfulFormContainer: renderForm,
    ContentfulContentContainer: renderContent,
    ContentfulVendorsContainer: renderVendors
  }

  return <div>{props.data.map(n => containerRenderMap[n.__typename](n))}</div>
}

export default Containers
