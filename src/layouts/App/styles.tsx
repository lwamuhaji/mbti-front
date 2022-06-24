import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`  
  body, html {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  input {
    background-color: transparent;
    padding: 0;
    border: none;
  }

  input:focus-visible {
    outline: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
