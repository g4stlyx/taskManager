const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"you must provide a name"],
        trim:true, // removes the white spaces
        minlength: [2, "name must be at least 2 characters"],
        maxlength: [20, "name must be less than 20 characters"],
        unique: [true,"name must be unique"],
    },
    completed: {
        type: Boolean,
        default: false,
    },
})



module.exports = mongoose.model("Task", TaskSchema)

