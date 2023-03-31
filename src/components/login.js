import React,{useState,useEffect,useReducer} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const AppBlock = styled.div`
width: 512px;
margin: 0 auto;
margin-top: 4rem;
border: 1px solid black;
padding: 1rem;
text-align: center;
`;
const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  height: 1.5rem;
  font-size: 1rem;

  /* 색상 */
  background: #228be6;
  &:hover {
    background: #339af0;
  }
  &:active {
    background: #1c7ed6;
  }

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

function LoginComponent(){
  const [loginID, setLoginID] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [passwordInputType, setPasswordInputType] = useState({
    type: "password",
    autoComplete: "current-password",
  });
  const dataRuleCheckForID = (ch) => {
    let ascii = ch.charCodeAt(0);
    if (48 /* 0 */ <= ascii && ascii <= 57 /* 9 */) return true;
    if (65 /* A */ <= ascii && ascii <= 90 /* Z */) return true;
    if (97 /* a */ <= ascii && ascii <= 122 /* z */) return true;
    if (ch === ".") return true;

    return false;
  };
  const getLoginID = (event) => {
    let value = event.target.value;

    if (value === "") {
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

    if (loginID === "") {
      alert("아이디를 입력해주세요.");
    }
    if (loginPassword === "") {
      alert("비밀번호를 입력해주세요.");
    }

    if (true /* login success */) {
      
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
                onChange={(e) => getLoginID(e)}></input>
                <br/>
                <br/>
                <input 
                type={passwordInputType.type} 
                id="password" 
                name="password"
                placeholder="Password"
                autoComplete={passwordInputType.autoComplete}
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}></input>
                <br/>
                <br/>
                <StyledButton type="button" onClick={login}>Login</StyledButton>
                <br/>
                <Link to="/register">
                    <span>Register</span>
                </Link>


            </AppBlock>
        </form>
        </>
    )
}
export default LoginComponent;
