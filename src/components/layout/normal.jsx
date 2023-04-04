import React from 'react';
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import * as styles from '../styles';
import { HamBurger } from './hamburger';
import { SideBar } from './sidebar';
import { LayoutWrapper } from './wrapper';

export const ContentWrapper = styled.div`
    position: relative;
    height: 100%;
    ${styles.TRANSITION_SLOW}
    transition-property: margin-left;
    margin-left: 256px;
    ${styles.MEDIAQUERY_UNDER_R} {
        margin-left: ${(props) => (props.opened ? '256px ' : '0')};
    }
    background: #808080;
    overflow: auto;
`;

export const NormalLayout = ({ children }) => {
    const opened = useSelector((state) => state.global.opened);
    return (
        <LayoutWrapper opened={opened}>
            <HamBurger opened={opened} />
            <SideBar opened={opened} />
            <ContentWrapper opened={opened}>
                {children ? children : <Outlet />}
            </ContentWrapper>
        </LayoutWrapper>
    );
};
