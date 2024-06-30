import React, { useState } from 'react';
import { 
    Modal, 
    ModalOverlay, 
    ModalContent, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Button, 
    FormControl, 
    FormLabel, 
    Input,
    Select,
    FormErrorMessage
} from "@chakra-ui/react";

interface Task {
    title: string;
    description: string;
    priority: number;
}

interface AddTaskPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateTask: (newTask: Task) => void;
}

const AddTaskPopup: React.FC<AddTaskPopupProps> = ({ isOpen, onClose, onCreateTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("1");
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const handleCreateTask = async () => {
    if (!validateForm()) {
        return;
    }

    const newTask: Task = {
        title,
        description,
        priority: Number(priority)
    };
    onCreateTask(newTask);
    resetForm();
    onClose();
  };

  const validateForm = () => {
    let isValid = true;
    if (!title) {
      setTitleError("Title is required");
      isValid = false;
    } else {
      setTitleError("");
    }

    if (!description) {
      setDescriptionError("Description is required");
      isValid = false;
    } else {
      setDescriptionError("");
    }

    return isValid;
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setPriority("1");
    setTitleError("");
    setDescriptionError("");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add New Task</ModalHeader>
        <ModalBody>
          <FormControl isInvalid={!!titleError}>
            <FormLabel>Title</FormLabel>
            <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <FormErrorMessage>{titleError}</FormErrorMessage>
          </FormControl>
          <FormControl mt={4} isInvalid={!!descriptionError}> 
            <FormLabel>Description</FormLabel>
            <Input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            <FormErrorMessage>{descriptionError}</FormErrorMessage>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Priority</FormLabel>
                <Select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="1">Low</option>
                    <option value="2">Medium</option>
                    <option value="3">High</option>
                </Select>    
            </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleCreateTask}>
            Create
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddTaskPopup;
