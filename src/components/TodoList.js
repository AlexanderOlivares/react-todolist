import React from "react";
import ToDo from "./ToDo";
import { v4 as uuidv4 } from "uuid";

export default function TodoList({ theme, list, toggleChecked }) {
  const updatedList = list.map(item => {
    return (
      <ToDo
        theme={theme}
        key={uuidv4()}
        list={list}
        toggleChecked={toggleChecked}
        id={item.id}
        task={item.task}
        complete={item.complete}
      />
    );
  });

  return <div>{updatedList}</div>;
}
