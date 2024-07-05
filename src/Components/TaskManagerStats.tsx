import { Box, Flex, Text } from "@chakra-ui/react";
import theme from "../assets/theme";
import { useEffect } from "react";

interface Task {
    _id: number;
    title: string;
    description: string;
    priority: number;
    isCompleted: boolean;
    dueDate: Date;
}

interface stats {
    totalTasks: number,
    totalLTasks: number,
    totalMTasks: number,
    totalHTasks: number,
    completedTasks: number,
    uncompletedTasks: number,
    overdueTasks: number,
    nearestTask: Task | null
}

interface TaskListProps {
    tasks: Task[];
    setStats: (stats: stats) => void; 
}

const TaskManagerStats = ({ tasks, setStats }: TaskListProps) => {
    const totalTasks = tasks.length;
    const totalLTasks = tasks.filter(task => task.priority === 1).length;
    const totalMTasks = tasks.filter(task => task.priority === 2).length;
    const totalHTasks = tasks.filter(task => task.priority === 3).length;
    const completedTasks = tasks.filter(task => task.isCompleted === true).length;
    const uncompletedTasks = tasks.filter(task => task.isCompleted === false).length;
    const overdueTasks = tasks.filter(task => new Date(task.dueDate) < new Date()).length;
    const nearestTask = tasks.reduce((nearest: Task | null, task: Task) => {
        const taskDate = new Date(task.dueDate);
        if (taskDate > new Date() && (!nearest || taskDate < new Date(nearest.dueDate)))
          return task;
        else 
          return nearest;
    }, null);
      
    useEffect(() => {
        setStats({
            totalTasks,
            totalLTasks,
            totalMTasks,
            totalHTasks,
            completedTasks,
            uncompletedTasks,
            overdueTasks,
            nearestTask
        });
    }, [tasks])

    return (
        <Box 
            mt="7rem"
            mr="1rem"
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
                <Text fontFamily={theme.fonts.text} fontSize="xx-large" textAlign="center" flex="1">
                    Statistics
                </Text>
            </Flex>
            <Flex justifyContent="center" alignItems="center" mb="2">
                <Text fontFamily={theme.fonts.text} fontSize="large" fontWeight="bold" textAlign="center" mr="2">
                    Total Tasks:
                </Text>
                <Text fontFamily={theme.fonts.text} fontSize="large" textAlign="center">
                    {totalTasks}
                </Text>
            </Flex>
            <Flex justifyContent="center" alignItems="center" mb="2">
                <Text fontFamily={theme.fonts.text} fontSize="large" fontWeight="bold" textAlign="center" mr="2">
                    Low Priority Tasks:
                </Text>
                <Text fontFamily={theme.fonts.text} fontSize="large" textAlign="center">
                    {totalLTasks}
                </Text>
            </Flex>
            <Flex justifyContent="center" alignItems="center" mb="2">
                <Text fontFamily={theme.fonts.text} fontSize="large" fontWeight="bold" textAlign="center" mr="2">
                    Medium Priority Tasks:
                </Text>
                <Text fontFamily={theme.fonts.text} fontSize="large" textAlign="center">
                    {totalMTasks}
                </Text>
            </Flex>
            <Flex justifyContent="center" alignItems="center" mb="2">
                <Text fontFamily={theme.fonts.text} fontSize="large" fontWeight="bold" textAlign="center" mr="2">
                    High Priority Tasks:
                </Text>
                <Text fontFamily={theme.fonts.text} fontSize="large" textAlign="center">
                    {totalHTasks}
                </Text>
            </Flex>
            <Flex justifyContent="center" alignItems="center" mb="2">
                <Text fontFamily={theme.fonts.text} fontSize="large" fontWeight="bold" textAlign="center" mr="2">
                    Completed Tasks:
                </Text>
                <Text fontFamily={theme.fonts.text} fontSize="large" textAlign="center">
                    {completedTasks} {completedTasks > 0 ? '(' : ''}{completedTasks > 0 ? ((completedTasks/totalTasks) * 100).toFixed(0) : ""}{completedTasks > 0 ? '%' : ''}{completedTasks > 0 ? ')' : ''} 
                </Text>
            </Flex>
            <Flex justifyContent="center" alignItems="center" mb="2">
                <Text fontFamily={theme.fonts.text} fontSize="large" fontWeight="bold" textAlign="center" mr="2">
                    Uncompleted Tasks:
                </Text>
                <Text fontFamily={theme.fonts.text} fontSize="large" textAlign="center">
                    {uncompletedTasks}
                </Text>
            </Flex>
            <Flex justifyContent="center" alignItems="center" mb="2">
                <Text fontFamily={theme.fonts.text} fontSize="large" fontWeight="bold" textAlign="center" mr="2">
                    Overdue Tasks:
                </Text>
                <Text fontFamily={theme.fonts.text} fontSize="large" textAlign="center">
                    {overdueTasks}
                </Text>
            </Flex>
            <Flex justifyContent="center" alignItems="center" mb="2">
                <Text fontFamily={theme.fonts.text} fontSize="large" fontWeight="bold" textAlign="center" mr="2">
                    Nearest Task:
                </Text>
                <Text fontFamily={theme.fonts.text} fontSize="large" textAlign="center">
                    {nearestTask?.title} {nearestTask ? '(' : ''}{nearestTask?.dueDate ? new Date(nearestTask?.dueDate).toDateString() : ''}{nearestTask ? ')' : ''}
                </Text>
            </Flex>
        </Box>
    )
}

export default TaskManagerStats