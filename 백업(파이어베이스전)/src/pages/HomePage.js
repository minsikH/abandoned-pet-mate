import React, { useEffect, useState } from "react";
import Filter from "../component/Filter";
import Content from "../component/Content";
import { petAction } from "../redux/action/petAction";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";

const HomePage = () => {
  const dispatch = useDispatch();
  const { petList, loading } = useSelector((state) => state.pet);
  const [query, setQuery] = useState({
    UPKIND_NM: "417000",
    STATE_NM: "protect",
    LOCATION_NM: "",
    KIND_NM: "",
    NEUTER_NM: "",
  });
  //console.log("qer", query);

  // useEffect를 사용하여 query가 변경될 때마다 API 요청을 보내도록 설정
  useEffect(() => {
    // dispatch를 사용하여 API 요청 보내기
    dispatch(petAction.getContents(query));
  }, [dispatch, query]);

  useEffect(() => {
    //console.log("petList:", petList);
  }, [petList]);

  // handleChange 함수는 Filter 컴포넌트에서 변경된 필터 값을 받아옴
  const handleChange = (newQuery) => {
    // 받아온 필터 값을 상태로 설정
    setQuery(newQuery);
  };

  const location = useLocation();

  useEffect(() => {
    const clearLocalStorage = () => {
      localStorage.removeItem("selectedPet");
      localStorage.removeItem("selectedShelter");
    };
    clearLocalStorage(); // 페이지 이동 시 로컬 스토리지 삭제 함수 호출
  }, [location]);

  return (
    <div className="home_page">
      <div className="main_img_area">
        <img src={process.env.PUBLIC_URL + "/img/img_main.png"} alt="" />
        <div className="main_text_area">
          <p className="title">유기 펫 메이트 란?</p>
          <p className="text">
            유기동물들이 새로운 가정을 찾을 수 있는 기회를 <br />
            제공하기 위해, 다양한 유기동물들을 소개합니다. <br />
            모두의 지속적인 관심과 노력으로 더 많은 유기
            <br />
            동물들이 따뜻한 보금자리를 찾을 수 있습니다.
          </p>
        </div>
      </div>
      <div className="inner">
        <p className="main_title">유기동물 입양</p>
        <div className="filter_area">
          <Filter query={query} onChange={handleChange} />
          {/*                     <p>{petCount}마리의 아이들이 보호자를 기다리고 있어요.</p> */}
        </div>
        <div className="content_area">
          <Content petList={petList} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
