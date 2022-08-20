import * as React from 'react'
import MuiAppBar from '@mui/material/AppBar'
import { Box, Link, Toolbar } from '@mui/material'
import { Link as GatsbyLink } from 'gatsby'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

function AppBar (props) {
  const { title } = useSiteMetadata()
  return (
    <div>
      <MuiAppBar position='fixed' {...props}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Link
            component={GatsbyLink}
            variant='h6'
            underline='none'
            color='inherit'
            to='/'
            sx={{ fontSize: 24 }}
          >
            {title}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              component={GatsbyLink}
              color='inherit'
              variant='h6'
              underline='none'
              to='/sign-in'
              sx={{ mx: 1 }}
            >
              Sign In
            </Link>
            <Link
              component={GatsbyLink}
              color='inherit'
              variant='h6'
              underline='none'
              to='/album'
              sx={{ mx: 1 }}
            >
              Album
            </Link>
          </Box>
        </Toolbar>
      </MuiAppBar>
      <Toolbar />
    </div>
  )
}

export default AppBar
