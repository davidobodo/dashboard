import React from 'react';

import { DoughnutContainer } from './style';

const Doughnut = () => {
    return (
        <DoughnutContainer>
            <div className="segment"></div>
            <div className="segment"></div>
            <div className="segment"></div>
            <div className="segment"></div>
            <div className="inner-circle"></div>
        </DoughnutContainer>
    );
};

export default Doughnut;
