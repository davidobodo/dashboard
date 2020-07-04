import React from 'react';
import styled from 'styled-components';
import Heading from '../texts/heading/heading';

interface DayProps {
    day: string;
    date: number;
    active?: boolean;
}

const DayContainer = styled.div<Partial<DayProps>>`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 10px 4px;
    border-radius: 20px;

    ${({ active }) => active && `background-color: #f0f7fd`};

    .day-wrapper {
        margin-bottom: 10px;
    }

    .date-wrapper {
        position: relative;

        .dot {
            width: 3px;
            height: 3px;
            background-color: ${(props) => props.theme.darkBlue};
            position: absolute;
            right: -3px;
            top: -2px;
            display: block;
            border-radius: 50%;
            display: none;

            ${({ active }) => active && `display: block`};
        }
    }
`;

const Day: React.FC<DayProps> = ({ day, date, active }) => {
    //const { day, date, active } = props;

    return (
        <DayContainer active={active}>
            <div className="day-wrapper">
                <Heading
                    semibold
                    lightColor={active ? false : true}
                    darkBlueColor={active ? true : false}
                    type="h6"
                >
                    {day}
                </Heading>
            </div>
            <div className="date-wrapper">
                <span className="dot"></span>
                <Heading
                    bold
                    darkColor={active ? false : true}
                    darkBlueColor={active ? true : false}
                    type="h6"
                >
                    {date}
                </Heading>
            </div>
        </DayContainer>
    );
};

export default Day;
