import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { getPaginatedPosts, getPaginatedPostsByUser } from '../services/posts'
import SearchField from './inputFields/searchField'
import PostModal from './modal/postModal'
import PaginationComponent from './pagination/pagination'
import PostCard from './postCard'

const Posts = () => {
  const { userId } = useParams()

  const [currentPageNumber, setCurrentPageNumber] = React.useState(1)
  const [pagesNumber, setPagesNumber] = React.useState(0)
  const [posts, setPosts] = React.useState([])
  const [post, setPost] = React.useState({})
  const [show, setShow] = React.useState(false)

  const handleClose = () => {
    setShow(false)
    setPost({})
  }
  const handleShow = (selectedPost) => {
    setPost(selectedPost)
    setShow(true)
  }

  const getResults = (pageNumber, searchValue = null) => {
    if (userId) {
      getPaginatedPostsByUser(userId, pageNumber).then((data) => {
        let result = data.posts
        let total = data.total
        if (searchValue) {
          result = data.posts.filter((post) => post.title.includes(searchValue))
          total = result.length
        }
        setPosts(result)
        setPagesNumber(Math.ceil(total / 20))
      })
    } else {
      getPaginatedPosts(pageNumber).then((data) => {
        let result = data.posts
        let total = data.total
        if (searchValue) {
          result = data.posts.filter((post) => post.title.includes(searchValue))
          total = result.length
        }
        setPosts(result)
        setPagesNumber(Math.ceil(total / 20))
      })
    }
    setCurrentPageNumber(pageNumber)
  }

  const handleSearch = (value) => {
    getResults(1, value)
  }
  const handleResetSearch = () => {
    getResults(1)
  }

  const handleChangePageNumber = (newPageNumber) => {
    getResults(newPageNumber)
  }

  React.useEffect(() => {
    getResults(1)
  }, [userId])

  return (
    <Row
      className="d-flex justify-content-center pt-5"
      style={{ backgroundColor: '#fff', margin: '0 10%' }}
    >
      <PostModal show={show} handleClose={handleClose} post={post} />
      <Col sm={12} className="d-flex justify-content-center">
        <SearchField
          placeholder="Search on post title"
          handleClick={handleSearch}
          handleReset={handleResetSearch}
        />
      </Col>
      <Col sm={12} className="d-flex justify-content-center">
        <PaginationComponent
          pagesNumber={pagesNumber}
          currentPageNumber={currentPageNumber}
          handleChangePageNumber={handleChangePageNumber}
        />
      </Col>
      <Col>
        {posts ? (
          posts?.map((post) => (
            // <div key={post.id}>
            <PostCard post={post} handleClick={handleShow} key={post.id} />
            // </div>
          ))
        ) : (
          <div>No Posts To Show</div>
        )}
      </Col>
    </Row>
  )
}

export default Posts
