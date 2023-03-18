import { render, screen, waitFor } from '@testing-library/react'
import App from './App'
import nock from 'nock'

const url = 'https://jsonplaceholder.typicode.com'

describe('expectedData', () => {
  it('checks if returned data from API rendered into component', async () => {
    nock(`${url}/posts`)
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
      })
      .get('/users/1')
      .reply(200, {
        id: 1,
        title:
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      })

    render(<App />)

    await waitFor(() => {
      expect(
        screen.getByText(
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        ),
      ).toBeInTheDocument()
    })
  })
})
