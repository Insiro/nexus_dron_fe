import React,{useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import {
    BackGround,
    CardItem,
    CardWrapper,
    InputBox,
} from '../components/LoginBox';
import { StyledButton } from '../components/button';
function ChangeingUserInfo() {
    const baseUrl = "http://localhost:8081"
    const [userImage, setUserImage]=useState('');
    const [userID, setUserID] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [passwordInputType, setPasswordInputType] = useState({
        type: 'password',
        autoComplete: 'current-password',
    });
    const navigate= useNavigate();
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
            setUserID(value);
            return;
        }

        let length = value.length;
        if (dataRuleCheckForID(value[length - 1]) === false) return;
        setUserID(value);
        return;
    };
    const onUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
import React,{useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import {
    BackGround,
    CardItem,
    CardWrapper,
    InputBox,
} from '../components/LoginBox';
import { StyledButton } from '../components/button';
function ChangeingUserInfo() {
    const [userImage, setUserImage]=useState('');
    const [userID, setUserID] = useState('');
    const [userPassword, setUserPassword] = useState('');
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
            setUserID(value);
            return;
        }

        let length = value.length;
        if (dataRuleCheckForID(value[length - 1]) === false) return;
        setUserID(value);
        return;
    };
    const onUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        return new Promise((resolve) => { 
            reader.onload = () => {	
                setUserImage(reader.result || null); // 파일의 컨텐츠
                resolve();
            };
        });
    }
    const Change = async(e)=>{
        e.preventDefault();
        await axios.post(baseUrl + "/api/user/", {
            id: userID,
            pwd: userPassword,
            img: userImage,
          })
          .then((response) => {
            if(response.data==1){alert("수정 완료")}
          })
          .catch((error) => {
            console.log(error);    
          });
        navigate("/drons");
    }
    return (
        <BackGround className="backGround">
        <CardWrapper>
            <CardItem padding="4rem">
                <h1>Nexus Drone</h1>
                <h2>정보 수정</h2>
                <p>아이디 변경</p>
                <InputBox
                    type="text"
                    id="id"
                    name="ID"
                    placeholder="ID"
                    value={userID}
                    onChange={(e) => getLoginID(e)}
                ></InputBox>
                <br />
                <p>패스워드 변경</p>
                <InputBox
                    type={passwordInputType.type}
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                ></InputBox>
                <br />
                <p>프로필 사진 선택</p>
                <input type="file" accept="image/*" onChange={onUpload}/>
                <img width={'100%'} src={userImage}/>
                <br />
                <StyledButton onClick={Change}>수정</StyledButton>
            </CardItem>
        </CardWrapper>
    </BackGround>
    );
}
export default ChangeingUserInfo;
        return new Promise((resolve) => { 
            reader.onload = () => {	
                setUserImage(reader.result || null); // 파일의 컨텐츠
                resolve();
            };
        });
    }
    return (
        <BackGround className="backGround">
        <CardWrapper>
            <CardItem padding="4rem">
                <h1>Nexus Drone</h1>
                <h2>정보 수정</h2>
                <p>아이디 변경</p>
                <InputBox
                    type="text"
                    id="id"
                    name="ID"
                    placeholder="ID"
                    value={userID}
                    onChange={(e) => getLoginID(e)}
                ></InputBox>
                <br />
                <p>패스워드 변경</p>
                <InputBox
                    type={passwordInputType.type}
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                ></InputBox>
                <br />
                <p>프로필 사진 선택</p>
                <input type="file" accept="image/*" onChange={onUpload}/>
                <img width={'100%'} src={userImage}/>
                <br />
                <Link to="/drons">
                    <StyledButton>수정</StyledButton>
                </Link>
            </CardItem>
        </CardWrapper>
    </BackGround>
    );
}
export default ChangeingUserInfo;