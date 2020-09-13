import React, { useContext } from 'react'
import styles from './NewNote.module.scss';
import { observer } from 'mobx-react-lite';
import NoteStore from '../../../../../../stores/notesStore'
import * as Core from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { plus } from 'react-icons-kit/icomoon/plus'
import Icon from 'react-icons-kit';
import { ic_send, ic_clear } from 'react-icons-kit/md/'
import { Item } from '../../../../../UI/Item/Item';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';


const NewNote = (props) => {
    const noteStore = useContext(NoteStore);

    const { register, handleSubmit, getValues } = useForm();
    const [checked, setChecked] = React.useState(true);
    const [name, setName] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    const [items, setItems] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [newItemOpen, setNewItemOpen] = React.useState(false);
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                '& > *': {
                    margin: '0',
                    width: '35ch',
                }
            },
        }),
    );
    const classes = useStyles();


    const addItem = (data) => {
        if (data.text) {
            setItems(prevState => {
                return [...prevState, data];
            });
            setNewItemOpen(false);
        } else {
            alert('Item text cannot be empty!')
        }
    }

    const createNewNote = async () => {
        const note = { name: name, itemsList: items }
        await noteStore.postNote(note);
        await noteStore.fetchNotes();
        handleClose();
        if (noteStore.postStatus === 'error') {
            const MAX_NOTES = 10;
            const LIMIT_ERROR = 'You can create up to 10 notes only, delete some notes and try again';
            const EMPTY_FIELD = 'The Name filed cannot be empty, try again';
            let errorMessage = (noteStore.notes.length >= MAX_NOTES) ? LIMIT_ERROR : EMPTY_FIELD;
            Swal.fire("The action failed!", errorMessage, 'error');
        } else {
            Swal.fire("Created!", 'The action was successful', 'success');
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setName(null);
        setItems([]);
        setNewItemOpen(false)
    };


    const itemsList = items.map(item => {
        return (<Item key={item.text} text={item.text} isChecked={item.isChecked} />);
    })

    const descriptionElementRef = React.useRef<HTMLElement>(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <div>
            <Core.Button onClick={() => handleClickOpen()}>Create new Note</Core.Button>
            <Core.Dialog
                open={open}
                onClose={handleClose}
                fullWidth={true}
                maxWidth={'sm'}
                scroll={'body'}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <Core.DialogTitle id="scroll-dialog-title">Create new Note</Core.DialogTitle>
                <Core.DialogContent dividers={true}>
                    <div className={classes.root}>
                        <div className={styles.input}>
                            <Core.TextField onChange={(e) => setName(e.target.value)} value={name} name={'name'} id="outlined-basic" label="Name" variant='standard' />
                        </div>
                        <div className={styles.items}>
                            <div className={styles.itemsList} >{itemsList}</div>
                            <div className={styles.items_commands}>
                                <div onClick={() => setNewItemOpen(!newItemOpen)} className={styles.item_button}>
                                    <Icon className={styles.icon_plus} icon={newItemOpen ? ic_clear : plus} />{newItemOpen ? 'Cancel' : 'Add item to Note'}</div>
                                {newItemOpen ? <form onSubmit={handleSubmit(addItem)} className={styles.itemForm}>
                                    <Core.TextField inputRef={register} name='text' id="outlined-basic" label="Text" variant='standard' />
                                    <Core.Checkbox
                                        inputRef={register}
                                        name='isChecked'
                                        style={{ marginBottom: '-2rem' }}
                                        defaultChecked
                                        color="primary"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                    <button type='submit' className={styles.item_button}> Send  <Icon className={styles.icon_send} icon={ic_send} /></button>
                                </form> : null}
                            </div>
                        </div>
                    </div>
                </Core.DialogContent>
                <Core.DialogActions>
                    <Core.Button onClick={handleClose} color="primary">
                        Cancel
          </Core.Button>
                    <Core.Button onClick={() => createNewNote()} color="primary">
                        Craete Note
          </Core.Button>
                </Core.DialogActions>
            </Core.Dialog>
        </div>
    );
}


export default (observer(NewNote));