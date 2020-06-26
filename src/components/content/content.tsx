import React from 'react';

import BoxTotal from '../box-total/box-total';

import { ContentWrapper } from './style';
import Heading from '../texts/heading/heading';
import BottomRight from './bottomRight';
import BottomChart from './bottomChart';
import Graph from './graph';
import Informations from './informations';

const Content = () => {
    return (
        <ContentWrapper>
            <div className="content__header">
                <div>
                    <Heading type="h3" veryBold darkColor>
                        Poli Overview
                    </Heading>
                    <Heading type="h4" semibold lightColor>
                        Welcome Back, David
                    </Heading>
                </div>
                <button>
                    <span>+</span> Register Patient
                </button>
            </div>
            <div className="content__body">
                <div className="content__body__top-section">
                    <div className="content__body__top-section__left">
                        <div className="total">
                            <BoxTotal />
                            <BoxTotal />
                            <BoxTotal />
                        </div>
                        <Graph />
                    </div>
                    <Informations />
                </div>
                <div className="content__body__bottom-section">
                    <div className="content__body__bottom-section__left">
                        <BottomChart />
                        <BottomChart />
                    </div>
                    <BottomRight />
                </div>
            </div>
        </ContentWrapper>
    );
};

export default Content;
