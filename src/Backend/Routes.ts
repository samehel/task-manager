import express from 'express';
import TaskDataModel from './Models/Task';

const router = express.Router();

// Retrieve All
router.get('/api/get_all_tasks', async (req, res) => {
    try {
        const tasks = await TaskDataModel.find();
        res.json(tasks);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: `Error retrieving all data: ${e} `});
    }
});

// Create task
router.post('/api/create_task', async (req, res) => {
    try {
        const newTask = await TaskDataModel.create(req.body);
        res.status(201).json(newTask);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: `Error creating new task: ${e}`})
    }
});

// Delete task
router.delete('/api/delete_task/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const deletedTask = await TaskDataModel.findByIdAndDelete(id);
        if(!deletedTask)
            return res.status(404).json({ message: `Task with ID ${id} was not found.`});
        res.status(200).json({ message: `Task with ID ${id} was deleted successfully`});
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: `Error deleting task with ID ${id}`});
    }
})



export default router;