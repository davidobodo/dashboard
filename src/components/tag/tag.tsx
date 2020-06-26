import React from 'react';

import styled from 'styled-components';
import Heading from '../texts/heading/heading';

interface TagsProps {
    title: string;
    color: string;
}

const TagsWrapper = styled.div<Partial<TagsProps>>`
    border: 1px solid #e9eff4;
    display: flex;
    align-items: center;
    padding: 3px 5px;
    border-radius: 5px;
    margin-right: 10px;

    .bullet {
        width: 10px;
        height: 10px;
        display: inline-block;
        ${({ color }) => color && `background-color: ${color};`}
        border-radius: 3px;
        margin-right: 5px;
    }
`;

const Tag: React.FC<TagsProps> = ({ title, color }) => {
    return (
        <TagsWrapper color={color}>
            <span className="bullet"></span>
            <Heading type="h6" bold lightColor>
                {title}
            </Heading>
        </TagsWrapper>
    );
};

export default Tag;
