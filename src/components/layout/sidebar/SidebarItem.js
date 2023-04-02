import React from 'react';

const SidebarItem_User = ({ image, text }) => (
  <div className="sidebar-item">
    <img src={image} alt={text} width={"30%"}/>
    &nbsp;&nbsp;&nbsp;&nbsp;{text}
  </div>
);

// const SidebarItem_Dron = () => (

// );

export default SidebarItem_User;