import React from "react"
import PropTypes from "prop-types"

const Form = ({ children, ...props }) => {
  return (
    <form action="" method="get" {...props}>
      {children}
    </form>
  )
}

export default Form
