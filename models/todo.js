import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    dueByDate: {
        type: String,
        required: false
    },
    createdOn: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false
    },
    isActive: {
        type: Boolean,
        required: false,
        default: true
    },
    userName: {
        type: String,
        required: true
    }

})

export default mongoose.model('Todo', todoSchema)