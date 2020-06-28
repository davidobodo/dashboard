import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

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

const Root = () => {
    const handleToggleMode = () => {
        console.log('herre');
    };

    const theme = {
        lightBlue: '#f0f7fd',
        darkBlue: '#0075ff',
        veryDarkBlue: '#131f3e',
        popularBoxMargin: '12px',
        ashColor: '#e9eff4',
        myBorderRadius: '20px',
    };

    return (
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <App handleToggleMode={handleToggleMode} />
            </ThemeProvider>
        </React.StrictMode>
    );
};

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
