import mongoose from 'mongoose'
import {itemSchema} from './Item'
const Item = require('./Item');

const noteSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        minlength: 2,
        required: true
    },
    itemsList: {
        type: [itemSchema],
        required: true
    }
}, { timestamps: true });


const Note = mongoose.models.notes || mongoose.model('notes', noteSchema);
export default Note;