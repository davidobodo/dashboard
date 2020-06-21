import styled from 'styled-components';

export const HeaderWrapper = styled.div`
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

    .right-side {
        display: flex;
        align-items: center;

        .bell {
            margin-right: 15px;
            background-color: ${(props) => props.theme.lightBlue};
            border-radius: 50%;
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .user-info {
            background-color: ${(props) => props.theme.lightBlue};
            display: flex;
            padding: 10px;
            border-radius: 12px;

            .img-wrapper {
                width: 25px;
                height: 25px;
                overflow: hidden;
                border-radius: 50%;
                margin-right: 10px;

                img {
                    width: 100%;
                }
            }
        }
    }
`;
