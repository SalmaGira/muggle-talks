import React from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import BaseButton from '../buttons/BaseButton'

const SearchField = ({ placeholder, handleClick, handleReset }) => {
  const [inputValue, setInputValue] = React.useState('')

  return (
    <InputGroup className="mb-3 w-50">
      <Form.Control
        placeholder={placeholder}
        aria-label={placeholder}
        aria-describedby="basic-addon2"
        onChange={(e) => {
          setInputValue(e.target.value)
          if (!e.target.value) handleReset()
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleClick(inputValue)
        }}
      />
      <BaseButton
        id="button-addon2"
        handleClick={() => handleClick(inputValue)}
        text="Search"
      />
    </InputGroup>
  )
}

SearchField.propTypes = {
  placeholder: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
}

SearchField.defaultProps = {
  placeholder: 'Search ..',
}

export default SearchField
