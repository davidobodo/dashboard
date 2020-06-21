import React from 'react';
import styled from 'styled-components';

const MANAGEMENTS = [
    {
        title: 'Overview',
        logo: 'he',
    },
    {
        title: 'Statistics',
        logo: 'me',
    },
    {
        title: 'Patients',
        logo: 'for',
    },
    {
        title: 'PolyClinic',
        logo: 'th',
    },
    {
        title: 'Doctors',
        logo: 'do',
    },
    {
        title: 'Medicines',
        logo: 'me',
    },
];

const SUPPORT = [
    {
        title: 'Messages',
        logo: 'd',
    },
    {
        title: 'Settings',
        logo: 'i',
    },
];

const SidebarWrapper = styled.div`
    border: 1px solid black;
    width: 300px;
    height: 100%;
    padding: 30px 0 0 15px;

    li {
        list-style: none;
        padding-left: 30px;
    }

    h5 {
        padding-left: 30px;
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
                    const { logo, title } = item;
                    return <li key={title}>{title}</li>;
                })}
            </ul>
            <ul>
                <h5>SUPPORT</h5>
                {SUPPORT.map((item) => {
                    const { logo, title } = item;
                    return <li key={title}>{title}</li>;
                })}
            </ul>
        </SidebarWrapper>
    );
};

export default Sidebar;
