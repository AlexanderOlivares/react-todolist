import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0;
    height: 100%;
    margin: 0;
    font-family: "Arial";
    text-align: center;
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
  }

  button {
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
  }
`;
