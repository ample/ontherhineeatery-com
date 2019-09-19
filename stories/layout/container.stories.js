import React from "react"
import { storiesOf } from "@storybook/react"
import { Grid, Row, Col } from "react-flexbox-grid"
import { select } from "@storybook/addon-knobs"

import * as g from "../../src/components/global/variables"

import Container from "../../src/components/layout/container"
import notes from "../__notes__/layout/container.md"

const stories = storiesOf("Layout", module)

stories.add(
  "Container",
  () => {
    let bgColor = select(
      "bgColor",
      {
        Salt: g.colors.gray100,
        Gray200: g.colors.gray200,
        RobinEgg: g.colors.robinegg,
        None: "none"
      },
      g.colors.gray100
    )
    return (
      <Container className="text-center" bgColor={bgColor}>
        <h2>Eat + Drink</h2>
        <h5>Some Serious Good Eats</h5>
        <Row center="md">
          <Col md={9} lg={8} xl={6}>
            <p>
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Donec id elit non mi porta gravida at eget metus. Nullam quis
              risus eget urna mollis ornare vel eu leo.
            </p>
          </Col>
        </Row>
        <p>
          Maecenas faucibus mollis interdum. Maecenas sed diam eget risus varius
          blandit sit amet non magna. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed
          consectetur. Etiam porta sem malesuada magna mollis euismod.
        </p>
        <p>
          {`Aenean lacinia bibendum nulla sed consectetur.\nVivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.`}
        </p>
      </Container>
    )
  },
  { notes: notes }
)
