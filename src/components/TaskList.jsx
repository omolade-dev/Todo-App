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
          <button onClick={() => deleteTask(TaskList.id)}> Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;

// const taskList = [
//   {
//     id: 1,
//     text: "Learn React State Management",
//     completed: true,
//   },
//   {
//     id: 2,
//     text: "Practice MTH 306",
//     completed: false,
//   },
//   {
//     id: 3,
//     text: "Build a Todo App",
//     completed: false,
//   },
// ];

// export default taskList;
