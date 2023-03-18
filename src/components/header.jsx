import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { getSingleUser } from '../services/posts'

const Header = () => {
  const navigate = useNavigate()
  const { userId } = useParams()

  const [user, setUser] = React.useState({})

  const handleClick = () => navigate('/')

  React.useEffect(() => {
    if (userId) {
      getSingleUser(userId).then((data) => setUser(data))
    } else setUser({})
  }, [userId])

  return (
    <Row
      className="p-4 fs-2 shadow p-3 top-0 start-0 end-0"
      style={{
        backgroundColor: '#b82121',
        color: '#f0e6e6',
        fontFamily: 'EBGaramond',
      }}
    >
      <Col className="ps-5">
        <Button
          className="bg-transparent m-0 p-0 border-0 fs-2"
          title="return to home page"
          onClick={handleClick}
        >
          Muggle Talks
        </Button>
      </Col>
      {userId && (
        <Col sm="auto" className="px-3">
          <Button
            className="bg-transparent m-0 p-0 border-0 fs-2"
            title="show user posts"
          >
            {user?.username}
          </Button>
        </Col>
      )}
    </Row>
  )
}

export default Header
