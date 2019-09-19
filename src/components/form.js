import React from "react"
import PropTypes from "prop-types"

import FormSelect from "./utilities/form-select"
import Button from "./button"

const Form = ({ config }) => {
  const renderInput = opts => (
    <input
      key={opts.name}
      type="text"
      name={opts.name}
      required={opts.required}
      placeholder={opts.label}
      className={opts.className}
    />
  )

  const renderSelect = opts => (
    <FormSelect
      key={opts.name}
      options={opts.options}
      placeholder={opts.label}
      name={opts.name}
    />
  )

  const renderSubmit = opts => (
    <Button key="submit" type="submit">
      {opts.label}
    </Button>
  )

  const renderTextarea = opts => (
    <textarea
      key={opts.name}
      name={opts.name}
      placeholder={opts.label}
      rows={opts.rows || 5}
    />
  )

  const fieldMap = {
    button: renderSubmit,
    null: renderInput,
    select: renderSelect,
    string: renderInput,
    submit: renderSubmit,
    text: renderTextarea,
    undefined: renderInput
  }

  return (
    <form
      name={config.name}
      action={config.action}
      method="POST"
      data-netlify="true"
    >
      <input
        key={config.name}
        type="hidden"
        name="form-name"
        value={config.name}
      />
      {config.form_fields.map(f => fieldMap[f.type](f))}
    </form>
  )
}

export default Form

Form.propTypes = {
  config: PropTypes.object.isRequired
}

Form.defaultProps = {}
