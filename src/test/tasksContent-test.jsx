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
import { useTasks } from "../hooks/useTasks";
import { format } from "date-fns";

const TasksContentTest = () => {
  const { tasks, deleteTask } = useTasks();

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
                    <MenuItem icon={<FaEye />}>View Task</MenuItem>
                    <MenuItem icon={<FaEdit />}>Edit</MenuItem>
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
    </Box>
  );
};

export default TasksContentTest;
