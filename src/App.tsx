import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './constants';

import Sidebar from './components/sidebar/sidebar';
import Header from './components/header/header';
import Content from './components/content/content';

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
    font-family: 'Quicksand', sans-serif;
    background-color: #f2f5f7;
    
  }
`;

const AppWrapper = styled.div`
    display: flex;
    min-height: 900px;
    margin: 20px;
    padding: 20px;
    background-color: #fff;
    border-radius: 50px;
`;

const AppBody = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <AppWrapper>
                <Sidebar />
                <AppBody>
                    <Header />
                    <Content />
                </AppBody>
            </AppWrapper>
        </ThemeProvider>
    );
};

export default App;
