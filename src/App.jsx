import { useState } from "react";

import Header from "./components/Header";
import FilterButtons from "./components/FilteredButtons";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Learn React State Management",
      completed: true,
    },
    {
      id: 2,
      text: "Practice MTH 306",
      completed: false,
    },
    {
      id: 3,
      text: "Build a Todo App",
      completed: false,
    },
  ]);

  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

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

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const pendingCount = tasks.filter((task) => task.pendingCount.length);

  const completedCount = tasks.filter((task) => task.completed).length;

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
