import Task from "./Task";

/* eslint-disable react/prop-types */
const Tasks = ({ tasks, onDelete, onToggle, onEdit }) => {
  return (
    <div style={{ margin: "20px 0", borderTop: "1px solid #000" }}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default Tasks;
