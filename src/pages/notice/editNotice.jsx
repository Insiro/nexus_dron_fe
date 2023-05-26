import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'

const BlogPostFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
  justify-content: center;
  width : 100%
`;

const TitleInput = styled.input`
  width: 100%;
  max-width: 600px;
  height: 38px;
  margin-bottom: 20px;
  font-size: 27px;
  text-transform: capitalize;

  @media screen and (max-width: 300px) {
    font-size: 20px;
    height: 30px;
  }
`;

const ContentTextArea = styled.textarea`
  width: 100%;
  max-width: 600px;
  height: 200px;
  margin-bottom: 20px;
  font-size: 15px;

  @media screen and (max-width: 300px) {
    height: 150px;
  }
`;

const SubmitButton = styled.button`
  width: 163px;
  height: 45px;
  background-color: #00AAA1;
  color: #FFFFFF;
  font-size: 15px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const BlogPostForm = () => {
    const baseUrl = "http://localhost:18030";
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const nevigate = useNavigate();
    const [uid, setUID] = useState('');

    useEffect(() => {
        // 서버에서 개별 포스팅 데이터 가져오는 API 호출
        getNotices();
    }, []);

    async function getNotices() {
        try {
            const path = window.location.pathname;
            const lastPart = path.substring(path.lastIndexOf('/') + 1);
            setUID(lastPart);
            const response = await axios.get(baseUrl + '/api/notice/' + lastPart);
            setTitle(response.data.title);
            setContent(response.data.content);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios
            .post(baseUrl + '/api/notice/' + uid, {
                title: title,
                content: content,
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        nevigate('/notice');
    };

    return (
        <BlogPostFormWrapper>
            <h2>공지 글 쓰기</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <div><label htmlFor="title">제목:</label></div>
                    <TitleInput
                        type="text"
                        id="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <div><label htmlFor="content">내용:</label></div>
                    <ContentTextArea
                        id="content"
                        value={content}
                        onChange={e => setContent(e.target.value)}
                    />
                </div>
                <SubmitButton type="submit">확인</SubmitButton>
            </form>
        </BlogPostFormWrapper>
    );
};

export default BlogPostForm;