import React, { useState } from 'react';
import styled from 'styled-components';

import Sidebar from './components/sidebar/sidebar';
import Header from './components/header/header';
import Content from './components/content/content';

const AppWrapper = styled.div`
    display: flex;
    min-height: 900px;
    margin: 20px;
    padding: 20px;
    background-color: ${(props) => props.theme.primaryBackground};
    border-radius: 50px;
    position: relative;
`;

const AppBody = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

interface Props {
    handleToggleMode: () => void;
}

const App: React.FC<Props> = ({ handleToggleMode }) => {
    return (
        <AppWrapper>
            <input type="checkbox" onClick={handleToggleMode} />
            <Sidebar />
            <AppBody>
                <Header />
                <Content />
            </AppBody>
        </AppWrapper>
    );
};

export default App;
