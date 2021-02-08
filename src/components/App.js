import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import styled from "styled-components";

const Body = styled.div`
  text-align: center;
`;

const NewButton = styled.button`
  color: whitesmoke;
  border-radius: 5px;
  background-color: grey;
`;

export default function App() {
  const [input, setInput] = useState("");
  const [toDoList, setToDoList] = useState([]);

  function handleClick() {
    setToDoList(prev => [...prev, input]);
  }

  return (
    <>
      <Body>
        <h2>To Do List</h2>
        <input
          onChange={e => setInput(e.target.value)}
          type="text"
          placeholder="add item here"
        ></input>
        <NewButton onClick={handleClick}>add to list</NewButton>
        <TodoList toDoList={toDoList} />
      </Body>
    </>
  );
}
