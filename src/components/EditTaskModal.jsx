/* eslint-disable react/prop-types */
import { useState } from "react";

const EditTaskModal = ({ task, onClose, onEdit }) => {
  const [title, setTitle] = useState(task.name);
  const [description, setDescription] = useState(task.description);

  const handleSave = () => {
    onEdit(task.id, { ...task, name: title, description: description });
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h4 style={{ margin: "10px 0 " }}>Edit Task</h4>
        <label style={{ fontSize: "0.90em" }}>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label style={{ marginTop: "10px", fontSize: "0.90em" }}>
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div>
          <button
            className="modal-btn"
            style={{ backgroundColor: "green" }}
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="modal-btn"
            style={{ backgroundColor: "red" }}
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
