import React from "react"
import { storiesOf } from "@storybook/react"
import { Row, Col } from "react-flexbox-grid"

import GlobalStyles from "../src/components/global/styles"
import * as g from "../src/components/global/variables"

import Container from "../src/components/layout/container"
import Form from "../src/components/form"
import notes from "./__notes__/form.md"

import data from "./__fixtures__/pages"

const stories = storiesOf("Form", module)

stories.add(
  "Form",
  () => (
    <>
      <GlobalStyles />
      <Container bgColor={g.colors.gray100}>
        <Row center="xs">
          <Col md={9} lg={7} xl={6}>
            <h3>Form Styles Demo</h3>
            <Form
              config={
                data.edges.map(p => p.node)[0].containers.slice(-1)[0]
                  .formConfig
              }
            />
          </Col>
        </Row>
      </Container>
    </>
  ),
  { notes: notes }
)
