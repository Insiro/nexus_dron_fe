    import { SideBarWrapper } from './wrapper';
    import SidebarItem_User from './SidebarItem';
    import React from 'react';
    import {useSelector, useDispatch} from 'react-redux';
    import { setSelectedButton } from '../../../stores/droneStore';
    import './sidebar.css';
    import { Link } from 'react-router-dom';

    //TODO: add Sidebar contents
    export const SideBar = ({ children, opened }) => {
        const buttons = useSelector((state)=>state.buttons);
        const dispatch = useDispatch();

        const handleButtonClick = (buttonId)=>{
            dispatch(setSelectedButton(buttonId));
        };

        const debug = ()=>{
            console.log(buttons);
        }

        return (
            <SideBarWrapper opened={opened}>
                <div><button onClick={debug}></button></div>
                <div>{children}</div>
                <div>
                    <SidebarItem_User
                        image="https://pbs.twimg.com/media/FBzir4sVIAMeXby.png"
                        text="몰?루"
                    />
                    {console.log(buttons)}
                </div>
                <div className="button-wrapper">
                    {buttons&&buttons.map((button, index) => (
                        <button key = {index} onClick={() => handleButtonClick(button.id)}>
                            {button}
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
