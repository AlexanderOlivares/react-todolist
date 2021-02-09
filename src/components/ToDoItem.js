import React, { useState } from "react";
import styled from "styled-components";

const StyledTodo = styled.div`
  border: 2px solid black;
  border-radius: 5px;
  width: 400px;
  margin: 0 auto;
  margin-top: 5px;
`;

export default function ToDoItem(props) {
  let { todo } = props;

  return (
    <>
      <div>
        <StyledTodo key={todo}>{todo}</StyledTodo>
      </div>
    </>
  );
}
