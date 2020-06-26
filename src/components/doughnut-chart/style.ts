import styled from 'styled-components';

export const DoughnutContainer = styled.div`
    width: 220px;
    height: 220px;
    justify-content: center;
    display: flex;
    align-items: center;
    background-color: #f3faff;
    border-radius: 100%;
    .wrapper {
        position: relative;
        height: calc(var(--size, 200) * 1px);
        width: calc(var(--size, 200) * 1px);
        background: #639;
        border-radius: 100%;
        overflow: hidden;

        .inner-circle {
            width: 150px;
            height: 150px;
            background-color: #fff;
            position: absolute;
            left: 25px;
            top: 25px;
            border-radius: 100%;
        }

        .segment {
            &:nth-child(1) {
                --offset: 20;
                --value: 60;
                --over50: 1;
                --bg: #db0a5b;
            }
            &:nth-child(2) {
                --offset: 80;
                --value: 5;
                --bg: #22a7f0;
            }
            &:nth-child(3) {
                --offset: 85;
                --value: 15;
                --bg: #2ecc71;
            }
            &:nth-child(4) {
                --offset: 100;
                --value: 20;
                --bg: #4d05e8;
            }

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
        }
    }
`;
