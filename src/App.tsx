import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import Sidebar from './components/sidebar/sidebar';
import Header from './components/header/header';

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

const AppWrapper = styled.div`
    background-color: #fff;
    padding: 20px;
    height: 100vh;
    min-height: 900px;
    display: flex;
`;

const AppBody = styled.div`
    flex: 1;
`;

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <AppWrapper>
                <Sidebar />
                <AppBody>
                    <Header />
                </AppBody>
            </AppWrapper>
        </ThemeProvider>
    );
};

export default App;
