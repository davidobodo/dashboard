import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { SidebarWrapper } from './style';

import Heading from '../texts/heading/heading';

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

const Sidebar = () => {
    return (
        <SidebarWrapper>
            <div className="logo">
                <h2>
                    <span></span>Poli Clinic
                </h2>
            </div>
            <ul>
                <div className="heading-5">
                    <Heading light lightColor type="h5">
                        MANAGEMENTS
                    </Heading>
                </div>
                {MANAGEMENTS.map((item) => {
                    const { logo, title, active } = item;
                    return (
                        <li key={title} className={active ? 'active' : ''}>
                            <FontAwesomeIcon icon={logo} />
                            <Heading semibold lightColor type="h5">
                                {title}
                            </Heading>
                        </li>
                    );
                })}
            </ul>
            <ul>
                <div className="heading-5">
                    <Heading light lightColor type="h5">
                        SUPPORT
                    </Heading>
                </div>
                {SUPPORT.map((item) => {
                    const { logo, title } = item;
                    return (
                        <li key={title}>
                            <FontAwesomeIcon icon={logo} />
                            <Heading semibold lightColor type="h5">
                                {title}
                            </Heading>
                        </li>
                    );
                })}
            </ul>
        </SidebarWrapper>
    );
};

export default Sidebar;
