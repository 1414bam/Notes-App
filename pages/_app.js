import '../styles/globals.css'
import React from 'react'
import NoteStore from '../stores/notesStore'
import {Layout} from '../components/Layouts/Layouts'

function MyApp({ Component, pageProps }) {
  const noteStore = React.useContext(NoteStore);
  
  React.useEffect(() => {
    noteStore.fetchNotes();
  }, []);

  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
