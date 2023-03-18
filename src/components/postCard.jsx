import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import BaseButton from './buttons/BaseButton'

const PostCard = ({ post, handleClick }) => {
  return (
    <Card className="shadow p-3 m-3">
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
        <BaseButton
          variant="primary"
          className="float-end"
          handleClick={() => handleClick(post)}
          text="Show Post"
        />
      </Card.Body>
    </Card>
  )
}

PostCard.propTypes = {
  post: PropTypes.shape({
    body: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
    userId: PropTypes.number,
  }),
  handleClick: PropTypes.func.isRequired,
}

PostCard.defaultProps = {
  post: {
    body: '',
    id: 0,
    title: '',
    userId: 0,
  },
}

export default PostCard
