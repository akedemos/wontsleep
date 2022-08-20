import React from 'react'
import Main from '../layouts/Main'
import app from 'gatsby-plugin-firebase-v9.0'

console.log('->    firebase', app)

const AlbumPage = () => {
  return (
    <Main>
      AlbumPage
      {/* <FirestoreDocument /> */}
    </Main>
  )
}

export default AlbumPage
