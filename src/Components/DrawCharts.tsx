import { Text, Box, Flex } from "@chakra-ui/react";
import { PieChart, Pie, LineChart, Line, AreaChart, Area, CartesianGrid, Legend, Tooltip, XAxis, YAxis, Cell } from "recharts";
import theme from "../assets/theme";

interface Task {
  _id: number;
  title: string;
  description: string;
  priority: number;
  isCompleted: boolean;
  dueDate: Date;
}

interface Stats {
  totalTasks: number,
  totalLTasks: number,
  totalMTasks: number,
  totalHTasks: number,
  completedTasks: number,
  uncompletedTasks: number,
  overdueTasks: number,
  nearestTask: Task | null
}

interface DrawChartProps {
    stats: Stats | null; 
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const DrawCharts = ({ stats }: DrawChartProps) => {
  if (!stats) {
    return (
        <Box>
            <Text fontFamily={theme.fonts.text} fontSize="xx-large" alignContent="center">No statistics available.</Text>
        </Box>
    );
  }

  const pieData = [
    { name: 'Completed Tasks', value: stats.completedTasks },
    { name: 'Uncompleted Tasks', value: stats.uncompletedTasks },
    { name: 'Overdue Tasks', value: stats.overdueTasks },
  ];

  const lineData = [
    { name: 'Total Tasks', value: stats.totalTasks },
    { name: 'High Priority Tasks', value: stats.totalHTasks },
    { name: 'Medium Priority Tasks', value: stats.totalMTasks },
    { name: 'Low Priority Tasks', value: stats.totalLTasks },
  ];

  const areaData = [
    { name: 'Completed Tasks', value: stats.completedTasks },
    { name: 'Uncompleted Tasks', value: stats.uncompletedTasks },
    { name: 'Overdue Tasks', value: stats.overdueTasks },
  ];

  return (
    <Box
      mt="3rem"
      mr="1rem"
      ml="1rem"
      p="4"
      bgGradient="linear-gradient(to bottom right, #fff9ef, #fff5ff)"
      boxShadow="lg"
      backdropFilter="blur(10px)"
      borderRadius="xl"
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Text fontSize="xx-large" fontFamily={theme.fonts.text} mb={5} textAlign="center">Visual Representation of Statistics</Text>
      <Flex direction="row" alignItems="center" justifyContent="space-around" flexWrap="wrap">
        <Box
          border="1px solid #000000"
          borderRadius="md"
          p={4}
          m={2}
          boxShadow="base"
        >
          <PieChart width={400} height={400}>
            <Pie
              data={pieData}
              cx={200}
              cy={200}
              labelLine={false}
              label
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </Box>
        <Box
          border="1px solid #000000"
          borderRadius="md"
          p={4}
          m={2}
          boxShadow="base"
        >
          <LineChart width={600} height={400} data={lineData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </Box>
        <Box
          border="1px solid #000000"
          borderRadius="md"
          p={4}
          m={2}
          boxShadow="base"
        >
          <AreaChart width={600} height={400} data={areaData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </Box>
      </Flex>
    </Box>
  );
}

export default DrawCharts;
