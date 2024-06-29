import { Flex, Text } from "@chakra-ui/react";
import ConnectionError from "./Errors/ConnectionError";
import { useEffect, useState } from "react";
import LoadingPage from "./Errors/Loading";

function App() {
  const [isDBServerOnline, setIsDBServerOnline] = useState<boolean | null>(null);
  
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
  
  if(isDBServerOnline == null) 
    return <LoadingPage />
  else if (isDBServerOnline === false) 
    return <ConnectionError />
  
  return (
    <Flex>
      <Text>Successfully Connected</Text>
    </Flex>
  )
}

export default App;
