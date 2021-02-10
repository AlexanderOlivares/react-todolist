import React, { useState, useEffect } from "react";
import "../index.css";
import Header from "./Header";
import data from "../data.json";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

const LOCAL_STORAGE_KEY = "todo-list-todos";

export default function App() {
  const [list, setList] = useState([
    {
      id: "",
      task: "",
      complete: false,
    },
  ]);

  function addTask(input) {
    let listCopy = [...list];
    listCopy = [...listCopy, { id: list.length, task: input, complete: false }];
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

  return (
    <div>
      <h1>To Do List</h1>
      <ToDoForm addTask={addTask} />
      <ToDoList list={list} />
    </div>
  );
}
