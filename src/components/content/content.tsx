import React from 'react';
import styled from 'styled-components';

import BoxTotal from '../box-total/box-total';

const ContentWrapper = styled.div`
    background-color: ${(props) => props.theme.lightBlue};
    flex: 1;
    padding: 30px;

    .content {
        &__header {
            display: flex;
            justify-content: space-between;
            margin: ${(props) => props.theme.popularBoxMargin};
        }

        &__body {
            &__top-section {
                display: flex;

                &__left {
                    flex-basis: 65%;

                    .total {
                        display: flex;
                    }

                    .graph {
                        border: 1px solid red;
                        height: 400px;
                        margin: ${(props) => props.theme.popularBoxMargin};
                    }
                }

                &__right {
                    border: 1px solid green;
                    flex-basis: 35%;
                    margin: ${(props) => props.theme.popularBoxMargin};
                }
            }
        }
    }
`;

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
                <div className="content__body__bottom-section"></div>
            </div>
        </ContentWrapper>
    );
};

export default Content;
