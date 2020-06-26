import React from 'react';
import styled from 'styled-components';
import Heading from '../texts/heading/heading';
import Tag from '../tag/tag';
import ThreeDots from '../three-dots/three-dots';
import Doughnut from '../doughnut-chart/doughnut-chart';

const GENDER_TAGS = [
    {
        title: 'Female',
        color: '#0075ff',
    },
    {
        title: 'Male',
        color: '#e2eefe',
    },
];

const BottomChartContainer = styled.div`
    margin: ${(props) => props.theme.popularBoxMargin};
    flex: 1;
    border-radius: ${(props) => props.theme.myBorderRadius};
    background-color: #fff;
    padding: 20px;

    .header {
        display: flex;
        justify-content: space-between;
    }

    .doughnut-wrapper {
        display: flex;
        justify-content: center;
        margin: 20px 0;
    }

    .tags-wrapper {
        display: flex;
    }
`;

const BottomChart = () => {
    return (
        <BottomChartContainer>
            <div className="header">
                <Heading type="h4" veryBold darkColor>
                    Patient By Gender
                </Heading>
                <ThreeDots />
            </div>
            <div className="doughnut-wrapper">
                <Doughnut />
            </div>
            <div className="tags-wrapper">
                {GENDER_TAGS.map((item) => {
                    const { title, color } = item;
                    return <Tag key={title} title={title} color={color} />;
                })}
            </div>
        </BottomChartContainer>
    );
};

export default BottomChart;
