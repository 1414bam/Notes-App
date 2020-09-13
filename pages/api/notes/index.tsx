import dbConnect from '../../../general/dbConnetion';
import Note from '../../../models/Note';
dbConnect();


export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case Methods.GET:
            {
                try {
                    const notes = await Note.find({});
                    res.status(200).json(notes);
                } catch (error) {
                    res.status(400).json({ success: false });
                }

                break;
            }
        case Methods.POST:
            {
                const NOTES_LIMIT = 10;
                try {
                    const notesCount = await Note.find({}).count();
                    if (notesCount >= NOTES_LIMIT) {
                        res.status(400).json({ success: false });
                    } else {
                        const newNote = new Note({ ...req.body });
                        const created = await newNote.save();
                        res.status(200).json(created);
                    }
                } catch (error) {
                    console.log('Something went wrong when try POST note', error);
                    res.status(400).json({ success: false });
                }

                break;
            }
        case Methods.PUT:
            {
                try {
                    const currNote = await Note.findById(req.query.note_id);
                    const itemToUpdate = currNote.itemsList.id(req.query.item_id);
                    if (!itemToUpdate) { res.status(400).json({ success: false }) }

                    itemToUpdate.set({ isChecked: req.body.isChecked });
                    const updated = await currNote.save();
                    res.status(200).json(updated);
                } catch (error) {
                    console.log('Something went wrong when try PUT note', error);
                    res.status(400).json({ success: false });
                }

                break;
            }
        case Methods.DELETE:
            {
                try {
                    const deleted = await Note.findOneAndDelete({
                        _id: req.query._id
                    });

                    if (!deleted) { res.status(400).json({ success: false }) }
                    res.status(200).json(deleted);
                } catch (error) {
                    console.log('Something went wrong when try DELETE note', error);
                    res.status(400).json({ success: false });
                }

                break;
            }
        default:
            break;
    }
}


enum Methods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}