// components/sociallinks.jsx (refactored)

import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export default function SocialLinks({ darkMode }) {
  return (
    <>
      <IconButton
        href="https://github.com/knguyen-18"
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
        size="small"
      >
        <GitHubIcon />
      </IconButton>

      <IconButton
        href="https://linkedin.com/in/knguyen-18"
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
        size="small"
      >
        <LinkedInIcon />
      </IconButton>
    </>
  )
}
