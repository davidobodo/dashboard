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

const COVID_INFO = [
    {
        tag: 'Infected',
        number: '8.119.575',
    },
    {
        tag: 'Recovered',
        number: '4.231.974',
    },
    {
        tag: 'Deaths',
        number: '439.217',
    },
];

const Sidebar = () => {
    return (
        <SidebarWrapper>
            <section>
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
                                <Heading
                                    semibold
                                    lightColor={active ? false : true}
                                    darkBlueColor={active ? true : false}
                                    type="h5"
                                >
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
            </section>
            <section>
                <div className="sidebar-info">
                    <Heading bold darkColor type="h5">
                        Covid Informations
                    </Heading>
                    <div className="world">
                        <Heading type="h6" light darkBlueColor>
                            World
                        </Heading>
                    </div>
                    <div className="stat-wrapper">
                        {COVID_INFO.map((item) => {
                            const { tag, number } = item;
                            return (
                                <div className="stat" key={tag}>
                                    <Heading type="h6" light>
                                        {tag} -
                                    </Heading>
                                    <Heading type="h6" darkColor bold>
                                        {number}
                                    </Heading>
                                </div>
                            );
                        })}
                    </div>

                    <button>Check Covid</button>
                </div>
                <footer className="footer">
                    <Heading type="h6" darkColor veryBold>
                        &copy; Poli Clinic. 2020
                    </Heading>
                    <Heading type="h6" semibold lightColor>
                        Poli Clinic is a medical management for all doctors,
                        patient &amp; staff.
                    </Heading>
                </footer>
            </section>
        </SidebarWrapper>
    );
};

export default Sidebar;
