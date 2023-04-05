import styled from 'styled-components';

export const CardItemContent = styled.div`
    display: flex;
    flex-flow: ${(props) => props.direction || 'column'};
    background: #fff;
    width: 100%;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
    -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    border-radius: 10px;
    overflow: hidden;
    text-decoration: none;
    padding: ${(props) => (props.padding ? props.padding : '1rem')};
    height: ${(props) => (props.height ? props.height : '100%')};
`;
