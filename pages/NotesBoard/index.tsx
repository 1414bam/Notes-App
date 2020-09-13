import React, { Fragment } from 'react'
import styles from './NotesBoard.module.scss'
import Board from '../../components/Layouts/Content/NotesBoard/Board/Board'
import { Provider } from "mobx-react";
import NoteStore from '../../stores/notesStore'
import { Note } from '../../stores/notesStore'
import { observer } from 'mobx-react-lite'
import { NextPage } from 'next';
type Props = {
    notes: Note[]
}
const NotesBoard: NextPage<Props> = observer(() => {
    // const noteStore = React.useContext(NoteStore);
  
    // React.useEffect(() => {
    //   noteStore.fetchNotes();
    // }, []);
    
    return (
        <Fragment>
            <Board />
        </Fragment>
    )
})

export default NotesBoard