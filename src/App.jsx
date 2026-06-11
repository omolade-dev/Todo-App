// import { useState } from "react";
// import tasks from "./components/TaskList";
import FilterButton from "./components/FilteredButtons";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  // const [task, setTask] = useState([]);
  // const [input, setInput] = useState("");
  // const [filtered, setFilter] = useState("all");

  return (
    <div className="container">
      <div className="logo">
        <div className="img">
          <img src="" alt="" />
        </div>
        <div className="header">
          <h1>My Tasks</h1>

          <p>
            {" "}
            {completedTasks} of {tasks.length} completed
          </p>
        </div>
      </div>

      <TaskInput />
      <FilterButton />
      <TaskList />

      <div>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
}

export default App;
