function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <div>
      {tasks.map((task) => (
        <div>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />

          <span>{task.text}</span>
          <span>{task.completed ? "done" : "pending"}</span>
          <button onClick={() => deleteTask(task.id)}> Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
