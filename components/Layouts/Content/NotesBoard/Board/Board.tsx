import React, { useState } from 'react'
import styles from './Board.module.scss';
import Icon from 'react-icons-kit';
import { stickyNote } from 'react-icons-kit/fa/stickyNote'
import { ic_edit } from 'react-icons-kit/md/ic_edit'
import NewNote from './NewNote/NewNote'
import { observer } from 'mobx-react-lite';
import { useContext } from 'react'
import Note from '../../../../UI/Note/Note';
import Alert from '../../../../UI/Alert/Alert'
import { CircularProgress, Button } from '@material-ui/core'
import NoteStore from '../../../../../stores/notesStore'
import Link from 'next/link';


const Board = observer(() => {
    const noteStore = useContext(NoteStore);

    const notes = noteStore.notes.length > 0 ? noteStore.notes.map(note => {
        return (<Note key={note._id} _id={note._id} name={note.name} createdAt={note.createdAt} updatedAt={note.updatedAt} itemsList={note.itemsList} />);
    }) : noteStore.fetchIsLoading ? <CircularProgress style={{ margin: '0 auto', color: '#7499a9' }} size={100} /> : null;

    return (
        <div className={styles.board}>
            <Button variant='outlined' style={{ color: '#205c80', border: '#205c80' }}><Link href='/'><a>Back to home page</a></Link></Button>
            <div className={styles.titles}>
                <h1 className={styles.title}>Notes board </h1>
                <h3 className={styles.subtitle}>Let's create, delete and edit yours Notes</h3>
                <NewNote />
            </div>

            {notes ? <div className={styles.notes}>
                {notes}
            </div> : <Alert severity={'info'}><div style={{color:'#205c80', fontSize:'1.2rem'}}>Create your first Note</div></Alert>}

            <div className={styles.icons}>
                <Icon className={styles.note} icon={stickyNote} />
                <Icon className={styles.edit} icon={ic_edit} />
            </div>

        </div>
    )
});

export default Board

