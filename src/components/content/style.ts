import styled from 'styled-components';

export const ContentWrapper = styled.div`
    background-color: ${(props) => props.theme.lightBlue};
    flex: 1;
    padding: 30px;

    .content {
        &__header {
            display: flex;
            justify-content: space-between;
            margin: ${(props) => props.theme.popularBoxMargin};
        }

        &__body {
            &__top-section {
                display: flex;

                &__left {
                    flex-basis: 65%;

                    .total {
                        display: flex;
                    }

                    .graph {
                        border: 1px solid red;
                        height: 400px;
                        margin: ${(props) => props.theme.popularBoxMargin};
                    }
                }

                &__right {
                    border: 1px solid green;
                    flex-basis: 35%;
                    margin: ${(props) => props.theme.popularBoxMargin};
                }
            }

            &__bottom-section {
                display: flex;

                &__left {
                    flex-basis: 65%;
                    display: flex;

                    .box {
                        height: 300px;
                        border: 1px solid orange;
                        margin: ${(props) => props.theme.popularBoxMargin};
                        flex: 1;
                    }
                }

                &__right {
                    height: 300px;
                    border: 1px solid orange;
                    margin: ${(props) => props.theme.popularBoxMargin};
                    flex: 1;
                    flex-basis: 35%;
                }
            }
        }
    }
`;
