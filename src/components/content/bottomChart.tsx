import React from 'react';
import styled from 'styled-components';
import Heading from '../texts/heading/heading';
import Tag from '../tag/tag';

const BottomChartContainer = styled.div`
    height: 300px;
    margin: ${(props) => props.theme.popularBoxMargin};
    flex: 1;
    border-radius: ${(props) => props.theme.myBorderRadius};
    background-color: #fff;
    padding: 20px;

    .header {
        display: flex;
        justify-content: space-between;
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
                <div>...</div>
            </div>
            <div className="tags-wrapper">
                <Tag title="Female" />
                <Tag title="male" />
            </div>
        </BottomChartContainer>
    );
};

export default BottomChart;
