import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    box-sizing: border-box;
    margin: 0;
    overflow: scroll;
    padding: 0px;
    height: 100%;
    font-size: small;
    font-family: "Spartan", sans-serif;
    text-align: center;
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
  }

  button {
    background: ${props =>
      props.theme.background === "#1e212d" ? "#c1a1d3" : "#f8f1f1"};
    border: ${props =>
      props.theme.background === "#1e212d"
        ? "2px solid #5eaaa8"
        : "2px solid #c1a1d3"};
    color: ${props => props.theme.color};    
    border-radius: 5px;
    font-size: small;
    font-family: "Spartan", sans-serif;
    &:hover {
      background-color: #a3d2ca;
    };
    &:active {
      background-color: #5eaaa8;
    }
`;
