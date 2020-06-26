import styled from 'styled-components';
import { devices } from '../../constants';
import { Props } from './IHamburger';

export const HamburgerContainer = styled.div<Props>`
    position: fixed;
    z-index: 50;
    right: 45px;
    top: 35px;
    cursor: pointer;

    @media ${devices.mobile}{
        display: none;
    }

    .hamburger{
            width: 25px;
            height: 3px;
            background-color: #000000;
            align-self: center;
            ${({ isNavbarOpen }) =>
                isNavbarOpen && 'height: 0'}; // change icon to cancel icon
            

            &:before{
                content: '';
                width: 25px;
                height: 3px;
                background-color: inherit;
                position: absolute;
                top: -7px;
                transition: all 0.5s ease-in-out;
                ${({ isNavbarOpen }) =>
                    isNavbarOpen && 'top: 0; transform: rotate(45deg)'};
            }

            &:after{
                content: '';
                width: 25px;
                height: 3px;
                background-color: inherit;
                position: absolute;
                top: 7px;
                transition: all 0.5s ease-in-out;
                ${({ isNavbarOpen }) =>
                    isNavbarOpen && 'top: 0; transform: rotate(-45deg)'};
            }
        }
    }

    .click-box{
        height: 20px;
        position: absolute;
        width: 100%;
        top: -10px;
    }
`;
