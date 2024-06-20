import React, { useState } from "react";
import PetCard from "./PetCard";
import CustomPagination from "../component/Pagination";

const Content = ({ petList, loading }) => {
  const items =
    petList &&
    petList.response &&
    petList.response.body &&
    petList.response.body.items &&
    petList.response.body.items.item;
  //console.log("petList:", petList);

  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 12;
  // currentPage에 따라 현재 페이지에 표시할 포스트의 시작과 끝 인덱스를 계산
  const firstPostIndex = (currentPage - 1) * postPerPage;
  const lastPostIndex = currentPage * postPerPage;

  const currentPosts = items ? items.slice(firstPostIndex, lastPostIndex) : [];
  const petCount = items && items.length > 0 ? items.length : 0;
  return (
    <div className="content">
      {loading ? (
        <div className="no-data-container">
          <p className="loading">데이터 로딩중 입니다.</p>
        </div>
      ) : petCount === 0 ? (
        <div className="no-data-container">
          <p className="loading">검색 조건에 맞는 데이터가 없습니다.</p>
        </div>
      ) : (
        <>
          <p>
            <span>{petCount}</span> 마리의 아이들이 보호자를 기다리고 있어요.
          </p>
          <div className="pets">
            {currentPosts.map((item, idx) => (
              <PetCard item={item} key={idx} />
            ))}
          </div>
          <CustomPagination
            totalPosts={items ? items.length : 0}
            postPerPage={postPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
};

export default Content;
