import React from "react";
import styled from "styled-components";
import { lightTheme } from "../theme";

const TodoStyle = styled.div`
  border: ${props =>
    props.theme === lightTheme ? "2px solid #5eaaa8" : "2px solid #c1a1d3"};
  font-size: large;
  background-color: ${props =>
    props.isChecked
      ? "#5eaaa8"
      : props.theme === lightTheme && !props.isChecked
      ? "#c1a1d3"
      : "#1d3e53"};
  padding: 5px;
  border-radius: 25px;
  margin: 0 auto;
  margin-top: 15px;
  max-width: 80%;
  text-align: center;
  overflow: scroll;
  opacity: 90%;
  &:hover {
    background-color: #a3d2ca;
    color: black;
  }
  @media screen and (min-width: 480px) {
    max-width: 80%;
  }
  @media screen and (min-width: 1024px) {
    max-width: 45%;
  }
  @media screen and (min-width: 1280px) {
    max-width: 25%;
  }
`;

const StyledInput = styled.input`
  float: left;
  margin-left: 25px;
  margin-top: 8px;
`;

export default function ToDo({ id, task, complete, toggleChecked, theme }) {
  function handleChange() {
    toggleChecked(id);
  }

  return (
    <TodoStyle theme={theme} isChecked={complete}>
      <label>
        <StyledInput
          type="checkbox"
          checked={complete}
          onChange={handleChange}
        />
        <div style={{ padding: 5 }}>{task}</div>
      </label>
    </TodoStyle>
  );
}
