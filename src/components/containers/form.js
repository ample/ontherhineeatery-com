import React from "react"
import { Row, Col } from "react-flexbox-grid"
import PropTypes from "prop-types"

import * as g from "../global/variables"

import Container from "../layout/container"
import Form from "../form"
import HTML from "../utilities/html"

const FormContainer = ({ body, formConfig }) => (
  <Container
    bgColor={g.colors.gray100}
    padding={{ desktop: "10rem", mobile: "3.6rem" }}
  >
    <Row center="xs">
      <Col md={9} lg={7} xl={6}>
        <HTML field={body} />
        <Form config={formConfig} />
      </Col>
    </Row>
  </Container>
)

FormContainer.propTypes = {
  body: PropTypes.object.isRequired,
  formConfig: PropTypes.object.isRequired
}

FormContainer.defaultProps = {}

export default FormContainer
