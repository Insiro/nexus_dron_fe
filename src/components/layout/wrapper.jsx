import styled from 'styled-components';
export const LayoutWrapper = styled.div`
    flex-direction: row;
    height: 100%;
    width: 100%;
    display: flex;
    ${(props) => (props.css ? props.css : '')}
`;
