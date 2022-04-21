import { createGlobalStyle } from "styled-components";

export default createGlobalStyle` 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, button, input {
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  button{
    cursor: pointer;
    border:0;
    outline: none;
  }

`;
