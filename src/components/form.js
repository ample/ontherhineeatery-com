import React from "react"
import PropTypes from "prop-types"

import FormSelect from "./utilities/form-select"
import Button from "./button"

const Form = ({ action, config, name }) => {
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
    <form name={name} action={action} method="POST" data-netlify="true">
      <input key={name} type="hidden" name="form-name" value={name} />
      {config.map(f => fieldMap[f.type](f))}
    </form>
  )
}

export default Form

Form.propTypes = {
  action: PropTypes.string.isRequired,
  config: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
}

Form.defaultProps = {
  action: ""
}
