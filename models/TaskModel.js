let mongoose = require('mongoose');

let taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

let TaskModel = mongoose.model('Task', taskSchema);

module.exports = TaskModel;