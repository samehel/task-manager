import { Flex, Text } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import ConnectionError from "./Errors/ConnectionError";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Flex><Text>Hello World!</Text></Flex>} />
      <Route path="/connection-error" element={<ConnectionError />} />
    </Routes>
  )
}

export default App;
