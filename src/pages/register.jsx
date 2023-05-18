import React, { useState, useEffect, useReducer } from 'react';
import { StyledButton } from '../components/button';
import {
    BackGround,
    CardItem,
    CardWrapper,
    InputBox,
} from '../components/LoginBox';
import axios from 'axios';
function RegisterComponent() {
    const baseUrl = "http://localhost:8081"
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleSubmit = async (e) => {
        console.log(id, password, passwordConfirm);
        if (password != passwordConfirm) {
            alert('비밀번호가 다릅니다. 다시 입력해주세요');
        }else{
        e.preventDefault();
        await axios.post(baseUrl + "/api/auth/register", {
            id: id,
            pwd: password,
          })
          .then((response) => {
            if(response.data==1){
                alert("회원가입 완료");
            }else{
                alert("이미 존재하는 계정입니다.");
            }
          })
          .catch((error) => {
            console.log(error);    
          });
        }
        // post code
      };
    return (
        <BackGround>
            <CardWrapper>
                <CardItem>
                    <h1>Register</h1>
                    <InputBox
                        type="text"
                        placeholder="ID"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                    <br />
                    <br />
                    <InputBox
                        type="text"
                        placeholder="PassWord"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <br />
                    <InputBox
                        type="text"
                        placeholder="PassWord Confirm"
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                    />
                    <br />
                    <br />
                    <StyledButton onClick={handleSubmit}>Register</StyledButton>
                </CardItem>
            </CardWrapper>
        </BackGround>
    );
}
export default RegisterComponent;
