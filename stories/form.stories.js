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
    const options = [
      { value: "opt1", label: "Option 1" },
      { value: "opt2", label: "Option 2" },
      { value: "opt3", label: "Option 3" },
      { value: "opt4", label: "Option 4" },
    ]
    const invalid = boolean("Missing required field", true)
    return (
      <>
        <GlobalStyles />
        <Container bgColor={g.colors.gray100}>
          <Row center="xs">
            <Col md={9} lg={7} xl={6}>

              <h3>Form Styles Demo</h3>

              <Form>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder={`Text ${invalid ? ".invalid" : ""}`}
                  className={invalid ? "invalid" : ""}
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Email"
                />
                <input
                  type="text"
                  required
                  placeholder=".field-50 .col-left"
                  className="field-50 col-left"
                />
                <input
                  type="text"
                  required
                  placeholder=".field-50 .col-right"
                  className="field-50 col-right"
                />
                <FormSelect
                  options={options}
                  placeholder="FormSelect Utility"
                />
                <textarea placeholder="Textarea" rows="5" />
                <Button type="submit">
                  Component Button
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    )
  },
  { notes: notes }
)
