import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList(props) {
  let { toDoList } = props;

  return toDoList.map(element => {
    return <ToDoItem key={parseInt(Math.random() * 1000)} todo={element} />;
  });
}
