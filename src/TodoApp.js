import React, { useState } from "react";
import "./TodoApp.css";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, { text: input.trim(), completed: false }]);
      setInput("");
    }
  };

  return (
    <div className="todo-container">
      <h1>Todo App</h1>
      <p>You have {todos.length} tasks.</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTodo();
          }
        }}
        placeholder="Add a todo"
      />
      <button className="add-btn" onClick={handleAddTodo}>Add</button>
      <ul className="todo-list">
        {todos.map((todo, idx) => (
          <li key={idx} className="todo-item">
            <label className="custom-checkbox">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {
                setTodos(
                  todos.map((t, i) =>
                    i === idx ? { ...t, completed: !t.completed } : t
                  )
                );
              }}
            />
            <span className="checkmark"></span>
            </label>
            
            <span
              className="todo-text"
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button
              className="delete-btn"
              onClick={()=>{
                setTodos(todos.filter((_, i) => i !== idx));
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;


