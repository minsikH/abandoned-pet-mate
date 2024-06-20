/* import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { appFireStore } from "../firebase/config";

const CommunityDetailPage = () => {
  const { id } = useParams(); // URL에서 파라미터(id) 추출

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Firestore에서 해당 게시물 ID에 해당하는 문서 가져오기
        const docRef = doc(appFireStore, "review", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          // 문서가 존재할 경우 데이터 설정
          setPost({ id: docSnap.id, ...docSnap.data() });
        } else {
          // 문서가 존재하지 않을 경우 에러 처리
          setError("해당 게시물을 찾을 수 없습니다.");
        }
      } catch (error) {
        // 에러 발생 시 에러 처리
        setError(error.message);
      } finally {
        setLoading(false); // 로딩 상태 종료
      }
    };

    fetchPost(); // fetchPost 함수 호출

    // Cleanup 함수 (컴포넌트 언마운트 시 호출)
    return () => {
      // Cleanup 코드 작성 (필요한 경우)
    };
  }, [id]); // id가 변경될 때마다 useEffect 재실행

  if (loading) {
    return <p>게시물을 불러오는 중입니다...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!post) {
    return <p>해당 게시물을 찾을 수 없습니다.</p>;
  }

  // 게시물이 존재할 경우 UI 렌더링
  return (
    <div>
      <h2>제목:{post.title}</h2>
      <p>작성자: {post.displayName}</p>
      <p>
        작성일:{" "}
        {post.date && new Date(post.date.seconds * 1000).toLocaleString()}
      </p>
      <p>내용:{post.content}</p>
    </div>
  );
};

export default CommunityDetailPage;
 */
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { appFireStore } from "../firebase/config";
import Button from "react-bootstrap/Button";
import { useAuthContext } from "../hooks/useAuthContext";

const CommunityDetailPage = () => {
  const { id } = useParams(); // URL에서 파라미터(id) 추출
  const navigate = useNavigate(); // useNavigate 훅 사용

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuthContext(); // 사용자 정보 또는 uid를 가져오는 방법

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Firestore에서 해당 게시물 ID에 해당하는 문서 가져오기
        const docRef = doc(appFireStore, "review", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          // 문서가 존재할 경우 데이터 설정
          setPost({ id: docSnap.id, ...docSnap.data() });
        } else {
          // 문서가 존재하지 않을 경우 에러 처리
          setError("해당 게시물을 찾을 수 없습니다.");
        }
      } catch (error) {
        // 에러 발생 시 에러 처리
        setError(error.message);
      } finally {
        setLoading(false); // 로딩 상태 종료
      }
    };

    fetchPost(); // fetchPost 함수 호출

    // Cleanup 함수 (컴포넌트 언마운트 시 호출)
    return () => {
      // Cleanup 코드 작성 (필요한 경우)
    };
  }, [id]); // id가 변경될 때마다 useEffect 재실행

  const handleDelete = async () => {
    if (!post || !post.uid || !user) {
      return; // 게시물이 없거나 uid 또는 사용자가 없으면 무시
    }

    // 현재 사용자의 uid와 게시물의 uid 비교
    if (post.uid !== user.uid) {
      alert("게시글 작성자만 삭제할 수 있습니다.");
      return;
    }

    try {
      // Firestore에서 해당 게시물 ID에 해당하는 문서 삭제
      const docRef = doc(appFireStore, "review", id);
      await deleteDoc(docRef);

      // 삭제 후 이전 페이지로 이동
      navigate(-1); // 이전 페이지로 이동
    } catch (error) {
      console.error("Error deleting document:", error);
      // 에러 처리 (예: 사용자에게 알림 표시)
    }
  };

  if (loading) {
    return <p>게시물을 불러오는 중입니다...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!post) {
    return <p>해당 게시물을 찾을 수 없습니다.</p>;
  }

  // 게시물이 존재할 경우 UI 렌더링
  return (
    <div>
      <h2>{post.title}</h2>
      <p>작성자: {post.displayName}</p>
      <p>
        작성일:{" "}
        {post.date && new Date(post.date.seconds * 1000).toLocaleString()}
      </p>
      <p>{post.content}</p>
      <Button variant="secondary" onClick={() => navigate(-1)}>
        목록으로
      </Button>
      <Button variant="danger" onClick={handleDelete}>
        삭제
      </Button>
    </div>
  );
};

export default CommunityDetailPage;
