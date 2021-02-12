import React from "react";
import styled from "styled-components";
import { darkTheme, lightTheme } from "../theme";

const TodoStyle = styled.div`
  border: ${props =>
    props.theme.background === "black"
      ? "1px solid whitesmoke"
      : "1px solid black"};
  font-size: large;
  padding: 5px;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 10px;
  max-width: 75%;
  text-align: center;
  overflow: scroll;
`;

const StyledInput = styled.input`
  float: left;
  margin-left: 25px;
  margin-top: 7px;
`;

export default function ToDo({ id, task, complete, toggleChecked, theme }) {
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
