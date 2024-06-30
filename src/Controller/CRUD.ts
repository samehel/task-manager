import axios from 'axios'

const GET_TASKS_URL = 'http://localhost:3002/api/get_all_tasks';
const CREATE_TASK_URL = 'http://localhost:3002/api/create_task';

interface TaskProp {
    Task: { id: number, title: string, description: string, priority: number}
}

export const getAllTasks = async () => {
    try {
        const res = await axios.get(GET_TASKS_URL);
        return res.data;
    } catch (e) {
        console.error('Error getting all tasks: ', e);
        throw e;
    }
}

export const createTask = async ({ Task }: TaskProp) => {
    try {
        const res = await axios.post(CREATE_TASK_URL, Task);
        return res.data;
    } catch (e) {
        console.error('Error creating a task: ', e);
        throw e;
    }
}
