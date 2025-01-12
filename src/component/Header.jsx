import React, { useState } from "react";




  function Header({ onAddTask }) {
    const [input, setInput] = useState("");
  
    const handleAddTask = () => {
      onAddTask(input);
      setInput("");
    };
  
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        handleAddTask();
      }
    };
  
    return (
      <header className="header">
        <h1>To-Do List</h1>
        <div className="add-task">
          <input
            type="text"
            placeholder="Add a new task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleAddTask}>Add</button>
        </div>
      </header>
    );
  }
  
  export default Header;