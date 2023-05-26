import React, { Children, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { CardItem, CardWrapper } from '../components/card';
import UserCard from '../components/UserCard'
const UserList=()=>{
    const baseUrl = "http://localhost:8081"
    const [uuid, setUuid]= useState();
    const [permission, setPermission]= useState();
    const [ID, setID]= useState();
    const [password, setPassword]= useState();
    const [img, setImg]= useState();
    const buttons = useSelector((state) => state.drone.buttons);
    const selectedButton = useSelector((state) => state.drone.selectedButton);
    const dispatch = useDispatch();
    async function getUser() {
        await axios
          .get(baseUrl + "/api/user")
          .then((response) => {
            console.log(response.data);
            setUuid(response.data.uuid);
            setPermission(response.data.permission);
            setID(response.data.ID);
            setPassword(response.data.pwd);
            setImg(response.data.img)
          })
          .catch((error) => {
            console.log(error);
          });
        // get code
      }
    const handleButtonClick = (buttonId) => {
        dispatch(setSelectedButton(buttonId));
    };
    return(
        <div className="button-wrapper">
        <CardWrapper>
            <CardItem>
                <UserCard
                    uuid="1"
                    permission="master"
                    ID="admin"
                    password="1111"
                    alt="user_img"
                    src="https://swingbrowser.userecho.com/s/cache/b5/09/b5098d61f3ef34b35311456b08123897.png"
                />
            </CardItem>
        </CardWrapper>
        {buttons &&
            buttons.map((button, index) => (
            <CardWrapper>
                <CardItem>
                    <UserCard
                        uuid={button.uuid}
                        permission={button.permission}
                        ID={button.ID}
                        password={button.pwd}
                        alt="user_img"
                        src={button.img}
                    />
                </CardItem>
            </CardWrapper>
            ))}
    </div>
    );
}
export default UserList;