import { useEffect, useState } from 'react';
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
    _id?: number;
    title: string;
    description: string;
    priority: number;
}

interface UpdateTaskDataPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdateTask: (task: Task | null) => Promise<void>;
  task: Task | null;
}

const UpdateTaskDataPopup = ({ isOpen, onClose, onUpdateTask, task}: UpdateTaskDataPopupProps) => {
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [priority, setPriority] = useState(task?.priority?.toString() || "1");
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setPriority(task.priority?.toString());
    }
  }, [task]);

  const handleUpdateTask = async () => {
    if (!validateForm()) 
        return;

    if(title == null || description == null)
        return;

    const updatedTask: Task | null = {
        _id: task?._id,
        title,
        description,
        priority: Number(priority)
    };
    onUpdateTask(updatedTask);
    resetForm(updatedTask);
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

  const resetForm = (task: Task | null) => {

    if(task == null)
        return;

    setTitle(task.title);
    setDescription(task.description);
    setPriority(task.priority.toString());
    setTitleError("");
    setDescriptionError("");
  };

  const handleClose = () => {
    if(task)
        resetForm(task);
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
          <Button colorScheme="blue" mr={3} onClick={handleUpdateTask}>
            Update
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UpdateTaskDataPopup;
