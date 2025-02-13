import axios from 'axios'

const dbHost = import.meta.env.VITE_DB_HOST
const dbPort = import.meta.env.VITE_SERVER_PORT

const GET_TASKS_URL = `http://${dbHost}:${dbPort}/api/get_all_tasks`;
const CREATE_TASK_URL = `http://${dbHost}:${dbPort}/api/create_task`;
const UPDATE_TASK_URL = `http://${dbHost}:${dbPort}/api/update_task`;
const DELETE_TASK_URL = `http://${dbHost}:${dbPort}/api/delete_task`;

interface TaskProp {
    _id?: number, 
    title: string, 
    description: string, 
    priority: number,
    isCompleted: boolean,
    dueDate: Date | string
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

export const createTask = async (Task: TaskProp) => {
    try {
        const res = await axios.post(CREATE_TASK_URL, Task);
        return res.data;
    } catch (e) {
        console.error('Error creating a task: ', e);
        throw e;
    }
}

export const updateTask = async(Task: TaskProp) => {
    try {
        const { _id, title, description, priority, isCompleted, dueDate } = Task;
        const res = await axios.put(`${UPDATE_TASK_URL}/${_id}`, { title, description, priority, isCompleted, dueDate });
        return res.data;
    } catch (e) {
        console.error('Error updating a task: ', e);
        throw e;
    }
}

export const deleteTask = async (id: number) => {
    try {
        const res = await axios.delete(`${DELETE_TASK_URL}/${id}`);
        return res.data;
    } catch (e) {
        console.error(`Error delete task with ID ${id}: `, e);
        throw e;
    }
}