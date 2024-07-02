import { Box, Flex, Text } from "@chakra-ui/react";
import theme from "../assets/theme";
import { useState } from "react";

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

const TaskManagerStats = ({ tasks, refreshTaskList }: TaskListProps) => {
    const [totalTasks, setTotalTasks] = useState<Number>(0);
    const [totalLTasks, setTotalLTasks] = useState<Number>(0);
    const [totalMTasks, setTotalMTasks] = useState<Number>(0);
    const [totalHTasks, setTotalHTasks] = useState<Number>(0);




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
                <Text
                    fontFamily={theme.fonts.text}
                    fontSize="xx-large"
                    textAlign="center"
                    flex="1"
                >
                    Statistics
                </Text>
            </Flex>
        </Box>
    )
}

export default TaskManagerStats