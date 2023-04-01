import React, { useState, useEffect, useReducer } from 'react';
import { AppBlock } from '../components/AppBlock';
import { StyledButton } from '../components/button';

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
        <>
            <form>
                <AppBlock>
                    <h1>Register</h1>
                    <input
                        type="text"
                        placeholder="ID"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                    <br />
                    <br />
                    <input
                        type="text"
                        placeholder="PassWord"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <br />
                    <input
                        type="text"
                        placeholder="PassWord Confirm"
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                    />
                    <br />
                    <br />
                    <StyledButton onClick={registUser}>Register</StyledButton>
                </AppBlock>
            </form>
        </>
    );
}
export default RegisterComponent;
