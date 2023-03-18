import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../components/header'
import Posts from '../components/posts'

const Home = () => {
  return (
    <Container
      className="min-vw-100 min-vh-100"
      style={{ backgroundColor: '#f5f5f5', fontFamily: 'EBGaramond' }}
    >
      <Header />
      <Posts />
    </Container>
  )
}

export default Home
