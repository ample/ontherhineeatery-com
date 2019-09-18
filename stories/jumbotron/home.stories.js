import React from "react"
import { storiesOf } from "@storybook/react"
import { Row, Col } from "react-flexbox-grid"
import { withKnobs, boolean, select } from "@storybook/addon-knobs"

import GlobalStyles from "../../src/components/global/styles"
import * as g from "../../src/components/global/variables"

import HomeJumbotron from "../../src/components/jumbotron/home"
import Button from "../../src/components/button"
import Container from "../../src/components/layout/container"
import data from "../__fixtures__/pages.json"
import notes from "../__notes__/jumbotron/home.md"

const stories = storiesOf("Jumbotron", module)

stories.addDecorator(withKnobs)

stories.add(
  "Home Jumbotron",
  () => {
    let hero = boolean("hero", true)
    let jumbotron_color = select(
      "jumbotron_color",
      {
        Robinegg: g.colors.robinegg,
        Cantaloupe: g.colors.cantaloupe,
      },
      g.colors.robinegg
    )
    return (
      <>
        <GlobalStyles />

        <HomeJumbotron
          hero={hero ? data.edges[0].node.image : null}
          color={jumbotron_color}
        >
          <h1>On The Rhine</h1>
          <h4>{data.edges[0].node.subtitle}</h4>
          <div>
            <p>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor. Etiam porta sem malesuada magna mollis euismod. Duis
              mollis, est non commodo luctus, nisi erat porttitor ligula, eget
              lacinia odio sem nec elit. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu
              leo.
            </p>
            <p>
              Maecenas seddiam eget risus varius blandit sit amet non magna. Sed
              posuere consectetur est at lobortis.
            </p>
          </div>
          <Button to="#">Who We Are</Button>
        </HomeJumbotron>

        {/* Sample ImageGrid Component */}
        <Container padding={{ desktop: "0rem", mobile: "0rem" }}>
          <Row>
            <Col xs style={{ border: "1px solid orange", height: 300 }}>
              /* ImageGrid will display here */
            </Col>
          </Row>
        </Container>
      </>
    )
  },
  { notes: notes }
)
