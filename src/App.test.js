import { render, screen, waitFor } from '@testing-library/react'
import App from './App'

describe('expectedData', () => {
  it('checks if returned data from API rendered into component', async () => {
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
