import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

export const PageHeader = ({
  title,
  subtitle,
  actions = null,
  ...props
}) => {
  return (
    <Box
      sx={{ mt: 2, mb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      {...props}
    >
      <Stack>
        <Typography variant='h1'>{title}</Typography>
        <Typography variant='caption'>{subtitle}</Typography>
      </Stack>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {actions}
      </Box>
    </Box>
  )
}

export default PageHeader
