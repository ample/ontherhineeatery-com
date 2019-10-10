import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

// eslint-disable-next-line
import VendorAttributes from "../fragments/vendor-attributes"

import { colors } from "../components/global/variables"

import Button from "../components/button"
import Jumbotron from "../components/jumbotron/vendor"
import Layout from "../components/layout"
import ImageTiles from "../components/image/tiles"
import Menus from "../components/menus"
import Container from "../components/layout/container"
import VendorsContainer from "../components/containers/vendors"

const StyledContainer = styled(Container)`
  text-align: center;

  &.hours-container {
    padding-bottom: 8rem;
  }

  .hours-list {
    white-space: pre-wrap;
  }
`

const VendorDetailPage = ({ data, location, pageContext }) => {
  const { vendor } = data
  const { navMenus, settings } = pageContext

  return (
    <Layout
      navMenus={navMenus}
      settings={settings}
      page={vendor}
      location={location}
    >
      <Jumbotron
        title={vendor.title}
        body={vendor.body}
        featured_image={vendor.featured_image}
        body_image={vendor.body_image}
        social_links={vendor.socialLinks}
      />

      <ImageTiles
        images={vendor.images}
        bgColor={colors.gray100}
        padding={{ desktop: "4rem", mobile: "2rem" }}
      />

      <Menus menus={vendor.menus} />

      {vendor.menu_pdf && (
        <StyledContainer>
          <Button to={vendor.menu_pdf.file.url}>Download Menu</Button>
        </StyledContainer>
      )}

      {vendor.hours && (
        <StyledContainer className="hours-container">
          <h3>Hours</h3>
          <div className="hours-list">{vendor.hours.hours}</div>
        </StyledContainer>
      )}

      <VendorsContainer ignoreVendors={[vendor]}>
        <h3>More Restaurants</h3>
        <h5>Some Serious Good Eats</h5>
      </VendorsContainer>
    </Layout>
  )
}

export default VendorDetailPage

export const query = graphql`
  query VendorDetailQuery($id: String!) {
    vendor: contentfulVendor(contentful_id: { eq: $id }) {
      ...VendorAttributes
    }
  }
`
