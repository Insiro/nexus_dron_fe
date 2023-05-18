import { SideBarWrapper } from './wrapper';
import SidebarItem_User from './SidebarItem';
import React, { useState } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';

//TODO: add Sidebar contents
export const SideBar = ({ children, opened }) => {
    const [newButton, setNewButton] = useState('');
    const [buttons, setButtons] = useState([]);
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
                {buttons.map((button, index) => (
                    <button key={index}>{button}</button>
                ))}
            </div>
            <div className="sidebar-bottom">
                <form>
                    <Link to="/drons/userlist">
                    <button type="button" style={{ maxWidth: '95%' }}>
                        User List
                    </button>
                    </Link>
                </form>
                <form>
                    <label htmlFor="input-text">Drone Input:</label>
                    <input
                        type="text"
                        id="input-text"
                        name="input-text"
                        value={newButton}
                        onChange={(e) => setNewButton(e.target.value)}
                    />
                    <Link to="/drons/new">
                        <button type="button">Add Dron</button>
                    </Link>
                </form>
            </div>
        </SideBarWrapper>
    );
};
