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

  // items가 존재하면 slice 메서드를 호출하고, 그렇지 않으면 빈 배열을 반환
  const currentPosts = items ? items.slice(firstPostIndex, lastPostIndex) : [];
  // items가 존재하고 배열의 길이가 0보다 큰 경우에만 개수를 가져오고, 그렇지 않으면 0으로 설정
  const petCount = items && items.length > 0 ? items.length : 0;
  return (
    <div className="content">
      {loading ? (
        <div className="no-data-container">
          <p className="loading">데이터 로딩중 입니다.</p>
          {/*                     <img src="" alt="No data" /> */}
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
            totalPosts={items ? items.length : 0} // items가 존재하는 경우에만 길이를 가져옵니다.
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
