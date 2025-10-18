import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }



  body, #root {
    min-height: 100vh;
    width: 100%;
    font-family: 'PT Sans', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
  }

  button {
    all: unset;
    cursor: pointer;
  }
`;
