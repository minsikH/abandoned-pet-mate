/* import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const CommunityList = ({ tab, documents }) => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleWriteClick = () => {
    if (!user) {
      alert("로그인이 필요합니다.");
      navigate("/login"); // 로그인 페이지로 이동
    } else {
      navigate("/write"); // 글쓰기 페이지로 이동
    }
  };

  return (
    <div className="community_list">
      <p className={tab === 0 ? "tab-content1" : "tab-content2"}>
        {tab === 0 ? "자유게시판" : "자주묻는질문"}
      </p>

      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {documents &&
              documents.map((documents) => {
                return (
                  <tr key={documents.id}>
                    <td>1</td>
                    <td>{documents.title}</td>
                    <td>{documents.displayName}</td>
                    <td>{documents.date}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
        {tab === 0 && ( // 자유게시판 탭인 경우에만 버튼을 보여줍니다.
          <div className="btn_area">
            <Button onClick={handleWriteClick}>글쓰기</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityList;
 */
/* import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const CommunityList = ({ tab, documents }) => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleWriteClick = () => {
    if (!user) {
      alert("로그인이 필요합니다.");
      navigate("/login"); // 로그인 페이지로 이동
    } else {
      navigate("/write"); // 글쓰기 페이지로 이동
    }
  };

  // 날짜 형식을 포맷하는 함수 (옵션)
  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <div className="community_list">
      <p className={tab === 0 ? "tab-content1" : "tab-content2"}>
        {tab === 0 ? "자유게시판" : "자주묻는질문"}
      </p>

      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {documents &&
              documents.map((doc, index) => (
                <tr key={doc.id}>
                  <td>{index + 1}</td>
                  <td>{doc.title}</td>
                  <td>{doc.displayName}</td>
                  <td>{formatDate(doc.date)}</td>
                </tr>
              ))}
          </tbody>
        </Table>
        {tab === 0 && ( // 자유게시판 탭인 경우에만 버튼을 보여줍니다.
          <div className="btn_area">
            <Button onClick={handleWriteClick}>글쓰기</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityList; */
/* import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const CommunityList = ({ tab, documents }) => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleWriteClick = () => {
    if (!user) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    } else {
      navigate("/write");
    }
  };

  // 날짜 형식을 포맷하는 함수 (옵션)
  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  console.log("Documents:", documents); // 데이터를 콘솔에 출력하여 확인

  return (
    <div className="community_list">
      <p className={tab === 0 ? "tab-content1" : "tab-content2"}>
        {tab === 0 ? "자유게시판" : "자주묻는질문"}
      </p>

      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {documents &&
              documents.map((doc, index) => (
                <tr key={doc.id}>
                  <td>{index + 1}</td>
                  <td>{doc.title}</td>
                  <td>{doc.displayName}</td>
                  <td>{formatDate(doc.date)}</td>
                </tr>
              ))}
          </tbody>
        </Table>
        {tab === 0 && (
          <div className="btn_area">
            <Button onClick={handleWriteClick}>글쓰기</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityList;
 */
// CommunityList.js
import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const CommunityList = ({ tab, documents }) => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleWriteClick = () => {
    if (!user) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    } else {
      navigate("/write");
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp || !timestamp.toDate) {
      return "날짜 정보 없음";
    }

    // Firestore에서 가져온 timestamp를 JavaScript Date 객체로 변환
    const date = timestamp.toDate();

    // 원하는 날짜 포맷 설정 (예: "yyyy년 MM월 dd일 a hh시 mm분 ss초")
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true, // AM/PM 표기 여부
    };

    // 날짜를 문자열로 변환하여 반환
    return date.toLocaleDateString("ko-KR", options);
  };

  const handleDetailClick = (id) => {
    // 디테일 페이지로 이동
    navigate(`/community/${id}`);
  };

  return (
    <div className="community_list">
      <p className={tab === 0 ? "tab-content1" : "tab-content2"}>
        {tab === 0 ? "자유게시판" : "자주묻는질문"}
      </p>

      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {documents &&
              documents.map((doc, index) => (
                <tr key={doc.id} onClick={() => handleDetailClick(doc.id)}>
                  <td>{documents.length - index}</td>
                  <td>{doc.title}</td>
                  <td>{doc.displayName}</td>
                  <td>{formatDate(doc.date)}</td>
                </tr>
              ))}
          </tbody>
        </Table>
        {tab === 0 && (
          <div className="btn_area">
            <Button onClick={handleWriteClick}>글쓰기</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityList;
