function TaskInput({ newTask, setNewTask }) {
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Add a new task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button> + Add</button>
    </div>
  );
}

export default TaskInput;
