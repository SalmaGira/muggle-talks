import React from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form'
import InputField from './inputFields/inputField'
import BaseButton from './buttons/BaseButton'

function CommentBlock({ inputs, submitText, handleSubmit }) {
  const [inputValue, setInputValue] = React.useState('')

  React.useEffect(() => {
    console.log(inputValue)
  }, [inputValue])

  return (
    <Form>
      {inputs.map((input) => (
        <InputField
          {...input}
          onChange={(e) =>
            setInputValue({ ...inputValue, [input.name]: e.target.value })
          }
        />
      ))}
      <BaseButton
        handleClick={() => handleSubmit(inputValue)}
        text={submitText}
      />
    </Form>
  )
}

CommentBlock.propTypes = {
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
  submitText: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
}

CommentBlock.defaultProps = {
  submitText: 'Submit',
}

export default CommentBlock
