import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ tasks, onDeleteTask, onToggleComplete, onEditTask }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onToggleComplete={onToggleComplete}
          onEditTask={onEditTask}
        />
      ))}
    </ul>
  );
}

export default ToDoList;