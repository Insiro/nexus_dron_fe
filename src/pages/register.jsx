import React, { useState, useEffect, useReducer } from 'react';
import { StyledButton } from '../components/button';
import {
    BackGround,
    CardItem,
    CardWrapper,
    InputBox,
} from '../components/LoginBox';
function RegisterComponent() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const registUser = () => {
        console.log(id, password, passwordConfirm);
        if (password === passwordConfirm) {
            //register success
            alert('회원가입이 완료되었습니다.');
        } else {
            alert('비밀번호가 다릅니다. 다시 입력해주세요');
        }
    };
    return (
        <BackGround>
            <CardWrapper>
                <CardItem padding="4rem">
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
                    <StyledButton onClick={registUser}>Register</StyledButton>
                </CardItem>
            </CardWrapper>
        </BackGround>
    );
}
export default RegisterComponent;
