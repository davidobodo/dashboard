import React from 'react';
import styled from 'styled-components';

interface Heading5Props {
    children: React.ReactNode;
    bold?: boolean;
    semibold?: boolean;
    light?: boolean;
    lightColor?: boolean;
}

const Heading5Container = styled.h6<Heading5Props>`
    font-size: 10px;

    ${({ lightColor }) => lightColor && 'color: rgba(0,0,0,0.4) !important;'}

    ${({ light }) => light && 'font-weight: 200 !important;'}
    ${({ semibold }) => semibold && 'font-weight: 500 !important;'}
    ${({ bold }) => bold && 'font-weight: 600 !important;'}
`;

const Heading5: React.FC<Heading5Props> = ({
    children,
    bold,
    semibold,
    light,
    lightColor,
}) => {
    return (
        <Heading5Container
            bold={bold}
            light={light}
            semibold={semibold}
            lightColor={lightColor}
        >
            {children}
        </Heading5Container>
    );
};

export default Heading5;
