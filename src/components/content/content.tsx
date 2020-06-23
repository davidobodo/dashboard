import React from 'react';

import BoxTotal from '../box-total/box-total';

import { ContentWrapper } from './style';

const Content = () => {
    return (
        <ContentWrapper>
            <div className="content__header">
                <div>
                    <h3>Poli Overview</h3>
                    <h4>Welcome Back, Barly</h4>
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
