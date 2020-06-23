import React from 'react';

import BoxTotal from '../box-total/box-total';

import { ContentWrapper } from './style';
import Heading from '../texts/heading/heading';

const Content = () => {
    return (
        <ContentWrapper>
            <div className="content__header">
                <div>
                    <Heading type="h3" veryBold darkColor>
                        Poli Overview
                    </Heading>
                    <Heading type="h4" semibold lightColor>
                        Welcome Back, Barly
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
                        <div className="graph">
                            <div className="graph__innerTop">
                                <div className="graph__innerTop__left-column">
                                    <div className="covid-stats-header">
                                        <Heading type="h4" veryBold darkColor>
                                            Patients Covid Statistics
                                        </Heading>
                                    </div>
                                    <div className="tags-wrapper">
                                        {[1, 2].map((item) => {
                                            return (
                                                <div key={item} className="tag">
                                                    <span className="bullet"></span>
                                                    <Heading
                                                        type="h6"
                                                        bold
                                                        lightColor
                                                    >
                                                        Positive Covid
                                                    </Heading>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className="graph__innerTop__right-column">
                                    <span>Month</span>
                                    <span>Weekly</span>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div className="content__body__top-section__right"></div>
                </div>
                <div className="content__body__bottom-section">
                    <div className="content__body__bottom-section__left">
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>
                    <div className="content__body__bottom-section__right"></div>
                </div>
            </div>
        </ContentWrapper>
    );
};

export default Content;
