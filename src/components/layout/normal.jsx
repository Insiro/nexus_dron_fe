import React from 'react';
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import { HamBurger } from './hamburger';
import { SideBar } from './sidebar';
import { LayoutWrapper } from './wrapper';

const ContentWrapper = styled.div`
    flex-grow: 1;
    height: 100%;
    background: #808080;
    overflow-y: scroll;
`;

const InnerContentWrapper = styled.div`
    flex-grow: 1;
    padding-bottom: 3rem;
`;

export const NormalLayout = ({ children }) => {
    const opened = useSelector((state) => state.global.opened);
    return (
        <LayoutWrapper opened={opened}>
            <HamBurger opened={opened} />
            <SideBar opened={opened} />
            <ContentWrapper>
                <InnerContentWrapper>
                    {children ? children : <Outlet />}
                </InnerContentWrapper>
            </ContentWrapper>
        </LayoutWrapper>
    );
};
