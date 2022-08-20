import React from 'react'
import Main from '../layouts/Main'
import app from 'gatsby-plugin-firebase-v9.0'

import { getFirestore, doc } from 'firebase/firestore'
import { useDocument } from 'react-firebase-hooks/firestore'

const firestore = getFirestore(app)
console.log('->    firestore', firestore)

const FirestoreDocument = () => {
  const [snap, loading, error] = useDocument(doc(getFirestore(app), '/testColl/testDoc'))
  console.log('->    FirestoreDocument   value', snap?.exists(), snap?.data())
  return (
    <div>
      <p>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Document: Loading...</span>}
        {snap && <span>Document: {JSON.stringify(snap.data())}</span>}
      </p>
    </div>
  )
}

const AlbumPage = () => {
  return (
    <Main>
      AlbumPage
      <FirestoreDocument />
    </Main>
  )
}

export default AlbumPage
