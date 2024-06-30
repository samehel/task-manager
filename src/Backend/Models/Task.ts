import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: { type: String },
    priority: { type: Number, default: 1 }
});

const TaskDataModel = mongoose.model('Task', taskSchema);
export default TaskDataModel;