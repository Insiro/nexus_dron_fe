import { SideBarWrapper } from './wrapper';
import SidebarItem_User from './SidebarItem';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedButton } from '../../../stores/droneReducer';
import './sidebar.css';
import { Link } from 'react-router-dom';
import DroneSideCard from '../../DroneSideCard';
import { StyledButton } from '../../../components/button';

//TODO: add Sidebar contents
export const SideBar = ({ children, opened }) => {
    const buttons = useSelector((state) => state.drone.buttons);
    const selectedButton = useSelector((state) => state.drone.selectedButton);
    const dispatch = useDispatch();

    const handleButtonClick = (buttonId) => {
        dispatch(setSelectedButton(buttonId));
    };
    const correctionUser=(e)=>{

    }
    return (
        <SideBarWrapper opened={opened}>
            <div>{children}</div>
            <div>
                <SidebarItem_User
                    image="https://swingbrowser.userecho.com/s/cache/b5/09/b5098d61f3ef34b35311456b08123897.png"
                />
                <Link to="/drons/userinfo">
                    <StyledButton>수정</StyledButton>
                </Link>

                <p>
                안녕하세요 팀 NexusDrone입니다.
                </p>
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
