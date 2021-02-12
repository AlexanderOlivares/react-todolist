import React, { useState } from "react";

export default function ToDoForm({ addTask }) {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.currentTarget.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addTask(input);
    setInput("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          style={{ fontSize: "medium" }}
          value={input}
          onChange={handleChange}
          type="text"
          placeholder="enter task"
        ></input>
        <button style={{ margin: 5 }}>add</button>
      </form>
    </>
  );
}
