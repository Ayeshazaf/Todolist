import { useState } from "react";
import "./styles.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  function addTask() {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  }

  function toggleTask(index) {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function removeTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div className="App">
      <div className="todo-container">
        <h2>To-Do List ✅</h2>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={addTask}>Add Task</button>

        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {/* ✅ Toggle Completion Button */}
              <button className="tick-btn" onClick={() => toggleTask(index)}>
                {task.completed ? "✅" : "⬜"}
              </button>
              <span className={task.completed ? "completed" : ""}>
                {task.text}
              </span>

              {/* ❌ Remove Task Button */}
              <button className="remove-btn" onClick={() => removeTask(index)}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
