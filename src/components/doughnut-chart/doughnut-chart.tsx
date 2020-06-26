import React from 'react';

import { DoughnutContainer } from './style';

const Doughnut = () => {
    return (
        <DoughnutContainer>
            <div className="wrapper">
                <div className="segment"></div>
                <div className="segment"></div>
                <div className="segment"></div>
                <div className="segment"></div>
                <div className="inner-circle"></div>
            </div>
        </DoughnutContainer>
    );
};

export default Doughnut;
