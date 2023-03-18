const url = 'http://jsonplaceholder.typicode.com'

export const getPosts = () =>
  fetch(`${url}/posts`).then((response) => response.json())

export const getPaginatedPosts = (pageNumber) =>
  getPosts().then((response) => {
    const total = response.length
    return {
      posts: response.splice((pageNumber - 1) * 20, pageNumber * 20),
      total,
    }
  })

export const getPostsByUser = (userId) =>
  fetch(`${url}/posts`)
    .then((response) => response.json())
    .then((data) => data.filter((item) => item.userId === parseInt(userId)))

export const getPaginatedPostsByUser = (userId, pageNumber) =>
  getPostsByUser(userId).then((data) => {
    const result = data.filter((item) => item.userId === parseInt(userId))
    return {
      total: result.length,
      posts: result.splice((pageNumber - 1) * 20, pageNumber * 20),
    }
  })

export const getSinglePost = (id) =>
  fetch(`${url}/posts/${id}`).then((response) => response.json())

export const getSingleUser = (id) =>
  fetch(`${url}/users/${id}`).then((response) => response.json())

export const getPostComments = (id) =>
  fetch(`${url}/comments?postId=${id}`).then((response) => response.json())

export const sendComment = (data) =>
  fetch(
    new Request(`${url}/comments`, {
      method: 'POST',
      body: data,
    }),
  ).then((response) => response.json())
