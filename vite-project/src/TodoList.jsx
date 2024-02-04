import React from 'react';

const TodoList = ({ tasks, deleteTask, markAsCompleted }) => {
  return (
    <ul>
      {/* Map through the tasks and render each task */}
      {tasks.map((task) => (
        <li key={task.id}>
          {/* Display the task text */}
          {task.text}

          {/* Button to delete the task */}
          <button onClick={() => deleteTask(task.id)}>Delete</button>

          {/* Button to mark the task as completed */}
          <button onClick={() => markAsCompleted(task.id)}>Mark as Completed</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
