import { Box, SimpleGrid } from "@chakra-ui/react";
import { useTasks } from "../../hooks/useTasks";
import Tasks from "../../components/Tasks";

const TodoContent = () => {
  const { tasks, deleteTask, toggleComplete, editTask } = useTasks();

  return (
    <Box m={6}>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleComplete}
          onEdit={editTask}
        />
      </SimpleGrid>
    </Box>
  );
};

export default TodoContent;
