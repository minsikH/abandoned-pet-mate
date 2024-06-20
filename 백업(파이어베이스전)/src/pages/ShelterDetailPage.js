import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { petAction } from "../redux/action/petAction";
import Kakao from "../component/Kakao";
import { useParams } from "react-router-dom";
import ShelterPetContent from "../component/ShelterPetContent";

const ShelterDetailPage = () => {
  const { loading } = useSelector((state) => state.pet);

  const dispatch = useDispatch();
  const { uniqueAllPetsList, allPetsList } = useSelector((state) => state.pet);
  const [selectedShelter, setSelectedShelter] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    dispatch(petAction.getAllShelters());
  }, [dispatch]);

  useEffect(() => {
    const foundShelter = uniqueAllPetsList.find(
      (shelter) => shelter.desertionNo === id
    );
    setSelectedShelter(foundShelter);
  }, [uniqueAllPetsList, id]);

  const petsInSelectedShelter = allPetsList.filter(
    (pet) => pet.careAddr === selectedShelter?.careAddr
  );

  useEffect(() => {
    const storedShelter = JSON.parse(sessionStorage.getItem("selectedShelter"));
    if (storedShelter) {
      setSelectedShelter(storedShelter);
    } else {
      // 스토리지에 데이터가 없을 경우, 이전 데이터를 삭제
      setSelectedShelter(null);
    }
  }, [id]);

  useEffect(() => {
    if (selectedShelter) {
      localStorage.setItem("selectedShelter", JSON.stringify(selectedShelter));
    }
  }, [selectedShelter]);

  // 이전 데이터를 삭제하는 함수
  const clearLocalStorage = () => {
    localStorage.removeItem("selectedShelter");
  };

  // 페이지 이동 시에 이전 데이터를 삭제
  useEffect(() => {
    const handleNavigate = () => {
      clearLocalStorage();
    };

    return () => {
      handleNavigate();
    };
  }, []);

  if (loading) {
    return <p className="loading loading_shelter">데이터 로딩중 입니다.</p>;
  }

  if (!selectedShelter) {
    return null;
  }

  return (
    <div className="pet_detail_page shelter_detail_page">
      <div className="inner">
        <p className="main_title">보호소</p>
        <ul className="result_area">
          <li>
            <div className="result_info">
              <p className="info_title">동물 보호 센터</p>
              <ul className="info_text cs_info">
                <li>
                  <dl>
                    <dt>보호센터명</dt>
                    <dd>{selectedShelter?.careNm}</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>담당자</dt>
                    <dd>{selectedShelter?.chargeNm}</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>보호소 전화번호</dt>
                    <dd>{selectedShelter?.careTel}</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>담당자 전화번호</dt>
                    <dd>{selectedShelter?.officetel}</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>보호소 주소</dt>
                    <dd>{selectedShelter?.careAddr}</dd>
                  </dl>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Kakao
              careNm={selectedShelter.careNm}
              kindCd={selectedShelter.kindCd}
              careAddr={selectedShelter.careAddr}
            />
          </li>
          <li>
            {/*                         <ul className="result_area">
                            {petsInSelectedShelter && petsInSelectedShelter.length > 0 ? (
                                petsInSelectedShelter.map((pet) => (
                                    <li key={pet.desertionNo}>
                                        <figure>
                                            <img src={pet.popfile} alt="" />
                                        </figure>
                                        <div className="result_info">
                                            <p className="info_title">유기동물 정보</p>
                                            <ul className="info_text pet_info">
                                                <li>
                                                    <dl>
                                                        <dt>공고번호</dt>
                                                        <dd>{pet.noticeNo}</dd>
                                                    </dl>
                                                </li>
                                                <li>
                                                    <dl>
                                                        <dt>특이사항</dt>
                                                        <dd>{pet.specialMark}</dd>
                                                    </dl>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <li>해당 보호소에 속한 동물 정보가 없습니다.</li>
                            )}
                        </ul> */}
            <ShelterPetContent petsInSelectedShelter={petsInSelectedShelter} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShelterDetailPage;
