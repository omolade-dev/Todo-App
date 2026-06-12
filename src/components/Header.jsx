function Header({ completedCount, totalTasks }) {
  return (
    <div className="header">
      <h1>My Tasks</h1>

      <p>
        {" "}
        {completedCount} of {totalTasks} completed
      </p>
    </div>
  );
}
export default Header;
