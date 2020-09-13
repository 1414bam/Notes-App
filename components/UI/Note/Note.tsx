import React from 'react'
import styles from './Note.module.scss';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react'
import moment from 'moment'
import NoteStore from '../../../stores/notesStore'
import Icon from 'react-icons-kit';
import {
    ic_delete,
    ic_add_box,
    ic_edit
}
    from 'react-icons-kit/md'
import { Item } from '../Item/Item';
import Swal from 'sweetalert2'

const Note = (props) => {
    const noteStore = useContext(NoteStore);

    const onDeleteEvent = async (noteId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this note file!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(async (result) => {
            if (result.value) {
                await noteStore.deleteNote(noteId);
                await noteStore.fetchNotes();

                Swal.fire(
                    'Deleted!',
                    'Your note file has been deleted.',
                    'success'
                )
            }
        })
    }


    const itemsList = props.itemsList ? props.itemsList.map((item) => {
        return (<Item key={item._id} text={item.text} isChecked={item.isChecked} />);
    }) : null;

    return (
        <div className={styles.note}>
            <div className={styles.note_box}>
                <h3 className={styles.name}><span><span>Name: </span>{props.name}</span></h3>
                <div className={styles.createdAt}><span><Icon style={{ marginRight: '1rem', marginBottom: '.5rem' }} size={20} icon={ic_add_box} /><span>Created at: </span> {moment(props.createdAt).format('lll')}</span></div>
                <div className={styles.updatedAt}><span><Icon style={{ marginRight: '1rem', marginBottom: '.5rem' }} size={20} icon={ic_edit} /><span>Updated at: </span> {moment(props.updatedAt).format('lll')}</span></div>
                {itemsList}
            </div>

            <div onClick={() => onDeleteEvent(props._id)} className={styles.note__icon__delete}><Icon size={30} icon={ic_delete} /></div>
        </div>
    )
}

export default (observer(Note));
