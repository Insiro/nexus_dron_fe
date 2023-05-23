import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from "axios";

const BlogPostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
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
  const baseUrl = "http://localhost:8083";
  const [Notices, setNotices] = useState([]);

  useEffect(() => {
    // 서버에서 개별 포스팅 데이터 가져오는 API 호출
    getNotice();
  }, []);

  if (!Notices) {
    return <div>Loading...</div>;
  }

  async function getNotice(){
    await axios
      .get(baseUrl + "/api/notice")
      .then((response)=>{
          console.log(response.data);
          setNotices(response.data);
      })
      .catch((error)=>{
          console.log(error);
      });  
  }

  // useEffect(() => {
  //   // 서버에서 포스팅 데이터 가져오는 API 호출
  //   fetch('api/posts')
  //     .then(response => response.json())
  //     .then(responseData => {
  //       setPosts(responseData);
  //     })
  //     .catch(error => console.error(error));
  // }, []);

  return (
    <BlogPostsWrapper>
      <h2>블로그 글 목록</h2>
      {Notices.map(Notice => (
        <BlogPost key={Notice.id}>
          <BlogPostTitle to={`/notice/${Notice.uid}`}>{Notice.title}</BlogPostTitle>
          <BlogPostContent>{Notice.content}</BlogPostContent>
        </BlogPost>
      ))}
    </BlogPostsWrapper>
  );
};

export default BlogPostPage;