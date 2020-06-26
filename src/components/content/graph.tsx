import React from 'react';
import styled from 'styled-components';
import Tag from '../tag/tag';
import Heading from '../texts/heading/heading';

const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];
const Y_AXIS = [100, 80, 60, 40, 20, 0];

const GRAPH_TAGS = [
    {
        title: 'Positive Covid',
        color: '#0075ff',
    },
    {
        title: 'Recovered Covid',
        color: '#5fe1e0',
    },
];

const GraphContainer = styled.div`
    height: 400px;
    margin: ${(props) => props.theme.popularBoxMargin};
    background-color: #fff;
    border-radius: ${(props) => props.theme.myBorderRadius};
    padding: 20px;
    display: flex;
    flex-direction: column;

    .graph-wrapper {
        &__header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;

            &__left-column {
                .covid-stats-header {
                    margin-bottom: 15px;
                }

                .tags-wrapper {
                    display: flex;

                    .tag {
                        border: 1px solid ${(props) => props.theme.ashColor};
                        display: flex;
                        align-items: center;
                        padding: 3px 5px;
                        border-radius: 5px;
                        margin-right: 10px;

                        .bullet {
                            width: 10px;
                            height: 10px;
                            display: inline-block;
                            background-color: ${(props) =>
                                props.theme.darkBlue};
                            border-radius: 3px;
                            margin-right: 5px;
                        }
                    }
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

        &__body {
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
    }
`;

const Graph = () => {
    return (
        <GraphContainer>
            <div className="graph-wrapper__header">
                <div className="graph-wrapper__header__left-column">
                    <div className="covid-stats-header">
                        <Heading type="h4" veryBold darkColor>
                            Patients Covid Statistics
                        </Heading>
                    </div>
                    <div className="tags-wrapper">
                        {GRAPH_TAGS.map((item) => {
                            const { title, color } = item;
                            return (
                                <Tag key={title} title={title} color={color} />
                            );
                        })}
                    </div>
                </div>
                <div className="graph-wrapper__header__right-column">
                    <span>Month</span>
                    <span>Weekly</span>
                </div>
            </div>
            <div className="graph-wrapper__body">
                <ul className="y-axis">
                    {Y_AXIS.map((val) => {
                        return (
                            <li key={val}>
                                <Heading semibold lightColor type="h5">
                                    {val}
                                </Heading>
                            </li>
                        );
                    })}
                </ul>
                <div className="x-axis">
                    {MONTHS.map((month) => {
                        return (
                            <Heading key={month} semibold lightColor type="h5">
                                {month}
                            </Heading>
                        );
                    })}
                </div>
            </div>
        </GraphContainer>
    );
};

export default Graph;
