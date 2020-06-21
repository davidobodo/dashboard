import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Heading5 from '../texts/heading-5/heading-5';

const MANAGEMENTS = [
    {
        title: 'Overview',
        logo: faPlus,
        active: true,
    },
    {
        title: 'Statistics',
        logo: faPlus,
    },
    {
        title: 'Patients',
        logo: faPlus,
    },
    {
        title: 'PolyClinic',
        logo: faPlus,
    },
    {
        title: 'Doctors',
        logo: faPlus,
    },
    {
        title: 'Medicines',
        logo: faPlus,
    },
];

const SUPPORT = [
    {
        title: 'Messages',
        logo: faPlus,
    },
    {
        title: 'Settings',
        logo: faPlus,
    },
];

const SidebarWrapper = styled.div`
    border: 1px solid black;
    width: 300px;
    height: 100%;
    padding: 30px 0 0 15px;

    ul {
        margin-bottom: 30px;
    }

    li {
        list-style: none;
        padding: 15px 30px;
        display: flex;
        align-items: center;
        border-left: 4px solid transparent;

        &.active {
            background: linear-gradient(
                to right,
                ${(props) => props.theme.lightBlue},
                #fff
            );
            border-color: ${(props) => props.theme.darkBlue};
        }
    }

    .logo {
        margin-bottom: 40px;

        h2 {
            color: ${(props) => props.theme.darkBlue};
            display: flex;
            align-items: center;
            padding-left: 30px;

            span {
                background-color: ${(props) => props.theme.darkBlue};
                width: 20px;
                height: 20px;
                display: inline-block;
                border-radius: 50%;
            }
        }
    }

    //-----------------------------------------------
    //component overrides/adjustments
    //-----------------------------------------------

    h5 {
        padding-left: 30px;
        margin-bottom: 5px;
    }

    li {
        h5 {
            padding-left: 0px;
            margin-bottom: 0px;
        }
    }
`;

const Sidebar = () => {
    return (
        <SidebarWrapper>
            <div className="logo">
                <h2>
                    <span></span>Poli Clinic
                </h2>
            </div>
            <ul>
                <Heading5 light>MANAGEMENTS</Heading5>
                {MANAGEMENTS.map((item) => {
                    const { logo, title, active } = item;
                    return (
                        <li key={title} className={active ? 'active' : ''}>
                            <FontAwesomeIcon icon={logo} />
                            <Heading5 semibold>{title}</Heading5>
                        </li>
                    );
                })}
            </ul>
            <ul>
                <Heading5 light>SUPPORT</Heading5>
                {SUPPORT.map((item) => {
                    const { logo, title } = item;
                    return (
                        <li key={title}>
                            <FontAwesomeIcon icon={logo} />
                            <Heading5 semibold>{title}</Heading5>
                        </li>
                    );
                })}
            </ul>
        </SidebarWrapper>
    );
};

export default Sidebar;
