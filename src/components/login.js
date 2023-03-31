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
const LS_KEY_ID = "LS_KEY_ID";
const LS_KEY_SAVE_ID_FLAG = "LS_KEY_SAVE_ID_FLAG";
function inputReducer(state, action) {
  return {
    ...state,
    [action.id]: action.value,
  };
}
function LoginComponent(){
  const [state, dispatch] = useReducer(inputReducer, {
    loginID: "",
    loginPassword: "",
  });
  const { loginID, setloginID } = useState("");
  const {loginPassword, setloginPassword}= useState("");

  const [saveIDFlag, setSaveIDFlag] = useState(false);
  const [passwordOption, setPasswordOption] = useState(false);
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
    setloginID = event.target.value;

    if (loginID === "") {
      dispatch(event.target);
      return;
    }

    let length = loginID.length;
    if (dataRuleCheckForID(value[length - 1]) === false) return;

    dispatch(event.target);

    return;
  };


  const login = () => {
    console.log({ loginID, loginPassword });

    if (loginID === "") {
      alert("아이디를 입력해주세요."); return;
    }

    if (loginPassword === "") {
      alert("비밀번호를 입력해주세요."); return;
    }

    if (true /* login fail */) {
      alert("아이디 혹은 패스워드가 틀립니다.");
      dispatch({ id: "loginID", value: "" });
      dispatch({ id: "loginPassword", value: "" });
      localStorage.setItem(LS_KEY_ID, "");

      return;
    }

    if (true /* login success */) {
      if (saveIDFlag) localStorage.setItem(LS_KEY_ID, loginID);
    }
  };
  useEffect(() => {

    let idFlag = JSON.parse(localStorage.getItem(LS_KEY_SAVE_ID_FLAG));
    if (idFlag !== null) setSaveIDFlag(idFlag);
    if (idFlag === false) localStorage.setItem(LS_KEY_ID, "");

    let data = localStorage.getItem(LS_KEY_ID);
    if (data !== null) dispatch({ id: "loginID", value: data });
  }, []);

  useEffect(() => {
    if (passwordOption === false)
      setPasswordInputType({
        type: "password",
        autoComplete: "current-password",
      });
    else
      setPasswordInputType({
        type: "text",
        autoComplete: "off",
      });
  }, [passwordOption]);
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
                onChange={(e)=>getLoginID}></input>
                <br/>
                <br/>
                <input 
                type={passwordInputType.type} 
                id="password" 
                name="password"
                placeholder="Password"
                autoComplete={passwordInputType.autoComplete}
                value={loginPassword}
                onChange={(e)=>dispatch(e.target)}></input>
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
