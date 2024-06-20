/* import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import KakaoShelter from "../component/KakaoShelter";
import ShelterContent from "../component/ShelterContent";
import { petAction } from "../redux/action/petAction";
import ShelterCard from "../component/ShelterCard";

const ShelterPage = () => {
    const dispatch = useDispatch();
    const { petList, loading } = useSelector((state) => state.pet);
    const [query, setQuery] = useState({
        UPKIND_NM: "417000",
        STATE_NM: "protect",
        LOCATION_NM: "",
        KIND_NM: "",
        NEUTER_NM: "",
    });

    useEffect(() => {
        // ShelterPage가 마운트될 때 데이터를 가져오도록 설정
        dispatch(petAction.getContents(query));
    }, [dispatch, query]);

    console.log("petList:", petList); // petList 콘솔 출력

    if (loading) {
        // 데이터가 로드되지 않은 경우 "로딩 중" 메시지 표시
        return <div>Loading...</div>;
    }

    return (
        <div className="selter_page">
            <div className="inner">
                <p className="main_title">보호소</p>
                <div className="kakao_shelter">
                    <KakaoShelter petList={petList} />
                    <div className="ruselt"></div>
                </div>
                <div className="shelter_list">
                    <ShelterContent petList={petList} />
                </div>
            </div>
        </div>
    );
};

export default ShelterPage; */

// ShelterPage.js
/* import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import KakaoShelter from "../component/KakaoShelter";
import ShelterContent from "../component/ShelterContent";
import { petAction } from "../redux/action/petAction";
import ShelterCard from "../component/ShelterCard";

const ShelterPage = () => {
    const dispatch = useDispatch();
    const { petList, loading } = useSelector((state) => state.pet);
    const [query, setQuery] = useState({
        UPKIND_NM: "417000",
        STATE_NM: "protect",
        LOCATION_NM: "",
        KIND_NM: "",
        NEUTER_NM: "",
    });
    const [selectedShelter, setSelectedShelter] = useState(null);

    useEffect(() => {
        // ShelterPage가 마운트될 때 데이터를 가져오도록 설정
        dispatch(petAction.getContents(query));
    }, [dispatch, query]);

    console.log("petList:", petList); // petList 콘솔 출력

    // 클릭된 보호소 정보 처리 함수
    const handleShelterClick = (shelterInfo) => {
        // 클릭된 보호소 정보를 출력하거나 다른 작업 수행
        console.log("Clicked shelter:", shelterInfo);
        setSelectedShelter(shelterInfo); // 클릭된 보호소 정보 설정
    };

    if (loading) {
        // 데이터가 로드되지 않은 경우 "로딩 중" 메시지 표시
        return <div>Loading...</div>;
    }

    return (
        <div className="selter_page">
            <div className="inner">
                <p className="main_title">보호소</p>
                <div className="top">
                    <div className="kakao_shelter">
                        <KakaoShelter petList={petList} onShelterClick={handleShelterClick} />
                    </div>
                    <div className="ruselt">
                        {selectedShelter && <ShelterCard item={selectedShelter} />}{" "}
                    </div>
                </div>

                <div className="shelter_list">
                    <ShelterContent petList={petList} />
                </div>
            </div>
        </div>
    );
};

export default ShelterPage; */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import KakaoShelter from "../component/KakaoShelter";
import ShelterContent from "../component/ShelterContent";
import { petAction } from "../redux/action/petAction";
import ShelterCard from "../component/ShelterCard";
import { useLocation /* , useNavigate */ } from "react-router-dom";

const ShelterPage = () => {
  const dispatch = useDispatch();
  const { uniqueAllPetsList, loading } = useSelector((state) => state.pet);
  /*     const navigate = useNavigate(); // 추가된 부분 */

  useEffect(() => {
    dispatch(petAction.getAllShelters());
  }, [dispatch]);
  //console.log("Clicked uniqueAllPetsList:", uniqueAllPetsList);
  // 클릭된 보호소 정보 처리 함수
  const [selectedShelter, setSelectedShelter] = useState(null);
  const handleShelterClick = (shelterInfo) => {
    // 클릭된 보호소 정보를 출력하거나 다른 작업 수행
    console.log("Clicked shelter:", shelterInfo);
    setSelectedShelter(shelterInfo); // 클릭된 보호소 정보 설정
  };

  const location = useLocation();

  useEffect(() => {
    const clearLocalStorage = () => {
      localStorage.removeItem("selectedPet");
      localStorage.removeItem("selectedShelter");
    };
    clearLocalStorage(); // 페이지 이동 시 로컬 스토리지 삭제 함수 호출
  }, [location]);

  console.log("Clicked selectedShelter:", selectedShelter);
  if (loading) {
    // 데이터 로딩 중일 때 "로딩 중" 메시지 표시
    return <div>Loading...</div>;
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

            {/*                    {selectedShelter && (
                                <ShelterCard
                                    item={selectedShelter}
                                    isSelected={true}
                                />
                            )} */}
            {selectedShelter ? (
              <ShelterCard item={selectedShelter} isSelected={true} />
            ) : (
              <div className="off_shelter">
                <img
                  src={process.env.PUBLIC_URL + "/img/icon_shelter.png"}
                  alt=""
                />
                <span>지도에서 근처 보호소를 선택해 주세요.</span>
              </div> // 초기 메시지
            )}
          </div>
        </div>

        <div className="shelter_list">
          <ShelterContent uniqueAllPetsList={uniqueAllPetsList} />
        </div>
      </div>
    </div>
  );
};

export default ShelterPage;
