import { useState } from 'react';
import './App.css';

function TodoApp() {
  const [todoApp, setTodoApp] = useState([]);

  // Function to add a new task to the list
  function addTask(newTask) {
    setTodoApp([...todoApp, newTask]);
  }

  // Function to delete a task from the list
  function deleteTask(taskId) {
    const updatedTasks = todoApp.filter((task) => task.id !== taskId);
    setTodoApp(updatedTasks);
  }

  // Function to mark a task as completed
  function markAsCompleted(taskId) {
    const updatedTasks = todoApp.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setTodoApp(updatedTasks);
  }

  return (
    <div className='TodoApp'>
      {/* Render the AddTodo component and pass down the addTask function */}
      <AddTodo addTask={addTask} />

      {/* Render the TodoList component and pass down the tasks, deleteTask, and markAsCompleted functions */}
      <TodoList tasks={todoApp} deleteTask={deleteTask} markAsCompleted={markAsCompleted} />
    </div>
  );
}

function AddTodo({ addTask }) {
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTask.trim() !== '') {
      // Call the addTask function from props to add the new task
      addTask({ id: Date.now(), text: newTask, completed: false });

      // Clear the input field
      setNewTask('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={newTask} onChange={handleInputChange}></input>
        <button type='submit'>Add Task</button>
      </form>
    </div>
  );
}

function TodoList({ tasks, deleteTask, markAsCompleted }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text} {/* Fix the property name from Text to text */}
          <button onClick={() => deleteTask(task.id)}>Delete</button>
          <button onClick={() => markAsCompleted(task.id)}>Mark As Completed</button>
        </li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <>
      <TodoApp />
    </>
  );
}

export default App;
