import React from 'react';

import styled from 'styled-components';
import ThreeDots from '../three-dots/three-dots';
import Heading from '../texts/heading/heading';
import TestCard from '../test-card/testCard';
import Day from '../day/day';

import { devices } from '../../constants';

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

const InformationsWrapper = styled.div`
    flex-basis: 30%;
    flex: 1;
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
`;

const Informations = () => {
    return (
        <InformationsWrapper>
            <header className="informations-header">
                <Heading type="h4" veryBold darkColor>
                    Informations
                </Heading>
                <ThreeDots />
            </header>
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
                        <Day key={day} active={active} day={day} date={date} />
                    );
                })}
            </div>

            <div className="appointment-list">
                <header className="header">
                    <Heading bold darkColor type="h5">
                        Appointment List
                    </Heading>
                </header>
                <TestCard />
                <TestCard />
            </div>
        </InformationsWrapper>
    );
};

export default Informations;
