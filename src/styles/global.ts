import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    scroll-behavior: smooth;
    font-family: 'Prompt', sans-serif;
    
  }

  html {
    overflow: auto;
    overflow-x: hidden;
  }

  body {
    width: 100%;
    height: 100%;
    font-family: 'Prompt', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
  
 

`;
