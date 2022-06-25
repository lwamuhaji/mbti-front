import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`  
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

export const ModalStyle = createGlobalStyle`
  .modal {
    position: fixed;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);

    width: 250px;
    height: 90px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 5px 5px 3px 3px rgba(0, 0, 0, 0.3);

    text-align: center;
    padding-top: 10px;

    input {
      margin: 14px 10px;
      vertical-align: bottom;
      border-radius: 5px;
    }

    input[type='text'] {
      height: 25px;
      padding: 0 10px;
      width: 100px;
      background-color: lightgray;
    }

    input[type='submit'] {
      height: 25px;
      padding: 0 10px;
      width: 50px;
      background-color: lightgray;
    }
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
