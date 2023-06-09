import styled from 'styled-components';
export const StyledButton = styled.button`
    /* 공통 스타일 */
    display: inline-flex;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    align-items: center;
    justify-content: center;
    /* 크기 */
    height: 1.5rem;
    font-size: 1rem;

    /* 색상 */
    background: #228be6;
    &:hover {
        background: #339af0;
    }
    &:active {
        background: #1c7ed6;
    }

    /* 기타 */
    & + & {
        margin-left: 1rem;
    }
`;
