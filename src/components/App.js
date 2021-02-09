import React, { useState } from "react";
import TodoList from "./TodoList";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../theme";

const StyledButton = styled.button`
  border-radius: 5px;
  background-color: grey;
  margin: 5px;
`;

export default function App() {
  const [input, setInput] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [theme, setTheme] = useState("light");

  function themeToggler() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  function handleClick(e) {
    setToDoList(prev => [...prev, input]);
    setInput("");
  }

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <h2>To Do List</h2>
        <div>
          <button onClick={() => themeToggler()}>theme</button>
        </div>
        <input
          onChange={e => setInput(e.target.value)}
          type="text"
          placeholder="add item here"
        ></input>
        <StyledButton theme={darkTheme} onClick={handleClick}>
          add to list
        </StyledButton>
        <TodoList toDoList={toDoList} />
      </ThemeProvider>
    </>
  );
}
