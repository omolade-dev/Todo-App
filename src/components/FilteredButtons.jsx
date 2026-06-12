function filteredButtons({ setFilter, pendingCount }) {
  return (
    <div>
      <div className="btn">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("pending")}>
          Pending ({pendingCount})
        </button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
    </div>
  );
}

export default filteredButtons;
