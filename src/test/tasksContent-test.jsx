import {
  Box,
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
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { GoKebabHorizontal } from "react-icons/go";
import { FaTrashAlt, FaEdit, FaEye } from "react-icons/fa";
import { useState } from "react";
import { useTasks } from "../hooks/useTasks";
import { format } from "date-fns";
import EditTaskModalTest from "./editTaskModal-test";

const TasksContentTest = () => {
  const { tasks, deleteTask } = useTasks();
  const { editTask } = useTasks();

  const [showEditTaskModal, setShowEditTaskModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isEditable, setIsEditable] = useState(false);

  const handleViewTask = (task) => {
    setSelectedTask(task);
    setIsEditable(false);
    setShowEditTaskModal(true);
  };

  const handleEditTask = (task) => {
    setSelectedTask(task);
    setIsEditable(true);
    setShowEditTaskModal(true);
  };

  const handleCloseEditTaskModal = () => {
    setShowEditTaskModal(false);
  };

  // const task = {
  //   id: 1,
  //   name: "Task 1",
  //   description: "This is a description of task 1",
  //   isComplete: false,
  //   dateModified: new Date(),
  // };

  return (
    <Box m={6}>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        {tasks.map((task) => (
          <Card
            key={task.id}
            bg="#FAF0CA"
            borderEndStartRadius="40px"
            shadow="md"
          >
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
                    <MenuItem
                      icon={<FaEye />}
                      onClick={() => handleViewTask(task)}
                    >
                      View Task
                    </MenuItem>
                    <MenuItem
                      icon={<FaEdit />}
                      onClick={() => handleEditTask(task)}
                    >
                      Edit
                    </MenuItem>
                    <MenuItem
                      icon={<FaTrashAlt />}
                      color="red"
                      onClick={() => deleteTask(task.id)}
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
              <Text as="sub">
                {format(new Date(task.dateModified), "PPpp")}
              </Text>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
      <EditTaskModalTest
        onEdit={editTask}
        isOpen={showEditTaskModal}
        onClose={handleCloseEditTaskModal}
        task={selectedTask}
        isEditable={isEditable}
      />
    </Box>
  );
};

export default TasksContentTest;
