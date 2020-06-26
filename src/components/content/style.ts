import styled from 'styled-components';
import { devices } from '../../constants';

export const ContentWrapper = styled.div`
    background-color: ${(props) => props.theme.lightBlue};
    flex: 1;
    padding: 30px;

    .content {
        &__body {
        }
    }
`;

export const ContentHeader = styled.div`
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
`;

export const ContentBody = styled.div`
    .top-section {
        display: flex;

        @media ${devices.tablet} {
            flex-wrap: wrap;
        }

        .statistics {
            flex-basis: 65%;

            @media ${devices.tablet} {
                flex-basis: 100%;
            }

            .total {
                display: flex;
            }
        }
    }

    .bottom-section {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .doughnut-charts {
            flex-basis: 65%;
            display: flex;

            @media ${devices.tablet} {
                flex-basis: 100%;
            }
        }
    }
`;

export const GraphContainer = styled.div`
    height: 400px;
    margin: ${(props) => props.theme.popularBoxMargin};
    background-color: #fff;
    border-radius: ${(props) => props.theme.myBorderRadius};
    padding: 20px;
    display: flex;
    flex-direction: column;

    .header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;

        &__left-column {
            .covid-stats-header {
                margin-bottom: 15px;
            }

            .tags-wrapper {
                display: flex;
            }
        }

        &__right-column {
            background-color: ${(props) => props.theme.lightBlue};
            padding: 15px 10px;
            border-radius: 10px;
            align-self: flex-start;
            font-size: 10px;
            font-weight: 800;

            span {
                padding: 7px 25px;
                color: rgba(0, 0, 0, 0.5);

                &:nth-child(1) {
                    background-color: #fff;
                    border-radius: 8px;
                    color: ${(props) => props.theme.darkBlue};
                }
            }
        }
    }

    .body {
        flex: 1;
        display: flex;
        flex-direction: column;

        .y-axis {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            list-style: none;
            flex: 1;
        }

        .x-axis {
            display: flex;
            justify-content: space-between;
            padding-left: 30px;

            div {
                position: relative;

                &:before {
                    content: '';
                    position: absolute;
                    background-color: ${(props) => props.theme.ashColor};
                    width: 1px;
                    height: 250px;
                    left: 50%;
                    bottom: 20px;
                }
            }
        }
    }
`;
