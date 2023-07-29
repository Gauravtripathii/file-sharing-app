import mongoose, { mongo } from "mongoose";

const fileSchema = mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    downloadContent: {
        type: Number,
        required: true,
        default: 0
    }
})

const File = mongoose.model('file', fileSchema);
export default File;