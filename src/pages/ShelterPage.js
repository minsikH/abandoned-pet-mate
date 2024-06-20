import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import KakaoShelter from "../component/KakaoShelter";
import ShelterContent from "../component/ShelterContent";
import { petAction } from "../redux/action/petAction";
import ShelterCard from "../component/ShelterCard";
import { useLocation } from "react-router-dom";

const ShelterPage = () => {
  const dispatch = useDispatch();
  const { uniqueAllPetsList, loading, allPetsList } = useSelector(
    (state) => state.pet
  );

  useEffect(() => {
    dispatch(petAction.getAllShelters());
  }, [dispatch]);
  //console.log("Clicked uniqueAllPetsList:", uniqueAllPetsList);

  // 클릭된 보호소 정보 처리 함수
  const [selectedShelter, setSelectedShelter] = useState(null);
  const handleShelterClick = (shelterInfo) => {
    //console.log("Clicked shelter:", shelterInfo);
    setSelectedShelter(shelterInfo);
  };

  //해당 보호소의 보호중이 동물수
  const petsInSelectedShelter = selectedShelter
    ? allPetsList.filter((pet) => pet.careAddr === selectedShelter.careAddr)
    : allPetsList;
  //console.log("같은 보호소 동물", petsInSelectedShelter);

  //해당 보호소의 보호중이 동물수
  const selectedShelterPets = selectedShelter
    ? allPetsList.filter((pet) => pet.careAddr === selectedShelter.careAddr)
    : allPetsList;

  const location = useLocation();

  useEffect(() => {
    const clearLocalStorage = () => {
      localStorage.removeItem("selectedPet");
      localStorage.removeItem("selectedShelter");
    };
    clearLocalStorage(); // 페이지 이동 시 로컬 스토리지 삭제 함수 호출
  }, [location]);

  //console.log("Clicked selectedShelter:", selectedShelter);
  if (loading) {
    return <p className="loading loading_shelter">데이터 로딩중 입니다.</p>;
  }

  return (
    <div className="shelter_page">
      <div className="inner">
        <p className="main_title">보호소</p>
        <div className="top">
          <div className="kakao_shelter">
            <KakaoShelter
              uniqueAllPetsList={uniqueAllPetsList}
              onShelterClick={handleShelterClick}
            />
          </div>
          <div className="result">
            <p className="info_title">선택한 보호소 정보</p>
            {selectedShelter ? (
              <ShelterCard
                item={selectedShelter}
                isSelected={true}
                dogsCount={
                  selectedShelterPets.filter(
                    (pet) =>
                      pet.careAddr === selectedShelter.careAddr &&
                      pet.kindCd.includes("개")
                  ).length
                }
                catsCount={
                  selectedShelterPets.filter(
                    (pet) =>
                      pet.careAddr === selectedShelter.careAddr &&
                      pet.kindCd.includes("고양이")
                  ).length
                }
              />
            ) : (
              <div className="off_shelter">
                <img
                  src={process.env.PUBLIC_URL + "/img/icon_shelter.png"}
                  alt=""
                />
                <span>지도에서 근처 보호소를 선택해 주세요.</span>
              </div>
            )}
          </div>
        </div>

        <div className="shelter_list">
          <ShelterContent
            uniqueAllPetsList={uniqueAllPetsList}
            petsInSelectedShelter={petsInSelectedShelter}
          />
        </div>
      </div>
    </div>
  );
};

export default ShelterPage;
