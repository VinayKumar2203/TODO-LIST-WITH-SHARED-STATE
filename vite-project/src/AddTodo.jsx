import React, { useState } from 'react';

const AddTodo = ({ addTask }) => {
  // State to manage the input value
  const [newTask, setNewTask] = useState('');

  // Function to handle the input change
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the input is not empty
    if (newTask.trim() !== '') {
      // Call the addTask function from props to add the new task
      addTask({ id: Date.now(), text: newTask, completed: false });

      // Clear the input field
      setNewTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input field to enter a new task */}
      <input type="text" value={newTask} onChange={handleInputChange} />

      {/* Button to add a new task */}
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTodo;
