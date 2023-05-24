import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

const EditButton = styled.button`
  margin-top: 20px;
  background-color: #00AAA1;
  color: #FFFFFF;
  font-size: 15px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  margin-top: 20px;
  background-color: red;
  color: #FFFFFF;
  font-size: 15px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between; /* 포스팅 수정 버튼과 삭제 버튼 사이에 공간 생성 */
  width: 100%; /* 버튼 컨테이너가 가로로 꽉 차도록 설정 */
  margin-top: 20px;
`;

const BlogPostDetailPage = () => {
  const baseUrl = "http://localhost:8083";
  const [Notice, setNotice] = useState(null);
  const [showModifyPostButton, setShowModifyPostButton] = useState(true); // 공지글 수정 버튼을 보여줄지 여부를 상태로 관리
  const navigate = useNavigate();
  const [NoticeId, setNoticeId] = useState("");

  useEffect(() => {
    // 서버에서 개별 포스팅 데이터 가져오는 API 호출
    getNotice();
  }, []);

  if (!Notice) {
    return <div>Loading...</div>;
  }

  async function getNotice() {
    const path = window.location.pathname;
    const lastPart = path.substring(path.lastIndexOf('/') + 1);
    setNoticeId(lastPart);
    await axios
      .get(baseUrl + "/api/notice/" + lastPart)
      .then((response) => {
        console.log(response.data);
        setNotice(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleEditClick = () => {
    navigate(`/notice/edit/${NoticeId}`); // 해당 포스팅 수정 페이지로 이동
  };

  const handleDeleteClick = () => {
    deleteNotice();
    fetchPosts(); // 포스트 목록을 다시 불러오는 함수 호출
    navigate(`/notice`)
  };

  async function deleteNotice() {
    await axios
      .delete(baseUrl + "/api/notice/" + NoticeId)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function fetchPosts() {
    // 포스트 목록을 가져오는 API 호출
    await axios
      .get(baseUrl + "/api/notice")
      .then((response) => {
        // 포스트 목록을 업데이트하는 로직 추가
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <BlogPostDetailWrapper>
      <BlogPostTitle>{Notice.title}</BlogPostTitle>
      <BlogPostContent>{Notice.content}</BlogPostContent>
      <ButtonWrapper>
        {showModifyPostButton && (
          <DeleteButton onClick={handleDeleteClick}>포스팅 삭제</DeleteButton>
        )}
        {showModifyPostButton && (
          <EditButton onClick={handleEditClick}>포스팅 수정</EditButton>
        )}
      </ButtonWrapper>
    </BlogPostDetailWrapper>
  );
};

export default BlogPostDetailPage;