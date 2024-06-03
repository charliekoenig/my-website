// src/globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    scroll-behavior: smooth;
    padding-top: 80px; /* Add top padding to accommodate fixed navbar */
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
