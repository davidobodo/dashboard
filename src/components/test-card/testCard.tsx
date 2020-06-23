import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Heading from '../texts/heading/heading';

const TestCardContainer = styled.div`
    background-color: ${(props) => props.theme.lightBlue};
    border-radius: ${(props) => props.theme.myBorderRadius};
    padding: 10px;

    .top {
        display: flex;

        .left-section {
            margin-right: 25px;
            background-color: #dcecff;
            width: 50px;
            height: 50px;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;

const TestCard = () => {
    return (
        <TestCardContainer>
            <div className="top">
                <div className="left-section">
                    <FontAwesomeIcon icon={faPlus} />
                </div>
                <div className="right-section">
                    <Heading bold darkColor type="h5">
                        Covid Swab Test
                    </Heading>
                    <Heading light lightColor type="h6">
                        8:00AM - 4:00PM
                    </Heading>
                    <Heading semibold darkColor type="h6">
                        120 Participants
                    </Heading>
                </div>
            </div>
        </TestCardContainer>
    );
};

export default TestCard;
