function App() {
  return (
    <div>
      <div className="logo">
        <div className="img">
          <img src="" alt="" />
        </div>
        <div className="header">
          <h1>My Tasks</h1>

          <p>1 of 3 completed</p>
        </div>
      </div>

      <div>
        <input type="text" placeholder="Add a new task..." />
        <button> + Add</button>
      </div>

      <div>
        <h3>All</h3>
        <h3>Pending</h3>
        <h3>Completed</h3>
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