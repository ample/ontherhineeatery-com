import React from "react"
import { Row, Col } from "react-flexbox-grid"
import PropTypes from "prop-types"
import uniq from "lodash/uniq"

import Container from "../layout/container"
import HTML from "../utilities/html"
import ImageGrid from "../image/grid"
import ImageHero from "../image/hero"
import { colors } from "../global/variables"
import TwoColContainer from "../layout/two-col"
import Button from "../button"

const ContentContainer = ({ blocks, ...props }) => {
  const blockTypes = uniq(blocks.map(b => b.__typename))

  const button = block => {
    if (!block.button_label || !block.button_url) return null
    return (
      <Button key="block-button" to={block.button_url}>
        {block.button_label}
      </Button>
    )
  }

  if (
    blocks.length === 3 &&
    blockTypes.length === 1 &&
    blockTypes[0] === "ContentfulImageBlock"
  ) {
    return <ImageGrid images={blocks} />
  }

  if (blocks.length === 3 && blockTypes.length === 2) {
    const imageBlocks = blocks.filter(b => b.image)
    const textBlocks = blocks.filter(b => !b.image)

    return (
      <TwoColContainer
        image1={imageBlocks[0].image}
        image2={imageBlocks[1].image}
        content_block={textBlocks[0]}
      />
    )
  }

  return (
    <Container
      className="text-center"
      padding={{ desktop: "9rem", mobile: "3.6rem" }}
      bgColor={colors[props.background_color === "gray" ? "gray100" : "white"]}
    >
      <Row center="md">
        <Col md={9} lg={8} xl={6}>
          {blocks.map((b, i) =>
            b.__typename === "ContentfulContentBlock" ? (
              <div key={i}>
                <HTML key={i} field={b.body} />
                {button(b)}
              </div>
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
