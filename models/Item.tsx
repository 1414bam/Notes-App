import mongoose from 'mongoose'

export const itemSchema = new mongoose.Schema({
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

export default Item;
