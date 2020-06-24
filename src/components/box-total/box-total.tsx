import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Heading from '../texts/heading/heading';

const BoxTotalWrapper = styled.div`
    display: flex;
    padding: 20px;
    margin: ${(props) => props.theme.popularBoxMargin};
    background-color: #fff;
    flex: 1;
    border-radius: 20px;

    .left-section {
        margin-right: 20px;
        background-color: ${(props) => props.theme.lightBlue};
        width: 50px;
        height: 50px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .right-section {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
`;

const BoxTotal = () => {
    return (
        <BoxTotalWrapper>
            <div className="left-section">
                <FontAwesomeIcon icon={faPlus} />
            </div>
            <div className="right-section">
                <Heading semibold lightColor type="h5">
                    Total Patients
                </Heading>
                <Heading type="h3" bold darkColor>
                    24,908
                </Heading>
            </div>
        </BoxTotalWrapper>
    );
};

export default BoxTotal;
