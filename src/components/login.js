import React,{useState,useEffect} from "react";
import {useDispatch} from "react-redux"
function LoginComponent(){
    const dispatch= useDispatch();
    const [id, setId]= useState("");
    const [password, setPassword]= useState("");
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] =useState("");

    return (
        <>
            <div>
                <h1>로그인</h1>
                <form onSubmit={LoginFunc}>
                    <label htmlFor="id">ID</label>
                    <input type="text" id="id"></input>
                    <br/>
                    <label htmlFor="password">Password:</label>
                    <input type="text" id="password"></input>
                </form>
            </div>
        </>
    )
}
