/* eslint-disable react/prop-types */
import { useState } from "react";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { GoKebabHorizontal } from "react-icons/go";
import { FaTrashAlt, FaEdit, FaEye } from "react-icons/fa";
import { format } from "date-fns";
import EditTaskModal from "./EditTaskModal";

// eslint-disable-next-line react/prop-types
const Task = ({ task, onDelete, onToggle, onEdit }) => {
  const [showEditTaskModal, setShowEditTaskModal] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

  const handleViewTask = () => {
    setIsEditable(false);
    setShowEditTaskModal(true);
  };

  const handleEditTask = () => {
    setIsEditable(true);
    setShowEditTaskModal(true);
  };

  const handleCloseEditTaskModal = () => {
    setShowEditTaskModal(false);
  };

  return (
    <Card key={task.id} bg="#FAF0CA" borderEndStartRadius="40px" shadow="md">
      <CardHeader>
        <HStack>
          <Heading size="md" color="#0D3B66">
            {task.name}
          </Heading>
          <Spacer />
          <Text style={{ color: task.isComplete ? "green" : "orange" }}>
            {task.isComplete ? "Complete" : "Ongoing"}
          </Text>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<GoKebabHorizontal />}
              variant="ghost"
            ></MenuButton>
            <MenuList>
              <MenuItem icon={<FaEye />} onClick={handleViewTask}>
                View Task
              </MenuItem>
              <MenuItem icon={<FaEdit />} onClick={handleEditTask}>
                Edit
              </MenuItem>
              <MenuItem
                icon={<FaTrashAlt />}
                color="red"
                onClick={() => onDelete(task.id)}
              >
                Delete
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </CardHeader>
      <CardBody>
        <Text fontWeight="500" fontSize="md" noOfLines={[1, 2, 3]}>
          {task.description}
        </Text>
      </CardBody>
      <CardFooter justifyContent="end">
        <Text as="sub">{format(new Date(task.dateModified), "PPpp")}</Text>
      </CardFooter>
      {showEditTaskModal ? (
        <EditTaskModal
          task={task}
          onEdit={onEdit}
          isOpen={showEditTaskModal}
          onClose={handleCloseEditTaskModal}
          isEditable={isEditable}
        />
      ) : null}
    </Card>
  );
};

export default Task;
