import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { AppBlock } from '../components/AppBlock';
import { StyledButton } from '../components/button';

import { setUser } from '../stores/userReducer';


function LoginComponent() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [loginID, setLoginID] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [passwordInputType, setPasswordInputType] = useState({
        type: 'password',
        autoComplete: 'current-password',
    });
    const dataRuleCheckForID = (ch) => {
        let ascii = ch.charCodeAt(0);
        if (48 /* 0 */ <= ascii && ascii <= 57 /* 9 */) return true;
        if (65 /* A */ <= ascii && ascii <= 90 /* Z */) return true;
        if (97 /* a */ <= ascii && ascii <= 122 /* z */) return true;
        if (ch === '.') return true;

        return false;
    };
    const getLoginID = (event) => {
        let value = event.target.value;

        if (value === '') {
            setLoginID(value);
            return;
        }

        let length = value.length;
        if (dataRuleCheckForID(value[length - 1]) === false) return;

        setLoginID(value);

        return;
    };

    const login = () => {
        console.log({ loginID, loginPassword });

        if (loginID === '') {
            alert('아이디를 입력해주세요.');
        } else if (loginPassword === '') {
            alert('비밀번호를 입력해주세요.');
        } else if (true /* login success */) {
            dispatch(setUser({ name: 'username' }));
            navigate('/drons');
        }
    };

    return (
        <>
            <form>
                <AppBlock>
                    <h1>Login</h1>
                    <input
                        type="text"
                        id="id"
                        name="ID"
                        placeholder="ID"
                        value={loginID}
                        onChange={(e) => getLoginID(e)}
                    ></input>
                    <br />
                    <br />
                    <input
                        type={passwordInputType.type}
                        id="password"
                        name="password"
                        placeholder="Password"
                        autoComplete={passwordInputType.autoComplete}
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                    ></input>
                    <br />
                    <br />
                    <StyledButton type="button" onClick={login}>
                        Login
                    </StyledButton>
                    <br />
                    <Link to="/auth/register">
                        <span>Register</span>
                    </Link>
                </AppBlock>
            </form>
        </>
    );
}
export default LoginComponent;
