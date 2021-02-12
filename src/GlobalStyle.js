import { createGlobalStyle } from "styled-components";

//figure out whitespce issue on mobile
export const GlobalStyle = createGlobalStyle`
  html, body {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0;
    width: 100%;
    font-size: medium;
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
