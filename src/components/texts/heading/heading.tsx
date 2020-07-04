import React from 'react';
import styled from 'styled-components';
import { devices } from '../../../constants';

interface HeadingProps {
    children: React.ReactNode;
    veryBold?: boolean;
    bold?: boolean;
    semibold?: boolean;
    light?: boolean;
    lightColor?: boolean;
    darkColor?: boolean;
    darkBlueColor?: boolean;
    type: string;
}

const HeadingContainer = styled.div<HeadingProps>`
    
    ${({ type }) => type === 'h3' && 'font-size: 18px;'}
    ${({ type }) => type === 'h4' && 'font-size: 16px;'}
    ${({ type }) => type === 'h5' && 'font-size: 12px;'}
    ${({ type }) => type === 'h6' && 'font-size: 10px;'}

    @media ${devices.mobile}{
        ${({ type }) => type === 'h3' && 'font-size: 16px;'}
        ${({ type }) => type === 'h4' && 'font-size: 14px;'}
        ${({ type }) => type === 'h5' && 'font-size: 10px;'}
        ${({ type }) => type === 'h6' && 'font-size: 8px;'}
    }

    ${({ lightColor, theme }) =>
        lightColor && `color: ${theme.smallTextColor} !important;`}
    ${({ darkColor }) => darkColor && 'color: #131f3e;'}
    ${({ darkBlueColor }) => darkBlueColor && 'color: #0075ff;'}

    ${({ light }) => light && 'font-weight: 200 !important;'}
    ${({ semibold }) => semibold && 'font-weight: 500 !important;'}
    ${({ bold }) => bold && 'font-weight: 600 !important;'}
    ${({ veryBold }) => veryBold && 'font-weight: 800 !important;'}
`;

const Heading5: React.FC<HeadingProps> = ({
    children,
    bold,
    semibold,
    light,
    lightColor,
    type,
    darkColor,
    veryBold,
    darkBlueColor,
}) => {
    return (
        <HeadingContainer
            veryBold={veryBold}
            bold={bold}
            light={light}
            semibold={semibold}
            lightColor={lightColor}
            darkColor={darkColor}
            darkBlueColor={darkBlueColor}
            type={type}
        >
            {children}
        </HeadingContainer>
    );
};

export default Heading5;
