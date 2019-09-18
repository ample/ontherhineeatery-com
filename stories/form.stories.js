import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean } from "@storybook/addon-knobs"
import { Grid, Row, Col } from "react-flexbox-grid"

import GlobalStyles from "../src/components/global/styles"
import * as g from "../src/components/global/variables"

import Container from "../src/components/layout/container"
import Button from "../src/components/button"
import Form from "../src/components/form"
import FormSelect from "../src/components/utilities/form-select"
import notes from "./__notes__/form.md"

const stories = storiesOf("Form", module)

stories.addDecorator(withKnobs)

stories.add(
  "Form",
  () => {
    const formConfig = [
      {
        name: "name",
        label: "Name",
        required: true
      },
      {
        name: "email",
        label: "Email",
        required: true,
        className: "invalid"
      },
      {
        required: true,
        label: ".field-50 .col-left",
        className: "field-50 col-left"
      },
      {
        required: true,
        label: ".field-50 .col-right",
        className: "field-50 col-right"
      },
      {
        name: "subject",
        label: "Reason for inquiry",
        required: true,
        options: [
          { value: "opt1", label: "Option 1" },
          { value: "opt2", label: "Option 2" },
          { value: "opt3", label: "Option 3" },
          { value: "opt4", label: "Option 4" }
        ],
        type: "select"
      },
      {
        name: "body",
        label: "Short Message...",
        required: true,
        type: "text"
      },
      {
        label: "Component Button",
        type: "button"
      }
    ]

    const invalid = boolean("Missing required field", true)
    return (
      <>
        <GlobalStyles />
        <Container bgColor={g.colors.gray100}>
          <Row center="xs">
            <Col md={9} lg={7} xl={6}>
              <h3>Form Styles Demo</h3>
              <Form config={formConfig} />
            </Col>
          </Row>
        </Container>
      </>
    )
  },
  { notes: notes }
)
