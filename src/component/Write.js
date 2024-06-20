import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { appFireStore } from "../firebase/config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const { user } = useAuthContext();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!user) {
      setError("로그인 후에 글을 작성할 수 있습니다.");
      return;
    }

    const form = event.target;
    const title = form.title.value;
    const content = form.content.value;

    try {
      const collectionRef = collection(appFireStore, "review");
      const docRef = await addDoc(collectionRef, {
        title,
        content,
        displayName: user.displayName,
        uid: user.uid,
        date: serverTimestamp(),
      });
      //console.log("Document written with ID: ", docRef.id);
      // 글 작성 완료 후 이전 페이지로 이동
      navigate(-1);
    } catch (error) {
      console.error("Error adding document: ", error);
      setError("글 작성 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="write">
      <div className="inner">
        <p className="main_title">글 쓰기</p>
        <div className="user_info_area">
          {" "}
          <figure>
            <img src={process.env.PUBLIC_URL + "/img/icon_user.png"} alt="" />
          </figure>
          <div className="user_info">
            <p className="wirter">{user.displayName}</p>
          </div>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>제목</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="제목을 입력하세요"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>내용</Form.Label>
            <Form.Control
              as="textarea"
              name="content"
              placeholder="내용을 입력하세요"
            />
          </Form.Group>
          <div className="btn_area">
            {" "}
            <Button className="btn_save" variant="info" type="submit">
              작성완료
            </Button>
            <Button
              className="btn_cancel"
              variant="secondary"
              type="button"
              onClick={() => navigate(-1)}
            >
              취소
            </Button>
          </div>
        </Form>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Write;
