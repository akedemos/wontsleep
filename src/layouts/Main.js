import React from 'react'
import AppBar from '../components/AppBar'
import Footer from '../components/Footer'
import withRoot from '../withRoot'

const MainLayout = ({ children }) => {
  return (
    <>
      <AppBar />
      {children}
      <Footer />
    </>
  )
}

export default withRoot(MainLayout)
