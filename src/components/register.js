import React from "react";
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
    
    return(
        <>
        <form>
            <AppBlock>
                <h1>Register</h1>
                <input type="text" placeholder="ID"/>
                <br/>
                <br/>
                <input type="text" placeholder="PassWord"/>
                <br/>
                <br/>
                <input type="text" placeholder="PassWord Again"/>
                <br/>
                <br/>
                <StyledButton>Register</StyledButton>
            </AppBlock>
        </form>
        </>
    )
}
export default RegisterComponent;