import { SideBarWrapper } from './wrapper';
import SidebarItem_User from './SidebarItem';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedButton } from '../../../stores/droneReducer';
import './sidebar.css';
import { Link } from 'react-router-dom';

//TODO: add Sidebar contents
export const SideBar = ({ children, opened }) => {
    const buttons = useSelector((state) => state.drone.buttons);
    const selectedButton = useSelector(state => state.drone.selectedButton);
    const dispatch = useDispatch();

    const handleButtonClick = (buttonId) => {
        dispatch(setSelectedButton(buttonId));
    };

    return (
        <SideBarWrapper opened={opened}>
            <div>{children}</div>
            <div>
                <SidebarItem_User
                    image="https://pbs.twimg.com/media/FBzir4sVIAMeXby.png"
                    text="몰?루"
                />
            </div>
            <div className="button-wrapper">
                {buttons && buttons.map((button, index) => (
                    <button key={button.droneId} onClick={() => handleButtonClick(button.droneId)}>
                        {console.log(selectedButton)}
                        {button.droneName}
                    </button>
                ))}
            </div>
            <div className="sidebar-bottom">
                <form>
                    <label htmlFor="input-text">Drone Input:</label>
                    <Link to="/drons/new">
                        <button type="button">Add Dron</button>
                    </Link>
                </form>
            </div>
        </SideBarWrapper>
    );
};
