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

router.post('/api/create_task', async (req, res) => {
    try {
        const newTask = await TaskDataModel.create(req.body);
        res.status(201).json(newTask);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: `Error creating new task: ${e}`})
    }
});

export default router;