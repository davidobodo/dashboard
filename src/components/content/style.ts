import styled from 'styled-components';
import { devices } from '../../constants';

export const ContentWrapper = styled.div`
    background-color: ${(props) => props.theme.lightBlue};
    flex: 1;
    padding: 30px;

    .content {
        &__body {
        }
    }
`;

export const ContentHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin: ${(props) => props.theme.popularBoxMargin};

    button {
        padding: 15px 30px;
        color: #fff;
        font-weight: 500;
        border-radius: 10px;
        border: none;
        background-color: ${(props) => props.theme.darkBlue};
        font-size: 12px;
        letter-spacing: 1px;
        display: flex;
        align-items: center;

        span {
            margin-right: 5px;
            font-size: 20px;
        }
    }
`;

export const ContentBody = styled.div`
    .top-section {
        display: flex;

        @media ${devices.laptop} {
            flex-wrap: wrap;
        }

        .statistics {
            flex-basis: 65%;

            @media ${devices.laptop} {
                flex-basis: 100%;
            }

            .total {
                display: flex;
            }
        }
    }

    .bottom-section {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .doughnut-charts {
            flex-basis: 65%;
            display: flex;

            @media ${devices.laptop} {
                flex-basis: 100%;
            }
        }
    }
`;
