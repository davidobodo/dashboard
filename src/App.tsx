import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*, 
  *:before, 
  *:after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.4rem;
    font-family: 'Lato', sans-serif;
    color: #444;
  }
`;

const theme = {};

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div>hello</div>;
        </ThemeProvider>
    );
};

export default App;
