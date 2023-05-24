import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const BlogPostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
  height:100%;
  overflow-y: auto; /* 스크롤 관련 스타일을 적용할 때는 overflow-y 속성을 사용합니다. */
`;

const BlogPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 600px;
`;

const BlogPostTitle = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
  margin-bottom: 5px;
`;

const BlogPostContent = styled.p`
  font-size: 15px;
  color: #555;
`;

const BlogPostPage = () => {
  const baseUrl = 'http://localhost:8083';
  const [notices, setNotices] = useState([]);
  const navigate = useNavigate();
  const [showNewPostButton, setShowNewPostButton] = useState(true); // 새로운 공지글 작성 버튼을 보여줄지 여부를 상태로 관리

  useEffect(() => {
    // 서버에서 개별 포스팅 데이터 가져오는 API 호출
    getNotices();
  }, []);

  useEffect(() => {
    // 화면 크기 변화 감지하여 스크롤 제어
    window.addEventListener('resize', handleResize);
    handleResize(); // 초기 로드 시에도 스크롤 제어를 위해 호출

    return () => {
      window.removeEventListener('resize', handleResize); // 컴포넌트 언마운트 시 리스너 제거
    };
  }, []);

  const handleResize = () => {
    const blogPostsWrapper = document.getElementById('blog-posts-wrapper');
    if (blogPostsWrapper) {
      blogPostsWrapper.style.overflowY =
        blogPostsWrapper.scrollHeight > blogPostsWrapper.clientHeight ? 'scroll' : 'auto';
    }
  };

  async function getNotices() {
    try {
      const response = await axios.get(baseUrl + '/api/notice');
      setNotices(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleNewPostClick = () => {
    navigate('/notice/new'); // 새로운 공지글 작성 페이지로 이동
  };

  return (
    <BlogPostsWrapper id="blog-posts-wrapper">
      <h2>블로그 글 목록</h2>
      {showNewPostButton && ( // showNewPostButton 값이 true일 때만 버튼을 렌더링
        <button onClick={handleNewPostClick}>새로운 공지글 작성</button>
      )}
      <br></br>
      {notices.map((notice) => (
        <BlogPost key={notice.id}>
          <BlogPostTitle to={`/notice/${notice.uid}`}>{notice.title}</BlogPostTitle>
          <BlogPostContent>{notice.content}</BlogPostContent>
        </BlogPost>
      ))}
      <br></br>
    </BlogPostsWrapper>
  );
};

export default BlogPostPage;