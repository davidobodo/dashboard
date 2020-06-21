import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const HeaderWrapper = styled.div`
    border: 1px solid blue;
    height: 70px;
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 42px;

    .left-side {
        display: flex;
        border: 1px solid ${(props) => props.theme.ashColor};
        align-items: center;
        padding: 0 20px;
        border-radius: 30px;

        .input-wrapper {
            border-right: 1px solid ${(props) => props.theme.ashColor};
            margin-right: 10px;
            padding: 10px 0;

            svg {
                font-size: 10px;
                margin-right: 10px;
                color: #96b2c9;
            }
            input {
                border: none;
                font-size: 10px;
                width: 200px;
                outline: transparent;

                ::placeholder {
                    color: #959ba9;
                }
            }
        }

        .dropdown {
            font-size: 10px;
            display: flex;
            align-items: center;

            &__label {
                margin-right: 10px;
                color: ${(props) => props.theme.veryDarkBlue};
                font-weight: 600;
            }

            &__direction {
                border-right: 1px solid #96b2c9;
                border-bottom: 1px solid #96b2c9;
                width: 6px;
                height: 6px;
                display: inline-block;
                transform: rotate(45deg) translateX(-1px);
            }
        }
    }
`;

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
                <div className="bell"></div>
                <div>
                    <div className="img-wrapper"></div>
                    <div>
                        <h5>Barly Vallendito</h5>
                        <h6>Admin Manager</h6>
                    </div>
                </div>
            </div>
        </HeaderWrapper>
    );
};

export default Header;
