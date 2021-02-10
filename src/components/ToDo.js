import React from "react";

export default function ToDo({ id, task, complete }) {
  return (
    <>
      <div>
        {id} {task}
      </div>
    </>
  );
}
