import styled from 'styled-components';
export const LayoutWrapper = styled.div`
    height: 100%;
    width: 100%;
    ${(props) => (props.css ? props.css : '')}
`;
