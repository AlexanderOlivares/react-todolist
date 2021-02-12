import React, { useState, useEffect } from "react";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import { v4 as uuidv4 } from "uuid";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme";
import { GlobalStyle } from "../GlobalStyle";
import { FiSun } from "react-icons/fi";
import { HiOutlineMoon } from "react-icons/hi";

const LOCAL_STORAGE_KEY = "todo-list-todos";

export default function App() {
  const [list, setList] = useState([]);
  const [theme, setTheme] = useState(lightTheme);

  function addTask(input) {
    let listCopy = [...list];
    listCopy = [...listCopy, { id: uuidv4(), task: input, complete: false }];
    setList(listCopy);
  }

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedList) {
      setList(storedList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
  }, [list]);

  function toggleChecked(id) {
    let listCopy = [...list];
    const findChecked = listCopy.find(item => item.id === id);
    findChecked.complete = !findChecked.complete;
    setList(listCopy);
  }

  function clearFinished(e) {
    let listCopy = [...list];
    const keepUnchecked = listCopy.filter(item => !item.complete);
    setList(keepUnchecked);
  }

  function handleThemeToggle() {
    let updatedTheme = theme.background === "#272727" ? lightTheme : darkTheme;
    setTheme(updatedTheme);
  }

  return (
    <>
      <GlobalStyle theme={theme} />
      <ThemeProvider theme={theme}>
        <h1>To Do List</h1>
        <ToDoForm addTask={addTask} />
        <div style={{ marginBottom: -10 }}>
          <button
            onClick={handleThemeToggle}
            style={{
              margin: 15,
              fontSize: "smaller",
              paddingTop: 3,
            }}
          >
            {theme === lightTheme ? <HiOutlineMoon /> : <FiSun />}
          </button>
          <button
            onClick={clearFinished}
            style={{ fontSize: "medium", marginTop: 10 }}
          >
            clear completed
          </button>
        </div>
        <ToDoList list={list} toggleChecked={toggleChecked} theme={theme} />
      </ThemeProvider>
    </>
  );
}
