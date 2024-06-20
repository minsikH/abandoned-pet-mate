import React, { useState, useEffect } from "react";
import CustomPagination from "../component/Pagination";
import ShelterCard from "./ShelterCard";

const ShelterContent = ({ uniqueAllPetsList, petsInSelectedShelter }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 12;

  // 페이지 번호가 변경될 때마다 currentPage를 업데이트
  useEffect(() => {
    setCurrentPage(1); // uniqueAllPetsList가 변경되면 첫 페이지로 돌아가기
  }, [uniqueAllPetsList]);

  // currentPage에 따라 현재 페이지에 표시할 포스트의 시작과 끝 인덱스를 계산
  const firstPostIndex = (currentPage - 1) * postPerPage;
  const lastPostIndex = currentPage * postPerPage;

  const currentPosts = uniqueAllPetsList
    ? uniqueAllPetsList.slice(firstPostIndex, lastPostIndex)
    : [];

  const petCount =
    uniqueAllPetsList && uniqueAllPetsList.length > 0
      ? uniqueAllPetsList.length
      : 0;

  return (
    <div className="shelter_content">
      {petCount === 0 ? (
        <div className="no-data-container">
          <p>데이터가 없습니다.</p>
        </div>
      ) : (
        <>
          <p className="title">
            <span>{petCount}</span>개의 보호소가 있습니다.
          </p>
          <div className="shelter_list">
            {currentPosts.map((item, idx) => (
              <ShelterCard
                item={item}
                key={idx}
                dogsCount={
                  petsInSelectedShelter.filter(
                    (pet) =>
                      pet.careAddr === item.careAddr &&
                      pet.kindCd.includes("개")
                  ).length
                }
                catsCount={
                  petsInSelectedShelter.filter(
                    (pet) =>
                      pet.careAddr === item.careAddr &&
                      pet.kindCd.includes("고양이")
                  ).length
                }
              />
            ))}
          </div>
          <CustomPagination
            totalPosts={uniqueAllPetsList ? uniqueAllPetsList.length : 0}
            postPerPage={postPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
};

export default ShelterContent;
