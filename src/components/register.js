import React,{useState,useEffect,useReducer} from "react";
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
function RegisterComponent(){
    const [id, setId]= useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm]= useState("");

    const registUser=()=>{
      console.log(id, password,passwordConfirm);
      if(password === passwordConfirm)
      {
        //register success
        alert("회원가입이 완료되었습니다.")
      }
      else{
        alert("비밀번호가 다릅니다. 다시 입력해주세요")
      }
    }
    return(
        <>
        <form>
            <AppBlock>
                <h1>Register</h1>
                <input 
                type="text" 
                placeholder="ID"
                value={id}
                onChange={(e)=>setId(e.target.value)}/>
                <br/>
                <br/>
                <input 
                type="text" 
                placeholder="PassWord"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
                <br/>
                <br/>
                <input 
                type="text" 
                placeholder="PassWord Confirm"
                value={passwordConfirm}
                onChange={(e)=>setPasswordConfirm(e.target.value)}/>
                <br/>
                <br/>
                <StyledButton onClick={registUser}>Register</StyledButton>
            </AppBlock>
        </form>
        </>
    )
}
export default RegisterComponent;