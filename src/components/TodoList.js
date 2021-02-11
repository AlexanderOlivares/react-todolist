import React from "react";
import ToDo from "./ToDo";
import { v4 as uuidv4 } from "uuid";

export default function TodoList({ list, toggleChecked }) {
  const updatedList = list.map(item => {
    return (
      <ToDo
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
/*

      {list.map(item => {
        return (
          <>
            <ToDo
              key={uuidv4()}
              list={list}
              toggleChecked={toggleChecked}
              id={item.id}
              task={item.task}
              complete={item.complete}
            />
          </>
        );
      })}

  */
