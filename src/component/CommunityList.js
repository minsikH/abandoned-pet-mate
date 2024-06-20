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

    // timestamp를 JavaScript Date 객체로 변환
    const date = timestamp.toDate();

    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false, // AM/PM 표기 여부
    };

    // 날짜를 문자열로 변환하여 반환
    return date.toLocaleDateString("ko-KR", options);
  };

  const handleDetailClick = (id) => {
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
