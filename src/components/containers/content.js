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
      <Button key="block-button" to={block.button_url} bold>
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

  const padding = small => {
    const desktop = small ? "4.5rem" : "9rem"
    const mobile = small ? "3.6rem" : "5.5rem"
    return { desktop: desktop, mobile: mobile }
  }

  return (
    <Container
      className="text-center"
      padding={padding(props.smPadding)}
      bgColor={colors[props.background_color === "gray" ? "gray100" : "white"]}
    >
      <Row center="sm">
        <Col sm={11} lg={9} xl={8}>
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
  blocks: PropTypes.array.isRequired,
  smPadding: PropTypes.bool
}

ContentContainer.defaultProps = {
  smPadding: false
}

export default ContentContainer
