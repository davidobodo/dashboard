import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';

import Heading from '../texts/heading/heading';

import { HeaderWrapper } from './style';

import pic from '../../assets/pic.jpeg';

const Header = () => {
    return (
        <HeaderWrapper>
            <div className="left-side">
                <div className="input-wrapper">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" placeholder="Search..." />
                </div>
                <div className="dropdown">
                    <span className="dropdown__label">Filter</span>
                    <span className="dropdown__direction"></span>
                </div>
            </div>
            <div className="right-side">
                <div className="bell">
                    <FontAwesomeIcon icon={faBell} />
                </div>
                <div className="user-info">
                    <div className="img-wrapper">
                        <img src={pic} alt="pic" />
                    </div>
                    <div>
                        <Heading type="h5" bold>
                            Obodo David
                        </Heading>
                        <Heading type="h6" semibold lightColor>
                            Admin Manager
                        </Heading>
                    </div>
                </div>
            </div>
        </HeaderWrapper>
    );
};

export default Header;
