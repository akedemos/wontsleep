import React from 'react'
// import PropTypes from 'prop-types';
import { Box } from '@mui/material'

export const Centered = ({
  ...props
}) => {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}
      {...props}
    />
  )
}

Centered.propTypes = {

}

export default Centered
