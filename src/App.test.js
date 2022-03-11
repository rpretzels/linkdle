import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the Linkdle title', () => {
  render(<App />)
  const title = screen.getByText(/Linkdle/i)
  expect(title).toBeInTheDocument()
})
