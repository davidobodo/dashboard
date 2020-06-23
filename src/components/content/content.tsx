import React from 'react';

import BoxTotal from '../box-total/box-total';

import { ContentWrapper } from './style';
import Heading from '../texts/heading/heading';

const Content = () => {
    return (
        <ContentWrapper>
            <div className="content__header">
                <div>
                    <Heading type="h3" bold darkColor>
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
                        <div className="graph"> my graph</div>
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
