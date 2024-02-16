import { useState } from "react";
import {
  FaTrashAlt,
  FaEdit,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
import EditTaskModal from "./EditTaskModal";
import "../pages/css/todoPage.css";

/* eslint-disable react/prop-types */
const Task = ({ task, onDelete, onToggle, onEdit }) => {
  const [showModal, setShowModal] = useState(false);

  const handleEdit = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div key={task.id} className={`task ${task.isComplete ? "reminder" : ""}`}>
      <h3>
        {task.name}
        <span className="task-icons">
          <button className="task-icons-btn">
            <FaTrashAlt
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => onDelete(task.id)}
            />
          </button>
          {!task.isComplete && (
            <button className="task-icons-btn">
              <FaEdit
                style={{ color: "blue", cursor: "pointer" }}
                onClick={handleEdit}
              />
            </button>
          )}
          <button className="task-icons-btn">
            {task.isComplete ? (
              <FaTimes
                style={{ color: "orange", cursor: "pointer" }}
                onClick={() => onToggle(task.id)}
              />
            ) : (
              <FaCheck
                style={{ color: "green", cursor: "pointer" }}
                onClick={() => onToggle(task.id)}
              />
            )}
          </button>
        </span>
      </h3>
      <p className="task-des">{task.description}</p>
      <span>{task.dateModified}</span>
      {showModal ? (
        <EditTaskModal task={task} onClose={handleCloseModal} onEdit={onEdit} />
      ) : null}
    </div>
  );
};

export default Task;
