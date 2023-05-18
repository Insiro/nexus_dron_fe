import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
    BackGround,
    CardItem,
    CardWrapper,
    InputBox,
} from '../components/LoginBox';
import { StyledButton } from '../components/button';
import { setUser } from '../stores/userReducer';
import axios from 'axios';
function LoginComponent() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const baseUrl = "http://localhost:8081"
    const [loginID, setLoginID] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [img,setImg]=useState();
    const [uuid, setUuid]=useState();
    const [permission, setPermission]=useState();
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

    const login = async (e) => {
        
        if (loginID === '') {
            alert('아이디를 입력해주세요.');
        } else if (loginPassword === '') {
            alert('비밀번호를 입력해주세요.');
        } else if (true /* login success */) {
            console.log({ loginID, loginPassword });
            e.preventDefault();
            await axios
            .post(baseUrl + "/api/auth", {
            id: loginID,
            pwd: loginPassword,
          })
          .then(async (response) => {
            if(response.data==1){
                await axios
                .get(baseUrl+"/api/user/"+loginID)
                .then((response)=>{
                    console.log(response);
                    uuid=response.data.uuid;
                    permission=response.data.permission;
                    img=response.data.img;
                })
                .catch((error)=>{
                    console.log(error);
                })
                dispatch(setUser({ name: 'username' }));
                navigate('/drons',{
                    state:{
                        uuid:uuid,
                        permission:permission,
                        id:loginID,
                        pwd:loginPassword,
                        img:img,
                    }
                });
            }else if(response.data==0){
                alert("없는 아이디입니다.");
            }else{
                alert("비밀번호가 틀립니다.")
            }
          })
          .catch((error) => {
            console.log(error);    
          });

        }
    };

    return (
        <BackGround className="backGround">
            <CardWrapper>
                <CardItem padding="4rem">
                    <h1>Nexus Drone</h1>
                    <h2>Login</h2>
                    <InputBox
                        type="text"
                        id="id"
                        name="ID"
                        placeholder="ID"
                        value={loginID}
                        onChange={(e) => getLoginID(e)}
                    ></InputBox>
                    <br />
                    <br />
                    <InputBox
                        type={passwordInputType.type}
                        id="password"
                        name="password"
                        placeholder="Password"
                        autoComplete={passwordInputType.autoComplete}
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                    ></InputBox>
                    <br />
                    <br />
                    <StyledButton type="button" onClick={login}>
                        Login
                    </StyledButton>
                    <br />
                    <Link to="/auth/register">
                        <span>Register</span>
                    </Link>
                </CardItem>
            </CardWrapper>
        </BackGround>
    );
}
export default LoginComponent;
