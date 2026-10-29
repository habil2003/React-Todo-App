import React, { useState } from "react";
import Login from "./login";
import TodoApp from "./TodoApp";
import Counter from "./Counter";  

function App() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      {!submitted ? (
        <Login setName={setName} setSubmitted={setSubmitted} />
      ) : (
        <Greeting name={name} />
      )}
    </div>
  );
}

// Greeting is defined inside App.js
function Greeting({ name}) {
  return (
    <div className="center-text">
      <h2>Hello {name}, welcome to my site!</h2>
      <TodoApp />
      <Counter subtitle="This is a JSX returned with component." /> 
    </div>
  );
}

export default App;