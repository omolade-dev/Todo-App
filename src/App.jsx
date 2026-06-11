// import { useState } from "react";
// import tasks from "./components/TaskList";

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

          <p> 1 of 3 completed</p>
        </div>
      </div>

      <div className="form">
        <input type="text" placeholder="Add a new task..." />
        <button> + Add</button>
      </div>

      <div className="btn">
        <button>All</button>
        <button>Pending</button>
        <button>Completed</button>
      </div>

      <div>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
}

export default App;
