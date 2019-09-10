import React from "react"
import { storiesOf } from "@storybook/react"
import styled from "styled-components"

import GlobalStyles from "../../src/components/global/styles"
import * as g from "../../src/components/global/variables"
// import notes from "./__notes__/global/variables.md"

const stories = storiesOf("Global", module)

stories.addParameters({
  backgrounds: [
    { name: "white", value: g.colors.white, default: true },
    { name: "gray200", value: g.colors.gray200, default: false },
    { name: "robinegg", value: g.colors.robinegg, default: false },
    { name: "gray700", value: g.colors.gray700, default: false },
  ],
})

stories.add(
  "Variables",
  () => {
    return (
      <>
        <GlobalStyles />
        <div style={{ maxWidth: 992, margin: "auto" }}>
          <h2 style={{ marginTop: 60 }}>Global Variables</h2>

          <Group>
            <h5>
              Colors <br />
              <code>$&#123;colors.name&#125;</code>
            </h5>
            <Swatches>
              <div>
                <div
                  style={{
                    backgroundColor: g.colors.white,
                    color: g.colors.gray700,
                  }}
                >
                  white
                </div>
                <code>#FFFFFF</code>
              </div>
              <div>
                <div
                  style={{
                    backgroundColor: g.colors.gray100,
                    color: g.colors.gray700,
                  }}
                >
                  gray100
                </div>
                <code>
                  #FAF8F4
                  <br />
                  Salt
                </code>
              </div>
              <div>
                <div
                  style={{
                    backgroundColor: g.colors.gray200,
                    color: g.colors.gray700,
                  }}
                >
                  gray200
                </div>
                <code>
                  #F2EFE9
                  <br />
                  container bg
                </code>
              </div>
              <div>
                <div
                  style={{
                    backgroundColor: g.colors.gray300,
                    color: g.colors.gray700,
                  }}
                >
                  gray300
                </div>
                <code>
                  #D3CDC3
                  <br />
                  Latte
                </code>
              </div>
              <div>
                <div style={{ backgroundColor: g.colors.gray500 }}>gray500</div>
                <code>
                  #79766F
                  <br />
                  Toast
                </code>
              </div>
              <div>
                <div style={{ backgroundColor: g.colors.gray700 }}>gray700</div>
                <code>
                  #404040
                  <br />
                  Charcoal
                </code>
              </div>
              <div>
                <div style={{ backgroundColor: g.colors.gray800 }}>gray800</div>
                <code>
                  #252422B3
                  <br />
                  pg text (70%)
                </code>
              </div>
              <div>
                <div style={{ backgroundColor: g.colors.black }}>black</div>
                <code>#000000</code>
              </div>
              <div>
                <div style={{ backgroundColor: g.colors.cantaloupe }}>
                  cantaloupe
                </div>
                <code>#E1907D</code>
              </div>
              <div>
                <div style={{ backgroundColor: g.colors.robinegg }}>
                  robinegg
                </div>
                <code>#87C4B6</code>
              </div>
            </Swatches>
          </Group>

          <Group>
            <h5>
              Fonts <br />
              <code>$&#123;fonts.type&#125;</code>
            </h5>
            <section>
              <div className="oswald">
                <code>fonts.oswald</code>
                <br />
                Oswald
              </div>
              <br />
              <div className="source">
                <code>fonts.source</code>
                <br />
                Source Sans Pro
              </div>
              <br />
              <div className="acumin">
                <code>fonts.acumin</code>
                <br />
                Acumin Pro Condensed
              </div>
            </section>
          </Group>

          <Group>
            <h5>Media Queries</h5>
            (max-width)
            <section>
              <code>
                <div>@media $&#123;screen.max.sm&#125;</div>
                <div>@media $&#123;screen.max.md&#125;</div>
                <div>@media $&#123;screen.max.lg&#125;</div>
                <div>@media $&#123;screen.max.xl&#125;</div>
              </code>
            </section>
            (min-width)
            <section>
              <code>
                <div>@media $&#123;screen.min.sm&#125;</div>
                <div>@media $&#123;screen.min.md&#125;</div>
                <div>@media $&#123;screen.min.lg&#125;</div>
                <div>@media $&#123;screen.min.xl&#125;</div>
              </code>
            </section>
            combined
            <section>
              <code>
                <div>
                  @media $&#123;screen.min.md&#125; and
                  $&#123;screen.max.lg&#125;
                </div>
              </code>
            </section>
          </Group>
        </div>
      </>
    )
  }
  // { notes: notes_variables }
)

const Group = styled.div`
  text-align: center;
  color: ${g.colors.gray700};
  h5 {
    margin-top: 60px;
  }
  section {
    margin-bottom: 3rem;
    padding: 1rem;
    border: 1px solid gainsboro;
  }
  .oswald {
    font-family: ${g.fonts.oswald};
    margin-bottom: 1rem;
  }
  .source {
    font-family: ${g.fonts.source};
    margin-bottom: 1rem;
  }
  .acumin {
    font-family: ${g.fonts.acumin};
    margin-bottom: 1rem;
  }
`

const Swatches = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > div {
    flex: 0 1 auto;
    min-width: 150px;
    padding: 1rem 1.5rem;
    color: ${g.colors.gray800};
    text-align: center;
    div:first-child {
      vertical-align: middle;
      border: 1px solid gainsboro;
      font-family: monospace;
      font-weight: bold;
      color: white;
      padding: 1.5rem 1rem;
    }
  }
`
