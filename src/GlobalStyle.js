import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    box-sizing: border-box;
    margin: 0;
    overflow: scroll;
    padding: 0px;
    height: 100%;
    font-size: medium;
    font-family: "Arial";
    text-align: center;
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
  }

  button {
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
    border-radius: 5px;
    &:hover {
      background-color: #a3d2ca;
      opacity: 75%;
    };
    &:active {
      background-color: #5eaaa8;
    }
`;
