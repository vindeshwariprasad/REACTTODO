import React, { useState } from "react";
import Header from './component/Header';
import ToDoList from './component/ToDoList';
import './App.css'


function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    if (taskName.trim() === "") {
      alert("Please fill in the task before adding.");
      return;
    }
    setTasks([...tasks, { id: Date.now(), name: taskName, completed: false }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (taskId, newName) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, name: newName } : task
      )
    );
  };

  return (
    <div className="app-container">
      <Header onAddTask={addTask} />
      <ToDoList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleComplete={toggleComplete}
        onEditTask={editTask}
      />
    </div>
  );
}

export default App;
