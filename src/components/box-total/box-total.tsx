import React from 'react';
import styled from 'styled-components';

const BoxTotalWrapper = styled.div`
    border: 1px solid blue;
    height: 70px;
    display: flex;
    padding: 12px;
    margin: ${(props) => props.theme.popularBoxMargin};
    flex: 1;

    .img-wrapper {
        margin-right: ${(props) => props.theme.popularBoxMargin};
    }
`;

const BoxTotal = () => {
    return (
        <BoxTotalWrapper>
            <div className="img-wrapper">image</div>
            <div>
                <h4>Total Patients</h4>
                <h3>24,908</h3>
            </div>
        </BoxTotalWrapper>
    );
};

export default BoxTotal;
