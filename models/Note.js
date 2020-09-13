const mongoose = require('mongoose')


const itemSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: true
    },
    isChecked: {
        type: Boolean,
        default: false
    }
}, { timestamps: false });
const Item = mongoose.models.items || mongoose.model('items', itemSchema);




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
module.exports = Note;