import "./css/todoPage.css";
import { useState } from "react";
import { useTasks } from "../hooks/useTasks";
import Header from "../components/Header";
import AppRoutes from "../components/AppRoutes";

export default function TodoPage() {
  const { tasks, addTask, deleteTask, toggleComplete, editTask } = useTasks();
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <div className="parent-bg">
      <div className="todo-container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <AppRoutes
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleComplete}
          onEdit={editTask}
          addTask={addTask}
          showAddTask={showAddTask}
        />
      </div>
    </div>
  );
}
