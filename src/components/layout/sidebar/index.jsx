import { SideBarWrapper } from './wrapper';
import SidebarItem_User from './SidebarItem';
import React, {useState} from "react";
import '../css/sidebar.css';


//TODO: add Sidebar contents
export const SideBar = ({ children }) => {
    const [newButton, setNewButton] = useState("");
    const [buttons, setButtons] = useState([]);
  
    // 버튼 추가 이벤트 핸들러
    const addButton = () => {
        if (newButton !== "") { 
            setButtons([...buttons, newButton]);
            setNewButton("");
        }
    };



    return (
        <SideBarWrapper>
            <div>{children}</div>
            <div>
                <SidebarItem_User
                image="https://pbs.twimg.com/media/FBzir4sVIAMeXby.png"
                text="몰?루"
                />
            </div>
            <div class="button-wrapper">
                {buttons.map((button, index) => (
                    <button key={index}>{button}</button>
                ))}
            </div>
            <div class="sidebar-bottom">    
            <form>
                <label for="input-text">Drone Input:</label>
                <input type="text" id="input-text" name="input-text"value = {newButton} onChange={(e)=>setNewButton(e.target.value)}/>
                <button type="button"onClick={addButton}>Add</button>
            </form>
            </div>
        </SideBarWrapper>
    );
};
