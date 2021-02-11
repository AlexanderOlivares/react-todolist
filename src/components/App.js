import React, { useState, useEffect } from "react";
import "../index.css";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "todo-list-todos";

export default function App() {
  const [list, setList] = useState([]);

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
  return (
    <div>
      <h1>To Do List</h1>
      <ToDoForm addTask={addTask} />
      <div>
        <button onClick={clearFinished}>clear finished</button>
      </div>
      <ToDoList list={list} toggleChecked={toggleChecked} />
    </div>
  );
}
