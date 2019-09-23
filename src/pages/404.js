import React from "react"
import { graphql } from "gatsby"
import { Row, Col } from "react-flexbox-grid"

import Layout from "../components/layout"
import GlobalStyles from "../components/global/styles"
import Container from "../components/layout/container"

const NotFoundPage = ({ data, ...props }) => (
  <Layout
    navMenus={data.navMenus.edges.map(n => n.node)}
    settings={data.settings.edges.map(n => n.node)}
    location={props.location}
  >
    <GlobalStyles />

    <Container
      className="text-center"
      padding={{ desktop: "9rem", mobile: "3.6rem" }}
    >
      <Row center="md">
        <Col md={9} lg={8} xl={6}>
          <h2>Page Not Found</h2>
          <p>The page you're trying to access cannot be located.</p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default NotFoundPage

export const query = graphql`
  query NotFoundPageQuery {
    navMenus: allContentfulNavMenu {
      edges {
        node {
          id
          title
          links {
            id
            title
            url
          }
        }
      }
    }

    settings: allContentfulSetting {
      edges {
        node {
          key
          value {
            value
          }
        }
      }
    }
  }
`
