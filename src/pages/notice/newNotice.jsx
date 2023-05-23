import React, { useState } from 'react';
import styled from 'styled-components';

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
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 포스팅을 서버로 전송하는 API 호출
    const data = { title, content };
    fetch('api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(responseData => {
        // 성공적으로 포스팅이 생성된 경우, 상태 초기화
        setTitle('');
        setContent('');
        console.log('포스팅이 생성되었습니다:', responseData);
      })
      .catch(error => console.error(error));
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