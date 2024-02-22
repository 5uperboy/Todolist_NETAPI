import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Text,
    useToast,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import PropTypes from "prop-types";
  
  const AddTaskModal = ({ isOpen, onClose, onAdd }) => {
    AddTaskModal.propTypes = {
      isOpen: PropTypes.bool.isRequired,
      onClose: PropTypes.func.isRequired,
      onAdd: PropTypes.func.isRequired,
    };
  
    const [name, setText] = useState("");
    const [description, setDescription] = useState("");
    const [isComplete, setReminder] = useState(false);
    const [error, setError] = useState("");
  
    const toast = useToast();
  
    const onSubmit = (e) => {
      e.preventDefault();
  
      if (!name.trim()) {
        setError("Please add a task");
        return;
      }
      const dateModified = new Date();
      onAdd({ name, description, isComplete, dateModified });
      onClose();
  
      setText("");
      setDescription("");
      setReminder(false);
      setError("");
    };
  
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="30px">
          <ModalHeader
            bg="#F4D35E"
            color="#0D3B66"
            fontWeight="bold"
            borderTopRadius="15px"
          >
            Add New Task
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form id="add-form" onSubmit={onSubmit}>
              <FormControl>
                <FormLabel htmlFor="taskName">Task Name</FormLabel>
                <Input
                  isRequired
                  border="#BCBCBC 1px solid"
                  type="text"
                  id="taskName"
                  value={name}
                  onChange={(e) => setText(e.target.value)}
                />
                {error && <Text color="red">*{error}</Text>}
                <FormLabel mt={4} htmlFor="taskDescription">
                  Description
                </FormLabel>
                <Textarea
                  id="taskDescription"
                  border="#BCBCBC 1px solid"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormControl>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              type="submit"
              colorScheme="green"
              form="add-form"
              onClick={() =>
                toast({
                  title: "Task Added Successfully!",
                  description: "New Task has been added to the list.",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                })
              }
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  
  export default AddTaskModal;