import React from 'react'
import AppBar from '../components/AppBar'
import withRoot from '../withRoot'

const MainLayout = ({ children }) => {
  return (
    <>
      <AppBar />
      {children}
    </>
  )
}

export default withRoot(MainLayout)
