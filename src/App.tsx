import { Flex } from "@chakra-ui/react";
import ConnectionError from "./Errors/ConnectionError";
import { useEffect, useState } from "react";
import LoadingPage from "./Components/Loading";
import Header from "./Components/Header";
import TaskList from "./Components/TaskList";
import { getAllTasks } from "./Controller/CRUD";
import TaskManagerStats from "./Components/TaskManagerStats";

interface Task {
  _id: number;
  title: string;
  description: string;
  priority: number;
  isCompleted: boolean;
  dueDate: Date;
}

function App() {
  const [isDBServerOnline, setIsDBServerOnline] = useState<boolean | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3002', true);
    xhr.onreadystatechange = () => {
      if(xhr.readyState === 4) {
        if(xhr.status === 200) 
          setIsDBServerOnline(true);
        else
          setIsDBServerOnline(false);
      }
    };

    xhr.onerror = () => {
      setIsDBServerOnline(false);
    }

    xhr.send();
  }, []);

  useEffect(() => {
    const fetchTasks = async () => {
        try {
            const fetchedTasks = await getAllTasks();
            setTasks(fetchedTasks);
        } catch (error) {
            console.error('Failed to fetch tasks:', error);
        }
    };

    if (isDBServerOnline) {
        fetchTasks();
    }
  }, [isDBServerOnline]);
    
  if(isDBServerOnline == null) 
    return <LoadingPage />
  else if (isDBServerOnline === false) 
    return <ConnectionError />


  const refreshTaskList = async () => {
    try {
        const fetchedTasks = await getAllTasks();
        setTasks(fetchedTasks)
        } catch (e) {
        console.error('Failed to fetch tasks: ', e);
        }
    }

  return (
    <Flex>
      <Header />
      <TaskList tasks={tasks} refreshTaskList={refreshTaskList}/>
      <TaskManagerStats tasks={tasks} refreshTaskList={refreshTaskList}/>
    </Flex>
  )
}

export default App;
