import React, { useState } from "react";

function Login({ setName, setSubmitted }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setName(input);
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center", marginTop: "40px" }}>
      <input
        type="text"
        placeholder="Enter your name"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;