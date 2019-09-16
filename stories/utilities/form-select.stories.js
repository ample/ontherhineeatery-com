import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean } from "@storybook/addon-knobs"

import GlobalStyles from "../../src/components/global/styles"
import * as g from "../../src/components/global/variables"

import FormSelect from "../../src/components/utilities/form-select"
import Form from "../../src/components/form"

import notes from "../__notes__/utilities/form-select.md"

const stories = storiesOf("Utilities", module)

stories.addParameters({
  backgrounds: [{ name: "gray200", value: g.colors.gray200, default: true }],
})

stories.addDecorator(withKnobs)

stories.add(
  "FormSelect",
  () => {
    const invalid = boolean("Missing required field", false)
    const options = [
      { value: "opt1", label: "Option 1" },
      { value: "opt2", label: "Option 2" },
      { value: "opt3", label: "Option 3" },
      { value: "opt4", label: "Option 4" },
      { value: "opt5", label: "Option 5" },
      { value: "opt6", label: "Option 6" },
      { value: "opt7", label: "Option 7" },
      { value: "opt8", label: "Option 8" },
      { value: "opt9", label: "Option 9" },
      { value: "opt10", label: "Option 10" },
    ]
    return (
      <>
        <GlobalStyles />
        <Form style={{ maxWidth: 400, margin: "auto" }}>
          <FormSelect
            options={options}
            placeholder={`Placeholder ${invalid ? ".invalid" : ""}`}
            className={invalid ? "invalid" : ""}
          />
        </Form>
      </>
    )
  },
  {
    notes: notes,
  }
)
