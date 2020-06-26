import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Heading from '../texts/heading/heading';
import { TestCardContainer } from './style';

const TestCard = () => {
    return (
        <TestCardContainer>
            <div className="top">
                <div className="img">
                    <FontAwesomeIcon icon={faPlus} />
                </div>
                <div className="description">
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
