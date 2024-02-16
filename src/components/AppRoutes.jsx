/* eslint-disable react/prop-types */
import { Route, Routes } from "react-router-dom";
import Tasks from "./Tasks";
import AddTask from "./AddTask";

const AppRoutes = ({
  tasks,
  onDelete,
  onToggle,
  onEdit,
  addTask,
  showAddTask,
}) => (
  <Routes>
    <Route
      path="/"
      element={
        <>
          {showAddTask && <AddTask onAdd={addTask} />}
          {tasks.length > 0 ? (
            <Tasks
              tasks={tasks}
              onDelete={onDelete}
              onToggle={onToggle}
              onEdit={onEdit}
            />
          ) : (
            "No Tasks To Show"
          )}
        </>
      }
    />
  </Routes>
);
export default AppRoutes;
