import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
};

export const darkTheme = {
  body: "#000",
  fontColor: "#fff",
};

export const GlobalStyles = createGlobalStyle`
  html, body, h2 {
    height: 100%;
    margin: 0px;
    padding: 0px;
    text-align: center;
    background-color: ${props => props.theme.body};
    color: ${props => (props.theme.body === "light" ? darkTheme : lightTheme)};

  }
  h2{
    margin: 0;
    padding: 0px;
  }

`;
