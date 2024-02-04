import React, { useState } from 'react';

const TodoApp = () => {
  // State to manage the list of tasks
  const [tasks, setTasks] = useState([]);

  // Function to add a new task to the list
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      {/* Render the AddTodo component and pass down the addTask function */}
      <AddTodo addTask={addTask} />
      
      {/* Render the TodoList component and pass down the tasks, deleteTask, and markAsCompleted functions */}
      {/* (TodoList component not provided in this example) */}
    </div>
  );
};

export default TodoApp;
