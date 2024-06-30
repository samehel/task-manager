import { Box, Button, Flex, IconButton, Text } from "@chakra-ui/react"
import { AiOutlineDelete, AiOutlineEdit, AiOutlinePlus } from "react-icons/ai"
import theme from "../assets/theme"
import { useState } from "react";
import AddTaskPopup from "./AddTaskPopup";
import { createTask, deleteTask } from "../Controller/CRUD";

interface Task {
    _id?: number;
    title: string;
    description: string;
    priority: number;
}
  
interface TaskListProps {
    tasks: Task[];
    refreshTaskList: () => void;
}

const TaskList = ({ tasks, refreshTaskList }: TaskListProps) => {
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    }

    const handleCreateTask = async (newTask: Task) => {
        try {
            await createTask(newTask);
            refreshTaskList()
        } catch(e) {
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
            height="100%"
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
                    onClick={togglePopup}
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

            <AddTaskPopup isOpen={isPopupOpen} onClose={togglePopup} onCreateTask={handleCreateTask} />
        </Box>
    )
    }

export default TaskList