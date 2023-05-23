import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from "axios";

const BlogPostDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
`;

const BlogPostTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const BlogPostContent = styled.p`
  font-size: 15px;
  line-height: 1.5;
`;

const BlogPostDetailPage = () => {
  const baseUrl = "http://localhost:8083";
  const { uid } = useParams();
  const [Notice, setNotice] = useState([]);

  useEffect(() => {
    // 서버에서 개별 포스팅 데이터 가져오는 API 호출
    getNotice();
  }, []);

  async function getNotice() {
    console.log(uid);

    await axios
      .get(baseUrl + "/api/notice/"+uid)
      .then((response)=>{
          console.log(response.data);
          setNotice(response.data);
      })
      .catch((error)=>{
          console.log(error);
      });  
  }

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <BlogPostDetailWrapper>
      <h2>asdf</h2>
      <BlogPostTitle>{Notice.title}</BlogPostTitle>
      <BlogPostContent>{Notice.content}</BlogPostContent>
    </BlogPostDetailWrapper>
  );
};

export default BlogPostDetailPage;