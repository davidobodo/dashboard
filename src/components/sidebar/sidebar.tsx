import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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
        font-size: 12px;
        font-weight: 500;

        &.active {
            background: linear-gradient(
                to right,
                ${(props) => props.theme.lightBlue},
                #fff
            );
            border-color: ${(props) => props.theme.darkBlue};
        }
    }

    h5 {
        padding-left: 30px;
        font-weight: 200;
        letter-spacing: 1px;
        margin-bottom: 5px;
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
                <h5>MANAGEMENTS</h5>
                {MANAGEMENTS.map((item) => {
                    const { logo, title, active } = item;
                    return (
                        <li key={title} className={active ? 'active' : ''}>
                            <FontAwesomeIcon icon={logo} />
                            {title}
                        </li>
                    );
                })}
            </ul>
            <ul>
                <h5>SUPPORT</h5>
                {SUPPORT.map((item) => {
                    const { logo, title } = item;
                    return (
                        <li key={title}>
                            <FontAwesomeIcon icon={logo} />
                            {title}
                        </li>
                    );
                })}
            </ul>
        </SidebarWrapper>
    );
};

export default Sidebar;
