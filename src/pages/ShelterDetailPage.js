/* import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { petAction } from "../redux/action/petAction";
import Kakao from "../component/Kakao";
import { kindCdFormat, neuterYnFormat, sexCdFormatImage, ageFormat, sexCdFormat } from "../util/format";

const ShelterDetailPage = () => {
    const dispatch = useDispatch();
    const { petList } = useSelector((state) => state.pet);
    const { id } = useParams();

    useEffect(() => {
        // 특정 동물 정보 가져오기
        console.log("id:", id); // id 값을 확인하기 위한 로그
        dispatch(petAction.getPetDetail(id));
        // 전체 동물 정보 가져오기 (선택적으로 필요한 경우)
        // dispatch(petAction.getContents());
    }, [id, dispatch]);

    // 선택된 동물 정보 확인
    const selectedPet = petList?.response?.body?.items?.item.find((item) => item.desertionNo === id);
    // 선택된 동물이 없을 경우 렌더링하지 않음
    if (!selectedPet) return null;

    console.log("selectedPet:", selectedPet); // 선택된 펫 정보를 확인하기 위한 로그
    const sexImageSrc = sexCdFormatImage(selectedPet.sexCd);
    return (
        <div className="pet_detail_page">
            <div className="inner">
                <p className="main_title">유기동물 입양</p>
                <ul className="result_area">
                    <li>
                        <figure>
                            <img src={selectedPet.popfile} alt="" />
                        </figure>
                    </li>
                    <li>
                        <div className="result_info">
                            <p className="info_title">유기동물 정보</p>
                            <ul className="info_text pet_info">
                                <li>
                                    <dl>
                                        <dt>상태</dt>
                                        <dd>{selectedPet?.processState}</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>품종</dt>
                                        <dd>{kindCdFormat(selectedPet.kindCd)}</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>성별</dt>
                                        <dd>
                                            {sexCdFormat(selectedPet.sexCd)}
                                            <img src={sexImageSrc} alt="성별" />
                                        </dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>색상</dt>
                                        <dd>{selectedPet?.colorCd}</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>나이</dt>
                                        <dd>{ageFormat(selectedPet.age)}</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>체중</dt>
                                        <dd>{selectedPet?.weight}</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>중성화</dt>
                                        <dd>{neuterYnFormat(selectedPet.neuterYn)}</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>공고번호</dt>
                                        <dd>{selectedPet?.noticeNo}</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>특이사항</dt>
                                        <dd>{selectedPet?.specialMark}</dd>
                                    </dl>
                                </li>
                            </ul>
                        </div>
                        <div className="result_info">
                            <p className="info_title">구조 정보</p>
                            <ul className="info_text">
                                <li>
                                    <dl>
                                        <dt>접수일시</dt>
                                        <dd>{selectedPet?.happenDt}</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>발견장소</dt>
                                        <dd>{selectedPet?.happenPlace}</dd>
                                    </dl>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="result_info">
                            <p className="info_title">동물 보호 센터</p>
                            <ul className="info_text cs_info">
                                <li>
                                    <dl>
                                        <dt>보호센터명</dt>
                                        <dd>{selectedPet?.careNm}</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>담당자</dt>
                                        <dd>{selectedPet?.chargeNm}</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>보호소 전화번호</dt>
                                        <dd>{selectedPet?.careTel}</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>담당자 전화번호</dt>
                                        <dd>{selectedPet?.officetel}</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>보호소 주소</dt>
                                        <dd>{selectedPet?.careAddr}</dd>
                                    </dl>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>


            <Kakao careNm={selectedPet?.careNm} kindCd={selectedPet?.kindCd} careAddr={selectedPet?.careAddr} />
        </div>
    );
};

export default ShelterDetailPage;
 */
// ShelterDetailPage.js
// ShelterDetailPage.js

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { petAction } from "../redux/action/petAction";
import Kakao from "../component/Kakao";
import { /* useNavigate, */ useParams } from "react-router-dom";
import ShelterPetContent from "../component/ShelterPetContent";

const ShelterDetailPage = () => {
  /*     const dispatch = useDispatch();
    const { uniqueAllPetsList, allPetsList } = useSelector((state) => state.pet);

    const { id } = useParams();

    useEffect(() => {
        dispatch(petAction.getAllShelters());
    }, [dispatch]);

    console.log("uniqueAllPetsList:", uniqueAllPetsList);
    console.log("allPetsList:", allPetsList);

    // 선택한 보호소 찾기
    const selectedShelter = uniqueAllPetsList.find((shelter) => shelter.desertionNo === id);

    // 선택된 보호소와 동일한 주소의 모든 유기동물 찾기
const petsInSelectedShelter = allPetsList.filter(pet => pet.careAddr === selectedShelter.careAddr); */

  /* const dispatch = useDispatch();
const { uniqueAllPetsList, allPetsList } = useSelector((state) => state.pet);
const [selectedShelter, setSelectedShelter] = useState(null);
const navigate = useNavigate();

const { id } = useParams();

useEffect(() => {
    dispatch(petAction.getAllShelters());
}, [dispatch]);

useEffect(() => {
    const foundShelter = uniqueAllPetsList.find((shelter) => shelter.desertionNo === id);
    setSelectedShelter(foundShelter);
}, [uniqueAllPetsList, id]);

const petsInSelectedShelter = allPetsList.filter(pet => pet.careAddr === selectedShelter?.careAddr);

useEffect(() => {
    const storedShelter = JSON.parse(localStorage.getItem('selectedShelter'));
    if (storedShelter) {
        setSelectedShelter(storedShelter);
    }
}, []);

useEffect(() => {
    localStorage.setItem('selectedShelter', JSON.stringify(selectedShelter));
}, [selectedShelter]);

// 이전 데이터를 삭제하는 함수
const clearLocalStorage = () => {
    localStorage.removeItem('selectedShelter');
};

// 페이지 이동 시에 이전 데이터를 삭제
useEffect(() => {
    const clearDataOnPageChange = () => {
        clearLocalStorage();
    };

    return () => {
        clearDataOnPageChange();
    };
}, []);

if (!selectedShelter) {
    return null;
} */
  const dispatch = useDispatch();
  const { uniqueAllPetsList, allPetsList } = useSelector((state) => state.pet);
  const [selectedShelter, setSelectedShelter] = useState(null);
  /* const navigate = useNavigate(); */
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
      // 스토리지에 데이터가 없을 경우, 이전 데이터를 삭제합니다.
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
