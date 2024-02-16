import axios from "axios";

// Fetch Tasks
export const fetchTasks = async () => {
  const res = await axios.get("http://localhost:5281/api/TodoItems");
  return res.data;
};

// Fetch Task
export const fetchTask = async (id) => {
  const res = await axios.get(`http://localhost:5281/api/TodoItems/${id}`);
  return res.data;
};

// Add Task
export const addTask = async (newTask) => {
  try {
    const res = await axios.post(
      "http://localhost:5281/api/TodoItems",
      newTask,
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error("Error adding task:", error);
    throw error;
  }
};

// Delete Task
export const deleteTask = async (id) => {
  if (window.confirm("Are you sure you want to delete this task?")) {
    try {
      await axios.delete(`http://localhost:5281/api/TodoItems/${id}`);
      return id;
    } catch (error) {
      console.error("Error deleting task:", error);
      throw error;
    }
  }
  return null;
};

// Toggle Complete Status
export const toggleComplete = async (id) => {
  try {
    const taskToToggle = await fetchTask(id);
    const updatedTask = {
      ...taskToToggle,
      isComplete: !taskToToggle.isComplete,
    };
    const res = await axios.put(
      `http://localhost:5281/api/TodoItems/${id}`,
      updatedTask,
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    return { id, isComplete: res.data.isComplete };
  } catch (error) {
    console.error("Error toggling complete status:", error);
    throw error;
  }
};

// Edit Task
export const editTask = async (id, updatedTask) => {
  try {
    const res = await axios.put(
      `http://localhost:5281/api/TodoItems/${id}`,
      updatedTask,
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error("Error editing task:", error);
    throw error;
  }
};
