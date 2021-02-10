import React from "react";
import ToDo from "./ToDo";

export default function TodoList({ list }) {
  console.log(list);
  return (
    <div>
      {list.map(item => {
        return (
          <ToDo
            key={Math.random() * 1000}
            id={item.id}
            task={item.task}
            complete={item.complete}
          />
        );
      })}
    </div>
  );
}
