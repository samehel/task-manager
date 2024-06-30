import { Flex } from "@chakra-ui/react";
import ConnectionError from "./Errors/ConnectionError";
import { useEffect, useState } from "react";
import LoadingPage from "./Errors/Loading";
import Header from "./Components/Header";
import TaskList from "./Components/TaskList";
import { getAllTasks } from "./Controller/CRUD";

interface Task {
  _id: string;
  title: string;
  description: string;
  priority: number;
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

    if(isDBServerOnline === true) {
      const fetchTasks = async() => {
        try {
          const fetchedTasks = await getAllTasks();
          setTasks(fetchedTasks);
        } catch (e) {
          console.error('Failed to fetch tasks: ', e);
        }
      }
      fetchTasks();
    }
  }, []);
    
  if(isDBServerOnline == null) 
    return <LoadingPage />
  else if (isDBServerOnline === false) 
    return <ConnectionError />


  return (
    <Flex>
      <Header />
      <TaskList tasks={tasks}/>
    </Flex>
  )
}

export default App;
