# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


<!-- //import React, { useState, useEffect } from "react";

// Login component (provided by user)
function Login({ setName, setSubmitted }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (input.trim() === "") {
      // Potentially show an error message here instead of just returning
      return;
    }
    setName(input);
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form"> {/* Added className for styling */}
      <h1 className="login-title">Welcome!</h1> {/* Added class for styling */}
      <input
        type="text"
        placeholder="Enter your name"
        value={input}
        onChange={e => setInput(e.target.value)}
        className="login-input" /* Added class for styling */
      />
      <button type="submit" className="login-button">Submit</button> {/* Added class for styling */}
    </form>
  );
}

// TodoApp component (provided by user)
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Function to add a new todo item
  const handleAddTodo = () => {
    if (input.trim() !== "") { // Check if input is not empty
      setTodos([...todos, { text: input.trim(), completed: false }]); // Add new todo
      setInput(""); // Clear input field
    }
  };

  return (
    <div className="todo-container">
      <h1 className="todo-header">Todo App</h1>
      <p className="task-count">You have {todos.length} tasks.</p>
      <div className="input-section"> {/* Grouping input and button */}
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
          className="todo-input" /* Added class for styling */
        />
        <button className="add-btn" onClick={handleAddTodo}>Add</button>
      </div>
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
              <span className="checkmark"></span> {/* Custom checkbox visual */}
            </label>

            <span
              className="todo-text"
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed ? "#888" : "#333" // Dim completed tasks
              }}
            >
              {todo.text}
            </span>
            <button
              className="delete-btn"
              onClick={()=>{
                setTodos(todos.filter((_, i) => i !== idx));
              }}
              aria-label="Delete todo"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Counter component (provided by user)
function Counter({ subtitle }){
  const [count, setCount] = useState(0);
  return (
    <div className="counter-container"> {/* Changed class to be distinct */}
      <h2 className="counter-header">Counter Example</h2>
      {subtitle && <h3 className="counter-subtitle">{subtitle}</h3>}
      <p className="count-display">{count}</p>
      <div className="counter-buttons"> {/* Grouping buttons */}
        <button onClick={() => setCount(count + 1)} className="increase-btn">
          Increase
        </button>
        <button onClick={() => setCount(count - 1)} className="decrease-btn">
          Decrease
        </button>
      </div>
    </div>
  );
} -->

<!-- // Greeting component (from user's App.js, adjusted slightly for classNames)
function Greeting({ name }) {
  return (
    <div className="greeting-container"> {/* Added className for styling */}
      <h2 className="greeting-message">Hello {name}, welcome to my site!</h2>
      <TodoApp />
      <Counter subtitle="This is a JSX returned with component." />
    </div>
  );
}

// Main App component (provided by user)
export default function App() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Consolidated CSS (from user's TodoApp.css and previous globalCss)
  const globalCss = `
    body {
        font-family: 'Arial', sans-serif;
        background-color: #f4f7f6;
        margin: 0;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        color: #333;
    }

    /* General Container Styles */
    .login-form, .todo-container, .counter-container {
        max-width: 500px;
        width: 100%;
        margin: 20px auto;
        padding: 30px;
        background: #ffffff;
        border-radius: 12px;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
        box-sizing: border-box; /* Include padding in element's total width/height */
    }

    /* Heading Styles */
    .login-title, .todo-header, .counter-header {
        text-align: center;
        color: #3f51b5; /* A nice blue */
        margin-bottom: 25px;
        font-size: 2.2em;
        font-weight: 700;
    }

    /* Input Field Styles */
    .login-input, .todo-input {
        width: calc(100% - 16px); /* Adjust for padding */
        padding: 12px 8px;
        margin-bottom: 15px;
        border: 1px solid #c7d0e4;
        border-radius: 6px;
        font-size: 1em;
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }

    .login-input:focus, .todo-input:focus {
        border-color: #3f51b5;
        box-shadow: 0 0 0 3px rgba(63, 81, 181, 0.2);
        outline: none;
    }

    /* Button Styles */
    .login-button, .add-btn, .increase-btn, .decrease-btn {
        height: 44px; /* Consistent height */
        padding: 10px 20px;
        background: #3f51b5; /* Blue */
        color: #fff;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 1em;
        font-weight: 600;
        transition: background 0.3s ease, transform 0.2s ease;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-left: 5px; /* For alignment in input-group */
        margin-right: 5px; /* For alignment in input-group */
    }

    .login-button:hover, .add-btn:hover, .increase-btn:hover, .decrease-btn:hover {
        background: #303f9f; /* Darker blue on hover */
        transform: translateY(-1px);
    }

    .delete-btn {
        background: #f44336; /* Red */
        color: #fff;
        border: none;
        border-radius: 50%; /* Make it round */
        width: 32px; /* Fixed width */
        height: 32px; /* Fixed height */
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 0.9em;
        transition: background 0.3s ease, transform 0.2s ease;
        margin-left: auto; /* Push to the right */
        flex-shrink: 0; /* Prevent shrinking */
    }

    .delete-btn:hover {
        background: #d32f2f; /* Darker red on hover */
        transform: translateY(-1px);
    }

    /* Layout for input and add button */
    .input-section {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
    }

    .input-section input {
        flex-grow: 1; /* Input takes available space */
        margin-bottom: 0; /* Remove default input margin */
    }

    /* Todo List Specific Styles */
    .todo-list {
        list-style: none;
        padding: 0;
        margin-top: 0;
    }

    .todo-item {
        display: flex;
        align-items: center;
        padding: 12px 15px;
        margin-bottom: 8px;
        background: #e3f2fd; /* Light blue background for items */
        border-radius: 8px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        transition: background-color 0.3s ease;
    }

    .todo-item:hover {
        background-color: #bbdefb; /* Slightly darker on hover */
    }

    .task-count {
        text-align: center;
        margin-bottom: 20px;
        color: #555;
        font-style: italic;
    }

    .todo-text {
        flex-grow: 1;
        font-size: 1.1em;
        padding-right: 10px; /* Space before delete button */
        word-break: break-word; /* Wrap long text */
        text-align: left; /* Align text to the left within its space */
    }

    .todo-text.completed {
        text-decoration: line-through;
        color: #888;
    }

    .no-tasks-message {
        text-align: center;
        color: #777;
        font-style: italic;
        margin-top: 20px;
    }

    /* Custom Checkbox */
    .custom-checkbox {
        display: block;
        position: relative;
        padding-left: 30px;
        cursor: pointer;
        font-size: 1.1em;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        margin-right: 15px; /* Space between checkbox and text */
        flex-shrink: 0; /* Prevent shrinking */
    }

    .custom-checkbox input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    .checkmark {
        position: absolute;
        top: 2px; /* Adjust vertical alignment */
        left: 0;
        height: 20px;
        width: 20px;
        background-color: #eee;
        border-radius: 4px;
        border: 1px solid #ccc;
        transition: background-color 0.2s ease, border-color 0.2s ease;
    }

    .custom-checkbox input:checked ~ .checkmark {
        background-color: #4caf50; /* Green when checked */
        border-color: #4caf50;
    }

    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    .custom-checkbox input:checked ~ .checkmark:after {
        display: block;
    }

    .custom-checkbox .checkmark:after {
        left: 7px;
        top: 3px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
    }

    /* Counter Specific Styles */
    .counter-container {
        background-color: #e8f5e9; /* Lighter green background */
        border: 1px solid #a5d6a7;
        margin-top: 30px;
    }

    .counter-header {
        color: #388e3c; /* Darker green */
        font-size: 2em;
    }

    .count-display {
        font-size: 3em;
        font-weight: bold;
        color: #4caf50; /* Green for count */
        margin: 15px 0;
    }

    .counter-buttons button {
        margin: 5px 10px;
        padding: 10px 25px;
        background-color: #66bb6a; /* Medium green */
    }

    .counter-buttons button:hover {
        background-color: #43a047; /* Darker green on hover */
    }

    /* Greeting specific styles */
    .greeting-container {
        text-align: center;
        width: 100%;
        max-width: 500px;
        margin: 20px auto;
        padding: 20px;
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    }

    .greeting-message {
        color: #2e7d32; /* Darker green for welcome message */
        font-size: 2.5em;
        margin-bottom: 40px;
        font-weight: 700;
    }

    /* General spacing for main App layout */
    #root > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
  `;

  // Inject global CSS into the document's head when the component mounts
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = globalCss;
    document.head.appendChild(styleSheet);

    // Cleanup function to remove the stylesheet when the component unmounts
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      {!submitted ? (
        <Login setName={setName} setSubmitted={setSubmitted} />
      ) : (
        <Greeting name={name} />
      )}
    </div>
  );
} -->
