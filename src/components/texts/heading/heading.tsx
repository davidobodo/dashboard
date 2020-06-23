import React from 'react';
import styled from 'styled-components';

interface HeadingProps {
    children: React.ReactNode;
    bold?: boolean;
    semibold?: boolean;
    light?: boolean;
    lightColor?: boolean;
    type: string;
}

const HeadingContainer = styled.div<HeadingProps>`
    
    ${({ type }) => type === 'h5' && 'font-size: 12px;'}
    ${({ type }) => type === 'h6' && 'font-size: 10px;'}

    ${({ lightColor }) => lightColor && 'color: rgba(0,0,0,0.4) !important;'}

    ${({ light }) => light && 'font-weight: 200 !important;'}
    ${({ semibold }) => semibold && 'font-weight: 500 !important;'}
    ${({ bold }) => bold && 'font-weight: 600 !important;'}
`;

const Heading5: React.FC<HeadingProps> = ({
    children,
    bold,
    semibold,
    light,
    lightColor,
    type,
}) => {
    return (
        <HeadingContainer
            bold={bold}
            light={light}
            semibold={semibold}
            lightColor={lightColor}
            type={type}
        >
            {children}
        </HeadingContainer>
    );
};

export default Heading5;
