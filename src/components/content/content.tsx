import React from 'react';

import BoxTotal from '../box-total/box-total';

import { ContentWrapper, ContentHeader, ContentBody } from './style';
import Heading from '../texts/heading/heading';
import BottomRight from './bottomRight';
import BottomChart from './bottomChart';
import Graph from './graph';
import Informations from './informations';
import { GENDER_TAGS, GROUPS_TAGS } from '../../constants';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faPassport } from '@fortawesome/free-solid-svg-icons';

const Content = () => {
    return (
        <ContentWrapper>
            <ContentHeader>
                <section>
                    <Heading type="h3" veryBold darkColor>
                        Poli Overview
                    </Heading>
                    <Heading type="h4" semibold lightColor>
                        Welcome Back, David
                    </Heading>
                </section>
                <button>
                    <span>+</span> Register Patient
                </button>
            </ContentHeader>
            <ContentBody>
                <div className="top-section">
                    <div className="statistics">
                        <div className="total">
                            <BoxTotal />
                            <BoxTotal />
                            <BoxTotal />
                        </div>
                        <Graph />
                    </div>
                    <Informations />
                </div>
                <div className="bottom-section">
                    <div className="doughnut-charts">
                        <BottomChart
                            title="Patient By Gender"
                            value={GENDER_TAGS}
                            icon={faPlus}
                        />
                        <BottomChart
                            title="Top Patient By Group"
                            value={GROUPS_TAGS}
                            icon={faPassport}
                        />
                    </div>
                    <BottomRight />
                </div>
            </ContentBody>
        </ContentWrapper>
    );
};

export default Content;
