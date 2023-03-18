import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'
import {
  getPostComments,
  getSingleUser,
  sendComment,
} from '../../services/posts'
import { useNavigate } from 'react-router-dom'
import CommentBlock from '../commentBlock'
import BaseButton from '../buttons/BaseButton'

const PostModal = ({ post, show, handleClose }) => {
  const navigate = useNavigate()

  const [user, setUser] = React.useState({})
  const [comments, setComments] = React.useState([])
  const handleClick = () => {
    navigate(`/${post.userId}`)
    handleClose()
  }

  const handleComment = (data) => {
    console.log(data)
    sendComment({ ...data, postId: post.id }).then((res) =>
      setComments([data, ...comments]),
    )
  }

  const inputs = [
    {
      label: 'Username',
      name: 'username',
      type: 'text',
      row: 1,
      placeholder: 'Write your username',
    },
    {
      label: 'Comment',
      name: 'body',
      as: 'textarea',
      row: 3,
      placeholder: 'Write a comment',
    },
  ]

  React.useEffect(() => {
    if (post.userId) getSingleUser(post.userId).then((data) => setUser(data))
    getPostComments(post.id).then((data) => setComments(data))
  }, [post])
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{post.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {post.body}
        <hr />
        <div className="fw-bolder fs-5">Author's Details</div>
        {/* {user &&
          Object.keys(user).map(
            (key) =>
              typeof user[key] === "string" && (
                <div key={key}>
                  <span className="fw-bolder">{key}:</span> {user[key]}
                </div>
              )
          )} */}
        <div>
          <span className="fw-bolder">name:</span> {user?.name}
        </div>
        <div>
          <span className="fw-bolder">username:</span> {user?.username}
        </div>
        <div>
          <span className="fw-bolder">phone:</span> {user?.phone}
        </div>

        <div>
          <span className="fw-bolder">company:</span> {user?.company?.name}
        </div>
        <hr />
        <div className="pb-4">
          Leave a comment
          <CommentBlock
            inputs={inputs}
            submitText="comment"
            handleSubmit={handleComment}
          />
        </div>
        <hr className="mt-5" />
        {comments ? (
          comments.map((comment, index) => (
            <div>
              <div className="fw-bolder">{comment.name}</div>
              <div>{comment.body}</div>
              <div className="fw-light">{comment.email}</div>
              {index < comments.length - 1 && <hr />}
            </div>
          ))
        ) : (
          <div>No Comments For This Post</div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <BaseButton
          variant="secondary"
          handleClick={handleClose}
          text="Close"
        />
        <BaseButton
          variant="primary"
          handleClick={handleClick}
          text="Show All Author's Posts"
        />
      </Modal.Footer>
    </Modal>
  )
}

PostModal.propTypes = {
  post: PropTypes.shape({
    body: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
    userId: PropTypes.number,
  }).isRequired,
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default PostModal
