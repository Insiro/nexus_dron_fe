import React from 'react';
import { Outlet } from 'react-router';
import styled from 'styled-components';

import * as styles from '../styles';
import { SideBar } from './sidebar';
import { LayoutWrapper } from './wrapper';

export const ContentWrapper = styled.div`
    position: relative;
    height: 100%;
    ${styles.TRANSITION_SLOW}
    transition-property: margin-left;
    margin-left: 256px;
    ${styles.MEDIAQUERY_UNDER_R} {
        margin-left: 0;
    }
`;

export const NormalLayout = ({ children }) => (
    <LayoutWrapper>
        <SideBar />
        <ContentWrapper>{children ? children : <Outlet />}</ContentWrapper>
    </LayoutWrapper>
);
