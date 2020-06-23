import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

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
    
  }
`;

const theme = {
    lightBlue: '#f0f7fd',
    darkBlue: '#0075ff',
    veryDarkBlue: '#131f3e',
    popularBoxMargin: '12px',
    ashColor: '#e9eff4',
    myBorderRadius: '20px',
};

const AppWrapper = styled.div`
    background-color: #fff;
    padding: 20px;
    height: 100vh;
    min-height: 900px;
    display: flex;
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
