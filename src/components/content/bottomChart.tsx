import React from 'react';
import styled from 'styled-components';
import Heading from '../texts/heading/heading';
import Tag from '../tag/tag';
import ThreeDots from '../three-dots/three-dots';
import Doughnut from '../doughnut-chart/doughnut-chart';
import { TAG_DETAILS } from './interface';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

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

interface Props {
    title: string;
    value: Array<TAG_DETAILS>;
    icon: IconDefinition;
}

const BottomChart: React.FC<Props> = ({ title, value, icon }) => {
    return (
        <BottomChartContainer>
            <div className="header">
                <Heading type="h4" veryBold darkColor>
                    {title}
                </Heading>
                <ThreeDots />
            </div>
            <div className="doughnut-wrapper">
                <Doughnut segments={value} icon={icon} />
            </div>
            <div className="tags-wrapper">
                {value.map((item) => {
                    const { title, color } = item;
                    return <Tag key={title} title={title} color={color} />;
                })}
            </div>
        </BottomChartContainer>
    );
};

export default BottomChart;
