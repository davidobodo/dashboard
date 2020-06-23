import React from 'react';

import styled from 'styled-components';
import { findByTitle } from '@testing-library/react';

interface TagsProps {
    title: string;
}

const TagsWrapper = styled.div`
    border: 1px solid ${(props) => props.theme.ashColor};
    display: flex;
    align-items: center;
    padding: 3px 5px;
    border-radius: 5px;
    margin-right: 10px;

    .bullet {
        width: 10px;
        height: 10px;
        display: inline-block;
        background-color: ${(props) => props.theme.darkBlue};
        border-radius: 3px;
        margin-right: 5px;
    }
`;

const Tag: React.FC<TagsProps> = ({ title }) => {
    return <TagsWrapper>{title}</TagsWrapper>;
};

export default Tag;
