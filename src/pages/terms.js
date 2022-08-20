import * as React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '../components/Typography'
import AppAppBar from '../views/AppAppBar'
import AppFooter from '../views/AppFooter'
import withRoot from '../withRoot'

function Terms () {
  return (
    <>
      <AppAppBar />
      <Container>
        <Box sx={{ mt: 7, mb: 12 }}>
          <Typography variant='h3' gutterBottom marked='center' align='center'>
            Terms
          </Typography>
        </Box>
      </Container>
      <AppFooter />
    </>
  )
}

export default withRoot(Terms)
