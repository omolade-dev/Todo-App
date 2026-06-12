// import { useState } from "react";
// import tasks from "./components/TaskList";
import Header from "./components/Header"
import FilterButton from "./components/FilteredButtons";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [task, setTask] = useState([]);
  // const [input, setInput] = useState("");
  // const [filtered, setFilter] = useState("all");

  const toggleTask = (id) => {};

  const deleteTask = (id) => { setTasks(tasks.filter((task) task.id !== id),)};

  const pendingTasks = tasks.filter((task) => !task.completed).lenght;

  const completedTasks = tasks.filter((task) => task.completed).length;

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
      pendingCount={pendingCount} />

      <TaskList
      tasks={filteredTasks}
      toggleTask={toggleTask}
      deleteTask={deleteTask} />

      <div>
        <p>{pendingCount} pending . {completedCount} completed .{" "} {tasks.length} total </p>
      </div>
    </div>
  );
}

export default App;
