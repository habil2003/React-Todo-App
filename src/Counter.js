import React, { useState} from "react";
import "./TodoApp.css";

function Counter({subtitle}){
    const [count, setCount] = useState(0);
    return (
        <div className="todo-container " style={{ textAlign: "center", marginTop: "40px" }}>
            <h2>Counter Example</h2>
            {subtitle && <h3>{subtitle}</h3>}
            <p style={{fontSize: "2em"}}>{count}</p>
            <button onClick={() => setCount(count + 1)}>
            Increase </button>
            <button onClick={()=> setCount(count-1)}>Decrease</button>
        </div>
    );
}

export default Counter;