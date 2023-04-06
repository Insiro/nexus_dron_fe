import { SideBarWrapper } from './wrapper';
import SidebarItem_User from './SidebarItem';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedButton } from '../../../stores/droneReducer';
import './sidebar.css';
import { Link } from 'react-router-dom';
import DroneSideCard from '../../DroneSideCard';

//TODO: add Sidebar contents
export const SideBar = ({ children, opened }) => {
    const buttons = useSelector((state) => state.drone.buttons);
    const selectedButton = useSelector((state) => state.drone.selectedButton);
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
                <DroneSideCard
                    id="1"
                    name="1"
                    alt="Drone_img"
                    src="https://dji-official-fe.djicdn.com/cms/uploads/1d5df050695b621ed32cd2593759ffed.png"
                    level={0}
                />
                {buttons &&
                    buttons.map((button, index) => (
                        <DroneSideCard
                            key={button.droneId}
                            id={button.droneId}
                            name={button.droneName}
                            alt="Drone_img"
                            src="https://dji-official-fe.djicdn.com/cms/uploads/1d5df050695b621ed32cd2593759ffed.png"
                            level={0}
                        />
                    ))}
            </div>
            <div className="sidebar-bottom">
                <form>
                    <label htmlFor="input-text">Drone Input:</label>
                    <Link to="/drons/new">
                        <button type="button" style={{ maxWidth: '95%' }}>
                            Add Drone
                        </button>
                    </Link>
                </form>
            </div>
        </SideBarWrapper>
    );
};
