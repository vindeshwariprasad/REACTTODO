import React, { useState } from "react";





  function ToDoItem({ task, onDeleteTask, onToggleComplete, onEditTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(task.name);
  
    const handleSave = () => {
      onEditTask(task.id, newName);
      setIsEditing(false);
    };
  
    return (
      <li className={`todo-item ${task.completed ? "completed" : ""}`} style={{ color: "black" }}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
        />
        {isEditing ? (
          <div>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
          </div>
        ) : (
          <div>
            <span>{task.name}</span>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDeleteTask(task.id)}>Delete</button>
          </div>
        )}
      </li>
    );
  }
  
  export default ToDoItem;
