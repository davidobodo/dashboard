import styled from 'styled-components';

export const SidebarWrapper = styled.div`
    width: 300px;
    height: 100%;
    padding: 30px 0 0 15px;
    box-shadow: rgba(79, 79, 79, 0.09) 0px 4px 10px;

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
