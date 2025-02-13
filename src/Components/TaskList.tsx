import { Box, Button, Flex, IconButton, Text } from "@chakra-ui/react"
import { AiOutlineDelete, AiOutlineEdit, AiOutlinePlus } from "react-icons/ai"
import theme from "../assets/theme"
import { useState } from "react";
import AddTaskPopup from "./AddTaskPopup";
import { createTask, deleteTask, updateTask } from "../Controller/CRUD";
import DisplayTaskDataPopup from "./DisplayTaskDataPopup";
import UpdateTaskDataPopup from "./UpdateTaskDataPopup";

interface Task {
    _id?: number;
    title: string;
    description: string;
    priority: number;
    isCompleted: boolean;
    dueDate: Date | string;
}
  
interface TaskListProps {
    tasks: Task[];
    refreshTaskList: () => void;
}

const TaskList = ({ tasks, refreshTaskList }: TaskListProps) => {
    const [isAddTaskPopupOpen, setIsAddTaskPopupOpen] = useState<boolean>(false);
    const [isViewTaskPopupOpen, setIsViewTaskPopupOpen] = useState<boolean>(false);
    const [isUpdateTaskPopupOpen, setIsUpdateTaskPopupOpen] = useState<boolean>(false);
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);

    const toggleAddTaskPopup = () => {
        setIsAddTaskPopupOpen(!isAddTaskPopupOpen);
    }

    const toggleViewTaskPopup = (task?: Task) => {
        setIsViewTaskPopupOpen(!isViewTaskPopupOpen);
        setSelectedTask(task || null);
    }

    const toggleUpdateTaskPopup = (task?: Task) => {
        setIsUpdateTaskPopupOpen(!isUpdateTaskPopupOpen);
        setSelectedTask(task || null);
    }

    const handleCreateTask = async (newTask: Task) => {
        try {
            await createTask(newTask);
            refreshTaskList();
        } catch(e) {
            console.error(e);
            throw e;
        }
    }

    const handleUpdateTask = async(updatedTask: Task | null) => {
        if(updatedTask === null)
            return;

        try {
            await updateTask(updatedTask);
            refreshTaskList();
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

    const handleDeleteTask = async(id: number | undefined) => {
        if(id === undefined)
            return;

        try {
            await deleteTask(id);
            refreshTaskList();
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

    return (
        <Box 
            mt="7rem"
            ml="1rem"
            p="4"
            bgGradient="linear-gradient(to bottom right, #fff9ef, #fff5ff)"
            boxShadow="lg"
            backdropFilter="blur(10px)"
            borderRadius="xl"
            height="377px"
            overflowY="auto"
            width="calc(50% - 1rem)"
            display="flex"
            flexDirection="column"
            >

            <Flex justifyContent="right" alignItems="center" mb="4">
                <Text
                    fontFamily={theme.fonts.text}
                    fontSize="xx-large"
                    textAlign="center"
                    flex="1"
                >
                    My Tasks
                </Text>
                <IconButton 
                    aria-label="Add Task"
                    icon={<AiOutlinePlus />}
                    variant="solid"
                    color="indigo"
                    bg="rgba(255, 155, 255, 0.5)"
                    _hover={{ bg: 'rgba(155, 155, 255, 1.8)' }}
                    onClick={toggleAddTaskPopup}
                />
            </Flex>
            {tasks.map((task) => (
                <Flex
                    key={task._id}
                    justifyContent="space-between"
                    alignItems="center"
                    mb="2"
                >
                    <Button
                        fontFamily={theme.fonts.text}
                        fontSize="large"
                        fontWeight="0"
                        bg="transparent"
                        flex="1"
                        whiteSpace="nowrap"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        mr="2"
                        onClick={() => toggleViewTaskPopup(task)}
                    >
                        {task.title}
                    </Button>
                    <Flex justifyContent="center">
                        <IconButton
                            aria-label="Edit Task"
                            icon={<AiOutlineEdit />}
                            variant="solid"
                            color="indigo"
                            mr="2"
                            bg="rgba(255, 155, 255, 0.5)"
                            _hover={{ bg: 'rgba(155, 155, 255, 1.8)' }}
                            onClick={() => toggleUpdateTaskPopup(task)}
                        />
                        <IconButton 
                            aria-label="Delete Task"
                            icon={<AiOutlineDelete />}
                            variant="solid"
                            color="indigo"
                            bg="rgba(255, 155, 255, 0.5)"
                            _hover={{ bg: 'rgba(155, 155, 255, 1.8)' }}
                            onClick={() => handleDeleteTask(task._id)}
                        />
                    </Flex>
                </Flex>
            ))}

            <AddTaskPopup isOpen={isAddTaskPopupOpen} onClose={toggleAddTaskPopup} onCreateTask={handleCreateTask} />
            <DisplayTaskDataPopup isOpen={isViewTaskPopupOpen} onClose={toggleViewTaskPopup} task={selectedTask}/>
            <UpdateTaskDataPopup isOpen={isUpdateTaskPopupOpen} onClose={toggleUpdateTaskPopup} onUpdateTask={handleUpdateTask} task={selectedTask}/>
        </Box>
    )
    }

export default TaskList