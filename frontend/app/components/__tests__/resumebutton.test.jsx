import { render, screen } from '@testing-library/react'

jest.mock('@mui/material/useMediaQuery', () => ({
  __esModule: true,
  default: () => false, // pretend "not dark mode"
}))

import Home from '../../page'

describe('Resume button on homepage', () => {
  test('Resume button exists and has correct attributes', () => {
    render(<Home />)

    const resumeButton = screen.getByRole('link', { name: /download resume/i })

    expect(resumeButton).toBeInTheDocument()
    expect(resumeButton).toHaveAttribute('href', '/resume')
    expect(resumeButton).toHaveAttribute('target', '_blank')
  })
})
