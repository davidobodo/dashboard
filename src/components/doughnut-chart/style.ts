import styled from 'styled-components';
import { TAG_DETAILS } from '../content/interface';
import { devices } from '../../constants';

export const DoughnutContainer = styled.div`
    width: 220px;
    height: 220px;
    justify-content: center;
    display: flex;
    align-items: center;
    background-color: #f3faff;
    border-radius: 100%;

    @media ${devices.mobile} {
        width: 170px;
        height: 170px;
    }

    .wrapper {
        position: relative;
        height: calc(var(--size, 200) * 1px);
        width: calc(var(--size, 200) * 1px);
        background: #639;
        border-radius: 100%;
        overflow: hidden;

        @media ${devices.mobile} {
            height: calc(var(--size, 150) * 1px);
            width: calc(var(--size, 150) * 1px);
        }

        .inner-circle {
            width: 150px;
            height: 150px;
            background-color: #fff;
            position: absolute;
            left: 25px;
            top: 25px;
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            @media ${devices.mobile} {
                width: 100px;
                height: 100px;
            }

            .another-inner-circle {
                width: 60px;
                height: 60px;
                border-radius: 100%;
                box-shadow: 0px 0px 8px -2px rgba(0, 0, 0, 0.1);
                display: flex;
                justify-content: center;
                align-items: center;

                @media ${devices.mobile} {
                    width: 30px;
                    height: 30px;
                }

                svg {
                    opacity: 0.2;
                }
            }
        }
    }
`;

export const Segment = styled.div<Partial<TAG_DETAILS>>`
    ${({ amount }) => amount && `--value: ${amount};`}
    ${({ color }) => color && `--bg: ${color};`}
    ${({ offset }) => offset && `--offset: ${offset};`}
    --over50: ${({ amount }) => (amount && amount > 50 ? '1' : '0')};


    --a: calc(var(--over50, 0) * -100%);
    --b: calc((1 + var(--over50, 0)) * 100%);
    --degrees: calc((var(--offset, 0) / 100) * 360);
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translate(0, -50%) rotate(90deg)
        rotate(calc(var(--degrees) * 1deg));
    transform-origin: 50% 100%;
    clip-path: polygon(
        var(--a) var(--a),
        var(--b) var(--a),
        var(--b) var(--b),
        var(--a) var(--b)
    );

    &:after,
    &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: var(--bg, #374c3c);
    }

    &:after {
        opacity: var(--over50, 0);
    }

    &:before {
        --degrees: calc((var(--value, 45) / 100) * 360);
        transform: translate(0, 100%)
            rotate(calc(var(--degrees) * 1deg));
        transform-origin: 50% 0;
    }

`;
