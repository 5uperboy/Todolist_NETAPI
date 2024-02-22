/* eslint-disable react/prop-types */
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
    useToast,
    Switch,
    Stack,
  } from "@chakra-ui/react";
  import { useState } from "react";
  
  const EditTaskModal = ({ task, onEdit, isOpen, onClose, isEditable }) => {
    const [name, setText] = useState(task.name);
    const [description, setDescription] = useState(task.description);
    // const [error, setError] = useState("");
    const [switchState, setSwitchState] = useState(isEditable);
  
    const toast = useToast();
  
    const toggleEditable = () => {
      setSwitchState(!switchState);
    };
  
    const handleSave = () => {
      onEdit(task.id, {
        ...task,
        name: name,
        description: description,
        dateModified: new Date(),
      });
      onClose();
  
      toast({
        title: "Task Updated",
        description: "Task has been updated successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      })
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
            fontSize={25}
          >
            Task View
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <Stack direction="row" spacing={0} justifyContent="end">
                <FormLabel htmlFor="edit-switch" fontSize={18}>
                  EDIT
                </FormLabel>
                <Switch
                  id="edit-switch"
                  size="lg"
                  isChecked={switchState}
                  onChange={toggleEditable}
                ></Switch>
              </Stack>
              <FormLabel htmlFor="taskName">Task Name</FormLabel>
              <Input
                disabled={!switchState}
                id="taskName"
                border="#BCBCBC 1px solid"
                type="text"
                value={name}
                onChange={(e) => setText(e.target.value)}
              />
              {/* {error && <Text color="red">*{error}</Text>} */}
              <FormLabel mt={4} htmlFor="taskDesc">
                Description
              </FormLabel>
              <Textarea
                disabled={!switchState}
                id="taskDesc"
                border="#BCBCBC 1px solid"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="green" onClick={() => handleSave()}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  
  export default EditTaskModal;
  