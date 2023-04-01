import styled from 'styled-components';
import { Outlet } from 'react-router';
/**@param {string} direction */
const CenterWrapper = styled.div`
    display: flex;
    height: 100%;
    flex-direction: ${(props) => props.direction};
`;

const CenterBoundBox = styled.div`
    flex-grow: 1;
`;

/**@param {} css */
const LayoutWrapper = styled.div`
    height: 100%;
    width: 100%;
    ${(props) => (props.css ? props.css : '')}
`;

export const CenterLayout = ({ children, css }) => {
    return (
        <LayoutWrapper css={css}>
            <CenterWrapper direction="row">
                <CenterBoundBox />
                <CenterWrapper direction="column">
                    <CenterBoundBox />
                    {children || <Outlet />}
                    <CenterBoundBox />
                </CenterWrapper>
                <CenterBoundBox />
            </CenterWrapper>
        </LayoutWrapper>
    );
};
