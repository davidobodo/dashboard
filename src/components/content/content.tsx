import React from 'react';

import BoxTotal from '../box-total/box-total';

import { ContentWrapper } from './style';
import Heading from '../texts/heading/heading';
import Day from '../day/day';
import TestCard from '../test-card/testCard';
import BottomRight from './bottomRight';
import BottomChart from './bottomChart';
import ThreeDots from '../three-dots/three-dots';
import Graph from './graph';

const DAYS = [
    {
        day: 'Mon',
        date: 16,
        active: false,
    },
    {
        day: 'Tue',
        date: 17,
        active: false,
    },
    {
        day: 'Wed',
        date: 18,
        active: true,
    },
    {
        day: 'Thr',
        date: 19,
        active: false,
    },
    {
        day: 'Fri',
        date: 20,
        active: false,
    },
    {
        day: 'Sat',
        date: 21,
        active: false,
    },
    {
        day: 'Sun',
        date: 22,
        active: false,
    },
    {
        day: 'Mon',
        date: 23,
        active: false,
    },
];

const Content = () => {
    return (
        <ContentWrapper>
            <div className="content__header">
                <div>
                    <Heading type="h3" veryBold darkColor>
                        Poli Overview
                    </Heading>
                    <Heading type="h4" semibold lightColor>
                        Welcome Back, David
                    </Heading>
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
                        <Graph />
                    </div>
                    <div className="content__body__top-section__right">
                        <div className="informations-header">
                            <Heading type="h4" veryBold darkColor>
                                Informations
                            </Heading>
                            <ThreeDots />
                        </div>
                        <div className="month-dropdown">
                            <Heading bold darkColor type="h5">
                                June
                            </Heading>
                            <span className="arrow"></span>
                        </div>
                        <div className="days">
                            {DAYS.map((item) => {
                                const { day, date, active } = item;
                                return (
                                    <Day
                                        key={day}
                                        active={active}
                                        day={day}
                                        date={date}
                                    />
                                );
                            })}
                        </div>

                        <div className="appointment-list">
                            <div className="header">
                                <Heading bold darkColor type="h5">
                                    Appointment List
                                </Heading>
                            </div>
                            <TestCard />
                            <TestCard />
                        </div>
                    </div>
                </div>
                <div className="content__body__bottom-section">
                    <div className="content__body__bottom-section__left">
                        <BottomChart />
                        <BottomChart />
                    </div>
                    <BottomRight />
                </div>
            </div>
        </ContentWrapper>
    );
};

export default Content;
