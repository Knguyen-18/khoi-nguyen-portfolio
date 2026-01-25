import { render, screen } from '@testing-library/react'

jest.mock('@mui/material/useMediaQuery', () => ({
  __esModule: true,
  default: () => false, // pretend "not dark mode"
}))

import Home from '../../page'




describe('Professional links on homepage (current implementation)', () => {
  test('GitHub link is correct', () => {
    render(<Home />)

    const githubLink = screen
      .getAllByRole('link')
      .find(link => link.getAttribute('href')?.includes('github.com'))

    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/knguyen-18'
    )
    expect(githubLink).toHaveAttribute('target', '_blank')
  })

  test('LinkedIn link is correct', () => {
    render(<Home />)

    const linkedinLink = screen
      .getAllByRole('link')
      .find(link => link.getAttribute('href')?.includes('linkedin.com'))

    expect(linkedinLink).toBeInTheDocument()
    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://linkedin.com/in/knguyen-18'
    )
    expect(linkedinLink).toHaveAttribute('target', '_blank')
  })
})

