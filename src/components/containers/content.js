import React from "react"
import { Row, Col } from "react-flexbox-grid"
import PropTypes from "prop-types"
import uniq from "lodash/uniq"

import Container from "../layout/container"
import HTML from "../utilities/html"
import ImageGrid from "../image/grid"
import ImageHero from "../image/hero"

const ContentContainer = ({ blocks }) => {
  const blockTypes = uniq(blocks.map(b => b.__typename))

  if (
    blocks.length === 3 &&
    blockTypes.length === 1 &&
    blockTypes[0] === "ContentfulImageBlock"
  ) {
    return <ImageGrid images={blocks} />
  }

  return (
    <Container
      className="text-center"
      padding={{ desktop: "9rem", mobile: "3.6rem" }}
    >
      <Row center="md">
        <Col md={9} lg={8} xl={6}>
          {blocks.map((b, i) =>
            b.__typename === "ContentfulContentBlock" ? (
              <HTML key={i} field={b.body} />
            ) : (
              <ImageHero key={i} image={b.image} />
            )
          )}
        </Col>
      </Row>
    </Container>
  )
}

ContentContainer.propTypes = {
  blocks: PropTypes.array.isRequired
}

ContentContainer.defaultProps = {}

export default ContentContainer
