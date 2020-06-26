import styled from 'styled-components';
import { devices } from '../../constants';
import { Props } from './IHamburger';

export const HamburgerContainer = styled.div<Props>`
    position: absolute;
    z-index: 50;
    left: 20px;
    top: 55px;
    cursor: pointer;

    @media ${devices.tablet}{
        display: none;
    }


    .hamburger{
            width: 25px;
            height: 3px;
            background-color: rgba(0,0,0,0.5);
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
