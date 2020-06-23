import React from 'react';

import styled from 'styled-components';

const ThreeDotsWrapper = styled.div`
    border: 1px solid ${(props) => props.theme.ashColor};
    padding: 10px 5px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 25px;

    span {
        width: 3px;
        height: 3px;
        background-color: ${(props) => props.theme.ashColor};
        border-radius: 50%;
    }
`;

const ThreeDots = () => {
    return (
        <ThreeDotsWrapper>
            <span></span>
            <span></span>
            <span></span>
        </ThreeDotsWrapper>
    );
};

export default ThreeDots;
