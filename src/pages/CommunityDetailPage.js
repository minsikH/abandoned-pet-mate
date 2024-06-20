import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  doc,
  getDoc,
  deleteDoc,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { appFireStore } from "../firebase/config";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useAuthContext } from "../hooks/useAuthContext";

const CommunityDetailPage = () => {
  const { id } = useParams(); // URL에서 파라미터(id) 추출
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editCommentId, setEditCommentId] = useState(null);
  const [editCommentContent, setEditCommentContent] = useState("");
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
          setPost({ id: docSnap.id, ...docSnap.data() });
        } else {
          setError("해당 게시물을 찾을 수 없습니다.");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // 로딩 상태 종료
      }
    };

    const fetchComments = async () => {
      const commentsRef = collection(appFireStore, "review", id, "comments");

      const commentsSnap = await getDocs(
        query(commentsRef, orderBy("date", "asc")) //desc내림차순 //asc오름차순
      );

      const commentsData = commentsSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(commentsData);
    };

    fetchPost();
    fetchComments();

    return () => {};
  }, [id, comments]); // id가 변경될 때마다 useEffect 재실행

  const handleDelete = async () => {
    if (!post || !post.uid || !user) {
      alert("게시글 작성자만 삭제할 수 있습니다.");
      return;
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
      navigate(-1);
    } catch (error) {
      //console.error("Error deleting document:", error);
      // 에러 처리 (예: 사용자에게 알림 표시)
    }
  };

  const handleEdit = () => {
    if (!post || !post.uid || !user) {
      alert("게시글 작성자만 수정할 수 있습니다.");
      return;
    }
    if (post.uid !== user.uid) {
      alert("게시글 작성자만 수정할 수 있습니다.");
      return;
    }
    navigate(`/edit/${id}`);
  };

  const handleCommentDelete = async (commentId, commentUid) => {
    if (!user || commentUid !== user.uid) {
      alert("댓글 작성자만 삭제할 수 있습니다.");
      return;
    }

    try {
      const commentRef = doc(appFireStore, "review", id, "comments", commentId);
      await deleteDoc(commentRef);
      setComments(comments.filter((comment) => comment.id !== commentId));
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const handleCommentEdit = async (commentId, commentUid) => {
    if (!user || commentUid !== user.uid) {
      alert("댓글 작성자만 수정할 수 있습니다.");
      return;
    }

    try {
      const commentRef = doc(appFireStore, "review", id, "comments", commentId);
      await updateDoc(commentRef, { content: editCommentContent });
      setComments(
        comments.map((comment) =>
          comment.id === commentId
            ? { ...comment, content: editCommentContent }
            : comment
        )
      );
      setEditCommentId(null);
      setEditCommentContent("");
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("로그인 후 댓글을 작성할 수 있습니다.");
      return;
    }

    try {
      const commentData = {
        content: newComment,
        uid: user.uid,
        displayName: user.displayName,

        date: serverTimestamp(),
      };

      const commentsRef = collection(appFireStore, "review", id, "comments");
      const docRef = await addDoc(commentsRef, commentData);

      // 현재 시간 추가하여 즉시 반영
      const newCommentData = {
        id: docRef.id,
        ...commentData,
      };
      setComments([...comments, newCommentData]);
      setNewComment("");
    } catch (error) {
      console.error("Error adding comment:", error);
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

  const formatDate = (timestamp) => {
    if (!timestamp || !timestamp.seconds) {
      return "불러오는 중...";
    }
    const date = timestamp.toDate();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${year}. ${month}. ${day}. ${hours}:${minutes}`;
  };

  // 게시물이 존재할 경우 UI 렌더링
  return (
    <div className="community_detail_page">
      <div className="inner">
        <p className="main_title">커뮤니티</p>
        <div className="content_area">
          <div className="detail_area">
            <p className="con_top">{post.title}</p>
            <div className="con_mid">
              <div className="left_area">
                {" "}
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/icon_user.png"}
                    alt=""
                  />
                </figure>
                <div className="user_info">
                  <p className="wirter">{post.displayName}</p>
                  <p className="date">{post.date && formatDate(post.date)}</p>
                </div>
              </div>

              <div className="right_area">
                {" "}
                <Button
                  className="btn_delete"
                  variant="danger"
                  onClick={handleDelete}
                >
                  삭제
                </Button>
                <Button
                  className="btn_edit"
                  variant="primary"
                  onClick={handleEdit}
                >
                  수정
                </Button>
              </div>
            </div>
            <div className="con_bot">
              <p>{post.content}</p>
              <Button
                className="btn_type_a"
                variant="secondary"
                onClick={() => navigate(-1)}
              >
                목록으로
              </Button>
            </div>
          </div>

          <div className="comment_list_area">
            <p className="title">댓글</p>
            {comments.length === 0 ? (
              <p className="no_data">댓글이 없습니다.</p>
            ) : (
              comments.map((comment) => (
                <div key={comment.id} className="comment">
                  <div className="con_mid">
                    <div className="left_area">
                      <figure>
                        <img
                          src={process.env.PUBLIC_URL + "/img/icon_user.png"}
                          alt=""
                        />
                      </figure>
                      <div className="user_info">
                        <p className="wirter">{comment.displayName}</p>
                        <p className="date">{formatDate(comment.date)}</p>
                      </div>
                    </div>

                    <div className="right_area">
                      <Button
                        className="btn_delete"
                        variant="danger"
                        onClick={() => {
                          if (user) {
                            if (comment.uid === user.uid) {
                              handleCommentDelete(comment.id, comment.uid);
                            } else {
                              alert("댓글 작성자만 삭제할 수 있습니다.");
                            }
                          } else {
                            alert("댓글 작성자만 삭제할 수 있습니다.");
                          }
                        }}
                      >
                        삭제
                      </Button>
                      <Button
                        className="btn_edit"
                        variant="warning"
                        onClick={() => {
                          if (user) {
                            if (comment.uid === user.uid) {
                              setEditCommentId(comment.id);
                              setEditCommentContent(comment.content);
                            } else {
                              alert("댓글 작성자만 수정할 수 있습니다.");
                            }
                          } else {
                            alert("댓글 작성자만 수정할 수 있습니다.");
                          }
                        }}
                      >
                        수정
                      </Button>
                    </div>
                  </div>

                  {editCommentId === comment.id ? (
                    <Form
                      className="edit_area"
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleCommentEdit(comment.id, comment.uid);
                      }}
                    >
                      <Form.Group controlId="editCommentContent">
                        <Form.Control
                          as="textarea"
                          rows={2}
                          value={editCommentContent}
                          onChange={(e) =>
                            setEditCommentContent(e.target.value)
                          }
                          required
                        />
                      </Form.Group>
                      <div className="btn_edit_area">
                        {" "}
                        <Button
                          className="btn_save"
                          variant="primary"
                          type="submit"
                        >
                          저장
                        </Button>
                        <Button
                          className="btn_cancel"
                          variant="secondary"
                          onClick={() => {
                            setEditCommentId(null);
                            setEditCommentContent("");
                          }}
                        >
                          취소
                        </Button>
                      </div>
                    </Form>
                  ) : (
                    <p className="text">{comment.content}</p>
                  )}
                </div>
              ))
            )}
          </div>

          <div className="comment_wirte_area">
            <Form onSubmit={handleCommentSubmit}>
              <Form.Group controlId="commentContent">
                <Form.Label>댓글 작성</Form.Label>
                <div className="box">
                  {" "}
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    required
                  />
                  <Button
                    className="btn_type_a"
                    variant="primary"
                    type="submit"
                  >
                    작성
                  </Button>
                </div>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityDetailPage;
