import React from "react";

export default function ToDo({ id, task, complete, toggleChecked }) {
  function handleChange(e) {
    toggleChecked(id);
  }
  //console.log(complete);

  return (
    <>
      <div>
        <label>
          {task}
          <input type="checkbox" checked={complete} onChange={handleChange} />
        </label>
      </div>
    </>
  );
}
