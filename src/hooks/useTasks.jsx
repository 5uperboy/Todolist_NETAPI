import { useState, useEffect } from "react";
import {
  fetchTasks,
  addTask,
  deleteTask,
  toggleComplete,
  editTask,
} from "../services/Api";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const tasksFromServer = await fetchTasks();
        setTasks(tasksFromServer);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    getTasks();
  }, []);

  const handleAddTask = async (task) => {
    const newTask = await addTask(task);
    setTasks([newTask, ...tasks]);
  };

  const handleDeleteTask = async (id) => {
    const returnedId = await deleteTask(id);
    if (returnedId !== null) {
      setTasks(tasks.filter((task) => task.id !== returnedId));
    }
  };

  const handleToggleComplete = async (id) => {
    const updatedTask = await toggleComplete(id);
    fetchUpdatedTasks();
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  const handleEditTask = async (id, updatedTask) => {
    const updatedTaskFromServer = await editTask(id, updatedTask);
    setTasks(
      tasks.map((task) => (task.id === id ? updatedTaskFromServer : task))
    );
  };

  const fetchUpdatedTasks = async () => {
    try {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    } catch (error) {
      console.error("Error fetching updated tasks:", error);
    }
  };

  return {
    tasks,
    addTask: handleAddTask,
    deleteTask: handleDeleteTask,
    toggleComplete: handleToggleComplete,
    editTask: handleEditTask,
  };
};
