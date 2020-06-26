import styled from 'styled-components';
import { devices } from '../../constants';

export const SidebarWrapper = styled.div`
    width: 250px;
    padding: 30px 0 40px 15px;
    box-shadow: rgba(79, 79, 79, 0.09) 0px 4px 10px;
    clip-path: inset(0px -15px 0px 0px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-shrink: 0;

    @media ${devices.tablet} {
        display: none;
    }

    ul {
        margin-bottom: 30px;
    }

    li {
        list-style: none;
        padding: 15px 30px;
        display: flex;
        align-items: center;
        border-left: 4px solid transparent;

        svg {
            margin-right: 10px;
            color: rgba(0, 0, 0, 0.4);
        }

        &.active {
            background: linear-gradient(
                to right,
                ${(props) => props.theme.lightBlue},
                #fff
            );
            border-color: ${(props) => props.theme.darkBlue};

            svg {
                color: ${(props) => props.theme.darkBlue};
            }
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

    .sidebar-info {
        background-color: ${(props) => props.theme.lightBlue};
        padding: 15px;
        border-radius: 10px;
        margin: 30px;

        .world {
            margin: 10px 0px;
        }

        .stat-wrapper {
            margin-bottom: 10px;

            .stat {
                display: flex;
                margin-bottom: 5px;
            }
        }

        button {
            background-color: ${(props) => props.theme.darkBlue};
            color: #fff;
            padding: 10px 25px;
            border: none;
            border-radius: 10px;
            font-size: 10px;
            width: 100%;
        }
    }

    .footer {
        padding: 30px;
        margin-top: 15px;
        border-top: 1px solid ${(props) => props.theme.ashColor};

        div {
            margin-bottom: 5px;
        }
    }

    //-----------------------------------------------
    //component overrides/adjustments
    //-----------------------------------------------

    .heading-5 {
        margin-bottom: 5px;
        padding-left: 30px;
    }

    li {
        h5 {
            padding-left: 0px;
            margin-bottom: 0px;
        }
    }
`;
