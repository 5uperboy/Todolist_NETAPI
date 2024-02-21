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
  Text,
  Textarea,
  useToast,
  Switch,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import PropTypes from "prop-types";

const EditTaskModalTest = ({ isOpen, onClose, onEdit }) => {
  EditTaskModalTest.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
  };

  const [name, setText] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [isEditable, setIsEditable] = useState(false);

  const toast = useToast();

  const toggleEditable = () => {
    setIsEditable(!isEditable);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Please add a task");
      return;
    }
    const dateModified = new Date();
    onEdit({ name, description, dateModified });
    onClose();
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
          <form id="edit-form" onSubmit={onSubmit}>
            <FormControl>
              <Stack direction="row" spacing={0} justifyContent="end">
                <FormLabel htmlFor="edit-switch" fontSize={18}>
                  EDIT
                </FormLabel>
                <Switch
                  id="edit-switch"
                  size="lg"
                  isChecked={isEditable}
                  onChange={toggleEditable}
                ></Switch>
              </Stack>
              <FormLabel htmlFor="taskName">Task Name</FormLabel>
              <Input
                disabled={!isEditable}
                id="taskName"
                border="#BCBCBC 1px solid"
                type="text"
                value={name}
                onChange={(e) => setText(e.target.value)}
              />
              {error && <Text color="red">*{error}</Text>}
              <FormLabel mt={4} htmlFor="taskDesc">
                Description
              </FormLabel>
              <Textarea
                disabled={!isEditable}
                id="taskDesc"
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
            form="edit-form"
            onClick={() =>
              toast({
                title: "Task Edited Successfully!",
                description: "A task has been updated!",
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

export default EditTaskModalTest;
