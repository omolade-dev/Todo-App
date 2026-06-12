// import { useState } from "react";
// import tasks from "./components/TaskList";
import Header from "./components/Header";
import FilterButton from "./components/FilteredButtons";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [task, setNewTask] = useState("");
  const [filtered, setFilter] = useState("all");

  const addTask = () => {
    if (!setNewTask.trim()) return;

    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };

    setTasks([...tasks, task]);
    setNewTask("");
  };

  const toggleTask = (id) => {};

  const deleteTask = (id) => {};

  const filteredTask = (id) => {};

  const pendingCount = (id) => {};

  const completedCount = (id) => {};

  return (
    <div className="container">
      <div className="logo">
        <div className="img">
          <img src="" alt="" />
        </div>
        <Header />
      </div>

      <TaskInput />
      <FilterButtons
        filter={filter}
        setFilter={setFilter}
        pendingCount={pendingCount}
      />

      <TaskList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />

      <div>
        <p>
          {pendingCount} pending . {completedCount} completed . {tasks.length}{" "}
          total{" "}
        </p>
      </div>
    </div>
  );
}

export default App;
