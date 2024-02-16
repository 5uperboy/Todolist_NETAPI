import { useState } from "react";
import PropTypes from "prop-types";

const AddTask = ({ onAdd }) => {

AddTask.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

  const [name, setText] = useState("");
  const [description, setDescription] = useState("");
  const [isComplete, setReminder] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Please add a task");
      return;
    }
    const dateModified = new Date().toISOString();
    onAdd({ name, description, isComplete, dateModified });

    setText("");
    setDescription("");
    setReminder(false);
    setError("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={name}
          onChange={(e) => setText(e.target.value)}
        />
        {error && <div className="error-msg">*{error}</div>}
      </div>
      <div className="form-control">
        <label>Description</label>
        <textarea
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="des-box"
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block"/>
    </form>
  );
};
export default AddTask;
