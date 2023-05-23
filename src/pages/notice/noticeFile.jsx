import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

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
  const { id } = useParams();
  const [Notice, setNotice] = useState(null);

  useEffect(() => {
    // 서버에서 개별 포스팅 데이터 가져오는 API 호출
    getNotice();
  }, []);

  if (!Notice) {
    return <div>Loading...</div>;
  }

  async function getNotice(){
    await axios
      .get(baseUrl + "/notice")
      .then((response)=>{
          console.log(response.data);
      })
      .catch((error)=>{
          console.log(error);
      });  
}

  return (
    <BlogPostDetailWrapper>
      <BlogPostTitle>{Notice.title}</BlogPostTitle>
      <BlogPostContent>{Notice.content}</BlogPostContent>
    </BlogPostDetailWrapper>
  );
};

export default BlogPostDetailPage;