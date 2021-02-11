import React from "react";
import styled from "styled-components";

const TodoStyle = styled.div`
  border: 1px solid whitesmoke;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 5px;
  max-width: 75%;
  text-align: center;
  overflow: scroll;
`;

const StyledInput = styled.input`
  float: left;
  margin-left: 25px;
`;

export default function ToDo({ id, task, complete, toggleChecked }) {
  function handleChange(e) {
    toggleChecked(id);
  }

  return (
    <TodoStyle>
      <label>
        <StyledInput
          type="checkbox"
          checked={complete}
          onChange={handleChange}
        />
        {task}
      </label>
    </TodoStyle>
  );
}
