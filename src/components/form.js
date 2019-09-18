import React from "react"
import PropTypes from "prop-types"

import FormSelect from "./utilities/form-select"
import Button from "./button"

const Form = ({ config }) => {
  const renderInput = opts => (
    <input
      type="text"
      name={opts.name}
      required={opts.required}
      placeholder={opts.label}
      className={opts.className}
      key={opts.name}
    />
  )

  const renderSelect = opts => (
    <FormSelect
      options={opts.options}
      placeholder={opts.label}
      key={opts.name}
    />
  )

  const renderSubmit = opts => (
    <Button type="submit" key={opts.name}>
      {opts.label}
    </Button>
  )

  const renderTextarea = opts => (
    <textarea placeholder={opts.label} rows={opts.rows || 5} key={opts.name} />
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
    <form action="" method="get">
      {config.map(f => fieldMap[f.type](f))}
    </form>
  )
}

export default Form

Form.propTypes = {
  config: PropTypes.object.isRequired
}

Form.defaultProps = {}
