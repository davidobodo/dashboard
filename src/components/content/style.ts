import styled from 'styled-components';
import { devices } from '../../constants';

export const ContentWrapper = styled.div`
    background-color: ${(props) => props.theme.lightBlue};
    flex: 1;
    padding: 30px;

    .content {
        &__header {
            display: flex;
            justify-content: space-between;
            margin: ${(props) => props.theme.popularBoxMargin};

            button {
                padding: 15px 30px;
                color: #fff;
                font-weight: 500;
                border-radius: 10px;
                border: none;
                background-color: ${(props) => props.theme.darkBlue};
                font-size: 12px;
                letter-spacing: 1px;
                display: flex;
                align-items: center;

                span {
                    margin-right: 5px;
                    font-size: 20px;
                }
            }
        }

        &__body {
            &__top-section {
                display: flex;

                @media ${devices.laptop} {
                    flex-wrap: wrap;
                }

                &__left {
                    flex-basis: 65%;

                    @media ${devices.laptop} {
                        flex-basis: 100%;
                    }

                    .total {
                        display: flex;
                    }
                }

                &__right {
                    flex-basis: 35%;
                    margin: ${(props) => props.theme.popularBoxMargin};
                    border-radius: ${(props) => props.theme.myBorderRadius};
                    background-color: #fff;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;

                    @media ${devices.laptop} {
                        flex-basis: 100%;
                    }

                    .informations-header {
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 20px;
                    }

                    .month-dropdown {
                        border: 1px solid ${(props) => props.theme.ashColor};
                        padding: 10px;
                        border-radius: 10px;
                        display: inline-flex;
                        width: 70px;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 25px;

                        .arrow {
                            border-right: 1px solid #96b2c9;
                            border-bottom: 1px solid #96b2c9;
                            width: 6px;
                            height: 6px;
                            display: inline-block;
                            transform: rotate(45deg) translateX(-1px);
                        }
                    }

                    .days {
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 25px;
                    }

                    .appointment-list {
                        flex: 1;
                        display: flex;
                        flex-direction: column;

                        .header {
                            margin-bottom: 10px;
                        }
                    }
                }
            }

            &__bottom-section {
                display: flex;
                flex-wrap: wrap;

                &__left {
                    flex-basis: 65%;
                    display: flex;

                    .box {
                    }
                }
            }
        }
    }
`;
