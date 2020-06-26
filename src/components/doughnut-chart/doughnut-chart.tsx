import React from 'react';
import { DoughnutContainer, Segment } from './style';
import { DoughnutProps } from './interface';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Doughnut: React.FC<DoughnutProps> = ({ segments, icon }) => {
    return (
        <DoughnutContainer>
            <div className="wrapper">
                {segments.map((item) => {
                    const { color, amount, title, offset } = item;
                    return (
                        <Segment
                            key={title}
                            amount={amount}
                            color={color}
                            offset={offset}
                        ></Segment>
                    );
                })}
                <div className="inner-circle">
                    <div className="another-inner-circle">
                        <FontAwesomeIcon icon={icon} />
                    </div>
                </div>
            </div>
        </DoughnutContainer>
    );
};

export default Doughnut;
