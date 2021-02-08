import React from "react";

export default function ToDoItem(props) {
  let { todo } = props;
  return <div key={todo}>{todo}</div>;
}
