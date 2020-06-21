import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
    background-color: ${(props) => props.theme.lightBlue};
    flex: 1;
    padding: 30px;

    .content {
        &__header {
            display: flex;
            justify-content: space-between;
        }
    }
`;

const Content = () => {
    return (
        <ContentWrapper>
            <div className="content__header">
                <div>
                    <h3>Poli Overview</h3>
                    <h4>Welcome Back, Barly</h4>
                </div>
                <button>
                    <span>+</span> Register Patient
                </button>
            </div>
        </ContentWrapper>
    );
};

export default Content;
