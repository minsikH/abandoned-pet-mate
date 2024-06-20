import React, { useState } from "react";
import PetCard from "./PetCard";
import CustomPagination from "../component/Pagination";

const ShelterPetContent = ({ petsInSelectedShelter }) => {
  const items = petsInSelectedShelter;
  //console.log("items:", items)
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 8;

  // currentPage에 따라 현재 페이지에 표시할 포스트의 시작과 끝 인덱스를 계산
  const firstPostIndex = (currentPage - 1) * postPerPage;
  const lastPostIndex = currentPage * postPerPage;

  const currentPosts = items ? items.slice(firstPostIndex, lastPostIndex) : [];

  const petCount = items && items.length > 0 ? items.length : 0;
  return (
    <div className="content">
      {petCount === 0 ? (
        <div className="no-data-container">
          <p>데이터가 없습니다.</p>
          <img src="" alt="No data" />
        </div>
      ) : (
        <>
          <p>{petCount}마리의 아이들이 보호자를 기다리고 있어요.</p>
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

export default ShelterPetContent;
