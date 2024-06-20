import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const CommunityList = ({ tab }) => {
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
            <tr>
              <td>7</td>
              <td>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Expedita facere maiores ea aspernatur excepturi quae modi?
                Accusamus corporis voluptate voluptatibus. Delectus animi
                incidunt iusto perferendis officiis nemo, harum quisquam ut?
              </td>
              <td>관리자</td>
              <td>2024.05.05</td>
            </tr>
            <tr>
              <td>6</td>
              <td>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Expedita facere maiores ea aspernatur excepturi quae modi?
                Accusamus corporis voluptate voluptatibus. Delectus animi
                incidunt iusto perferendis officiis nemo, harum quisquam ut?
              </td>
              <td>관리자</td>
              <td>2024.05.05</td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Expedita facere maiores ea aspernatur excepturi quae modi?
                Accusamus corporis voluptate voluptatibus. Delectus animi
                incidunt iusto perferendis officiis nemo, harum quisquam ut?
              </td>
              <td>관리자</td>
              <td>2024.05.05</td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Expedita facere maiores ea aspernatur excepturi quae modi?
                Accusamus corporis voluptate voluptatibus. Delectus animi
                incidunt iusto perferendis officiis nemo, harum quisquam ut?
              </td>
              <td>관리자</td>
              <td>2024.05.05</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Expedita facere maiores ea aspernatur excepturi quae modi?
                Accusamus corporis voluptate voluptatibus. Delectus animi
                incidunt iusto perferendis officiis nemo, harum quisquam ut?
              </td>
              <td>관리자</td>
              <td>2024.05.05</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Expedita facere maiores ea aspernatur excepturi quae modi?
                Accusamus corporis voluptate voluptatibus. Delectus animi
                incidunt iusto perferendis officiis nemo, harum quisquam ut?
              </td>
              <td>관리자</td>
              <td>2024.05.05</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Expedita facere maiores ea aspernatur excepturi quae modi?
                Accusamus corporis voluptate voluptatibus. Delectus animi
                incidunt iusto perferendis officiis nemo, harum quisquam ut?
              </td>
              <td>관리자</td>
              <td>2024.05.05</td>
            </tr>
          </tbody>
        </Table>
        {tab === 0 && ( // 자유게시판 탭인 경우에만 버튼을 보여줍니다.
          <div className="btn_area">
            <Link to="/write">
              <Button variant="info">글쓰기</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityList;
