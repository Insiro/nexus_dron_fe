import { SideBarWrapper } from './wrapper';
//TODO: add Sidebar contents
export const SideBar = ({ children }) => {
    return (
        <SideBarWrapper>
            sidebar content
            <div>{children}</div>
        </SideBarWrapper>
    );
};
