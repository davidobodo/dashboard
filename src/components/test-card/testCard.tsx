import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Heading from '../texts/heading/heading';

const TestCardContainer = styled.div`
    background-color: ${(props) => props.theme.lightBlue};
    border-radius: 15px;
    padding: 15px;
    position: relative;
    overflow: hidden;
    flex: 1;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:last-child {
        margin-bottom: 0px;
    }

    &:before {
        content: '';
        position: absolute;
        background-color: ${(props) => props.theme.darkBlue};
        width: 30px;
        height: 30px;
        bottom: 0;
        right: 0;
        border-top-left-radius: 15px;
    }

    &:after {
        content: '';
        position: absolute;
        border-right: 1px solid #fff;
        border-bottom: 1px solid #fff;
        width: 6px;
        height: 6px;
        display: inline-block;
        transform: rotate(-45deg);
        bottom: 13px;
        right: 13px;
    }

    .top {
        display: flex;

        .left-section {
            margin-right: 15px;
            background-color: #dcecff;
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
            justify-content: space-between;

            .card-title {
                margin-bottom: 2px;
            }
        }
    }

    .bottom {
        .disk {
            width: 20px;
            height: 20px;
            display: inline-block;
            border-radius: 50%;
            margin: -3px;
            border: 1px solid #fff;
            color: #fff;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            font-size: 8px;
            font-weight: 600;

            &:nth-child(1) {
                background-color: #224ca4;
            }
            &:nth-child(2) {
                background-color: #5d3fc5;
            }
            &:nth-child(3) {
                background-color: #3b76ef;
            }
            &:nth-child(4) {
                background-color: #aeddff;
            }
            &:nth-child(5) {
                background-color: #a66dd4;
            }
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
                    <div>
                        <div className="card-title">
                            <Heading bold darkColor type="h5">
                                Covid Swab Test
                            </Heading>
                        </div>
                        <Heading light lightColor type="h6">
                            8:00AM - 4:00PM
                        </Heading>
                    </div>
                    <Heading semibold darkColor type="h6">
                        120 Participants
                    </Heading>
                </div>
            </div>
            <div className="bottom">
                <span className="disk">HR</span>
                <span className="disk">JK</span>
                <span className="disk">LM</span>
                <span className="disk">OP</span>
                <span className="disk">AK</span>
            </div>
        </TestCardContainer>
    );
};

export default TestCard;
