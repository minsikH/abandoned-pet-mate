import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { appFireStore } from "../firebase/config";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CommunityEditPage = () => {
  const { id } = useParams(); // URL에서 파라미터(id) 추출
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Firestore에서 해당 게시물 ID에 해당하는 문서 가져오기
        const docRef = doc(appFireStore, "review", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const postData = docSnap.data();
          setTitle(postData.title);
          setContent(postData.content);
        } else {
          // 문서가 존재하지 않을 경우 에러 처리
          setError("해당 게시물을 찾을 수 없습니다.");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // 로딩 상태 종료
      }
    };

    fetchPost();
  }, [id]); // id가 변경될 때마다 useEffect 재실행

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      // Firestore에서 해당 게시물 ID에 해당하는 문서 업데이트
      const docRef = doc(appFireStore, "review", id);
      await updateDoc(docRef, {
        title,
        content,
      });

      // 업데이트 후 상세 페이지로 이동
      navigate(`/community/${id}`);
    } catch (error) {
      console.error("Error updating document:", error);
      // 에러 처리 (예: 사용자에게 알림 표시)
    }
  };

  if (loading) {
    return <p>게시물을 불러오는 중입니다...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>게시물 수정</h2>
      <Form onSubmit={handleUpdate}>
        <Form.Group controlId="formTitle">
          <Form.Label>제목</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formContent">
          <Form.Label>내용</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          수정
        </Button>
        <Button variant="secondary" onClick={() => navigate(-1)}>
          취소
        </Button>
      </Form>
    </div>
  );
};

export default CommunityEditPage;
