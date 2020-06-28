import React from 'react';
import styled from 'styled-components';
import Heading from '../texts/heading/heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ThreeDots from '../three-dots/three-dots';

const BottomRightContainer = styled.div`
    margin: ${(props) => props.theme.popularBoxMargin};
    flex: 1;
    flex-basis: 30%;
    border-radius: ${(props) => props.theme.myBorderRadius};
    background-color: ${(props) => props.theme.primaryBackground};
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 300px;

    .header {
        display: flex;
        justify-content: space-between;
    }

    .body {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .division {
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
                justify-content: space-evenly;
            }
        }
    }

    button {
        background-color: ${(props) => props.theme.lightBlue};
        color: ${(props) => props.theme.darkBlue};
        border: 0;
        width: 100%;
        border-radius: 10px;
        padding: 15px;
        font-size: 10px;
        font-weight: 600;
    }
`;

const BottomRight = () => {
    return (
        <BottomRightContainer>
            <div className="header">
                <Heading type="h4" veryBold darkColor>
                    Polyclinic Division
                </Heading>
                <ThreeDots />
            </div>
            <div className="body">
                {[1, 2, 3].map((item) => {
                    return (
                        <div key={item} className="division">
                            <div className="left-section">
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                            <div className="right-section">
                                <Heading type="h4" veryBold darkColor>
                                    Dental Polyclinic
                                </Heading>
                                <Heading light lightColor type="h6">
                                    8:00AM - 4:00PM
                                </Heading>
                            </div>
                        </div>
                    );
                })}
            </div>

            <button>See More Polyclinic</button>
        </BottomRightContainer>
    );
};

export default BottomRight;
