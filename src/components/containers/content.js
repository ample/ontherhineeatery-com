import React from "react"
import { Row, Col } from "react-flexbox-grid"
import PropTypes from "prop-types"

import Container from "../layout/container"
import HTML from "../utilities/html"
import ImageGrid from "../image/grid"

const ContentContainer = ({ blocks }) => {
  if (
    blocks.length === 1 &&
    blocks[0].__typename === "ContentfulContentBlock"
  ) {
    return (
      <Container
        className="text-center"
        padding={{ desktop: "9rem", mobile: "3.6rem" }}
      >
        <Row center="md">
          <Col md={9} lg={8} xl={6}>
            <HTML field={blocks[0].body} />
          </Col>
        </Row>
      </Container>
    )
  }

  return <ImageGrid images={blocks} />
}

ContentContainer.propTypes = {
  blocks: PropTypes.array.isRequired
}

ContentContainer.defaultProps = {}

export default ContentContainer
