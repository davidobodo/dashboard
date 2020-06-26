import React from 'react';
import Tag from '../tag/tag';
import Heading from '../texts/heading/heading';
import { GraphContainer } from './style';

import { GRAPH_TAGS, Y_AXIS, MONTHS } from '../../constants';

const Graph = () => {
    return (
        <GraphContainer>
            <div className="header">
                <div className="header__left-column">
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
                <div className="header__right-column">
                    <span>Month</span>
                    <span>Weekly</span>
                </div>
            </div>
            <div className="body">
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
