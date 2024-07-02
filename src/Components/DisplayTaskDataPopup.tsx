import { 
    Modal, 
    ModalOverlay, 
    ModalContent, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Button, 
    TagLabel,
    Tag,
    Box
} from "@chakra-ui/react";

interface Task {
    title: string;
    description: string;
    priority: number;
    isCompleted: boolean;
    dueDate: Date | string;
}

interface DisplayTaskPopupProps {
  isOpen: boolean;
  onClose: () => void;
  task: Task | null;
}

const DisplayTaskDataPopup = ({ isOpen, onClose, task }: DisplayTaskPopupProps) => {
  const dueDate = task?.dueDate ? new Date(task.dueDate) : null;
  const dueDateString = dueDate && !isNaN(dueDate.getTime()) ? dueDate.toDateString() : "";

  
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Task Info</ModalHeader>
        <ModalBody>
          <Tag>
            <TagLabel>Title</TagLabel>
          </Tag>
          <Box 
              padding="8px"
              borderWidth="1px"
              borderRadius="md"
              borderColor="gray.200"
              backgroundColor="gray.50"
              height="40px"
              display="flex"
              alignItems="center"
              mt={3}
              mb={3}
              >
                {task?.title}
            </Box>
          <Tag>
            <TagLabel>Description</TagLabel>
          </Tag>
            <Box 
              padding="8px"
              borderWidth="1px"
              borderRadius="md"
              borderColor="gray.200"
              backgroundColor="gray.50"
              height="40px"
              display="flex"
              alignItems="center"
              mt={3}
              mb={3}
              >
                {task?.description}
            </Box>
          <Tag>
            <TagLabel>Priority</TagLabel>
          </Tag>
          <Box 
              padding="8px"
              borderWidth="1px"
              borderRadius="md"
              borderColor="gray.200"
              backgroundColor="gray.50"
              height="40px"
              display="flex"
              alignItems="center"
              mt={3}
              mb={3}
              >
                {task?.priority === 1 ? "Low" : task?.priority === 2 ? "Medium" : "High"}
            </Box>
          <Tag>
            <TagLabel>Due Date</TagLabel>
          </Tag>
          <Box 
              padding="8px"
              borderWidth="1px"
              borderRadius="md"
              borderColor="gray.200"
              backgroundColor="gray.50"
              height="40px"
              display="flex"
              alignItems="center"
              mt={3}
              mb={3}
              >
                {dueDateString}
            </Box>
          <Tag>
            <TagLabel>Completed?</TagLabel>
          </Tag>
          <Box 
              padding="8px"
              borderWidth="1px"
              borderRadius="md"
              borderColor="gray.200"
              backgroundColor="gray.50"
              height="40px"
              display="flex"
              alignItems="center"
              mt={3}
              mb={3}
              >
                {task?.isCompleted === true ? 'Yes' : 'No'}
            </Box>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default DisplayTaskDataPopup