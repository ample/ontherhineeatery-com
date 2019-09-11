import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean } from "@storybook/addon-knobs"
import styled from "styled-components"

import GlobalStyles from "../../src/components/global/styles"
import * as g from "../../src/components/global/variables"
import notes from "../__notes__/global/styles.md"

const stories = storiesOf("Global", module)

stories.addDecorator(withKnobs)

stories.addParameters({
  backgrounds: [
    { name: "white", value: g.colors.white, default: true },
    { name: "gray200", value: g.colors.gray200, default: false },
    { name: "robinegg", value: g.colors.robinegg, default: false },
    { name: "gray700", value: g.colors.gray700, default: false },
  ],
})

stories.add(
  "Styles",
  () => {
    let textLight = boolean("`text-light` utility class", false)
    let textCenter = boolean("`text-center` utility class", false)
    return (
      <>
        <GlobalStyles />
        <div
          className={
            (textLight ? " text-light " : "") +
            (textCenter ? " text-center " : "")
          }
        >
          <div>
            <h1>h1 Page Title</h1>
            <h4>h4 Sub-Header</h4>
          </div>
          <div>
            <h2>h2 Primary Section</h2>
            <h5>h5 Sub-Header</h5>
          </div>
          <div>
            <h3>h3 Secondary Section</h3>
            <h6>h6 Sub-Header</h6>
          </div>
          <section>
            <Notes className="text-sm">
              <strong>The following classes work with:</strong>
              <p>
                <code>
                  &lt;p> &lt;h1> &lt;h2> &lt;h3> &lt;h4> &lt;h5> &lt;h6>
                  <br />
                  &lt;section> &lt;nav> &lt;header> &lt;footer> &lt;div>
                </code>
              </p>
              <p>.className (Desktop size / Mobile size)</p>
            </Notes>
            <p>
              <strong>default, .text-md (16px/14px) </strong>
              <div>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.{" "}
                <a href="#">Donec ullamcorper</a> nulla non metus auctor
                fringilla. Vivamus sagittis lacus vel augue laoreet rutrum
                faucibus dolor auctor. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Curabitur blandit tempus porttitor. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam.
              </div>
            </p>
            <p className="text-sm">
              <strong>.text-sm (14px/14px) </strong>
              <div>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Donec ullamcorper nulla non metus auctor fringilla. Vivamus
                sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam.
              </div>
            </p>
            <p className="text-xs">
              <strong>.text-xs (13px/10.5px) </strong>
              <div>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Donec ullamcorper nulla non metus auctor fringilla. Vivamus
                sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam.
              </div>
            </p>
            <p className="text-center">
              <strong>.text-center </strong>
              <br />
              <div>
                Maecenas sed diam eget risus varius blandit sit amet non magna.
              </div>
            </p>
            <p>
              <div className="text-center">
                <strong>.text-quote (36px/28px)</strong>
              </div>
              <div className="text-quote">
                Integer posuere erat a ante venenatis.
              </div>
            </p>
            <p>
              <strong>.text-light (turns text white)</strong>
              <div className="text-light">
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Donec ullamcorper nulla non metus auctor fringilla. Vivamus
                sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam.
              </div>
            </p>
          </section>

          <Notes className="text-sm">
            <strong>
              The <code>.border</code> class works with <code>&lt;img></code>{" "}
              and <code>&lt;svg></code>
            </strong>
            <p>
              <small>(Adds a 10px white border to images.)</small>
            </p>
          </Notes>
          <section>
            <img
              src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
              className="border"
              alt="Image with border"
              style={{
                width: 400,
                display: "block",
                margin: "20px auto",
              }}
            />
          </section>
        </div>
      </>
    )
  },
  { notes: notes }
)

// ------------------ For spec sheet only

const Notes = styled.section`
  color: ${g.colors.gray800};
  max-width: 57.6rem;
  text-align: center;
  margin: 4rem auto 2rem;
  padding: 2rem 1rem 1rem 1rem;
  background-color: ${g.colors.gray200};
  .text-light & {
    background-color: rgba(255, 255, 255, 0.05);
  }
`
