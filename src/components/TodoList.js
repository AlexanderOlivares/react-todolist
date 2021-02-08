import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList(props) {
  let { toDoList } = props;

  return toDoList.map(element => {
    return <ToDoItem key={element} todo={element} />;
  });
}
