import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'

const BaseButton = ({ text, handleClick, ...rest }) => {
  return (
    <Button
      className="float-end"
      style={{
        backgroundColor: '#8f160d',
        borderColor: '#8f160d',
      }}
      onClick={handleClick}
      {...rest}
    >
      {text}
    </Button>
  )
}

BaseButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default BaseButton
