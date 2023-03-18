import React from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form'

const InputField = ({ label, name, onChange, ...rest }) => {
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>{label}</Form.Label>
      <Form.Control name={name} {...rest} onChange={onChange} />
    </Form.Group>
  )
}

InputField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

InputField.defaultProps = {
  label: '',
}

export default InputField
