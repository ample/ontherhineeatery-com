import React from "react"
import PropTypes from "prop-types"

import FormSelect from "./utilities/form-select"
import Button from "./button"

const Form = ({ config, name }) => {
  const renderInput = opts => (
    <input
      type="text"
      name={opts.name}
      required={opts.required}
      placeholder={opts.label}
      className={opts.className}
    />
  )

  const renderSelect = opts => (
    <FormSelect
      options={opts.options}
      placeholder={opts.label}
      name={opts.name}
    />
  )

  const renderSubmit = opts => <Button type="submit">{opts.label}</Button>

  const renderTextarea = opts => (
    <textarea name={opts.name} placeholder={opts.label} rows={opts.rows || 5} />
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
    <form name={name} method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value={name} />
      {config.map(f => fieldMap[f.type](f))}
    </form>
  )
}

export default Form

Form.propTypes = {
  config: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired
}

Form.defaultProps = {}
