import React from "react";
import { useNavigate } from "react-router-dom";

const ShelterCard = ({ item, isSelected, dogsCount, catsCount }) => {
  const navigate = useNavigate();

  // 선택 여부에 따라 클래스를 추가하여 스타일 변경
  const cardClassName = isSelected ? "shelter_selected" : "shelter_card";

  return (
    <div
      className={cardClassName}
      onClick={() => navigate(`/shelter/${item.desertionNo}`)}
    >
      <div className="card_content">
        <div className="info_top">
          <i>센터명</i>
          <span>{item.careNm}</span>
        </div>
        <div className="info_mid">
          <ul>
            <li>
              <i>센터주소</i>
              <img
                src={process.env.PUBLIC_URL + "/img/icon_location.png"}
                alt=""
              />
              <span>{item.careAddr}</span>
            </li>
            <li>
              <i>전화번호</i>
              <img src={process.env.PUBLIC_URL + "/img/icon_call.png"} alt="" />
              <span>{item.careTel}</span>
            </li>
          </ul>
        </div>
        <div className="info_bot">
          <span>보호중</span>
          <div>
            <img src={process.env.PUBLIC_URL + "/img/icon_dog_s.png"} alt="" />
            <span>{dogsCount}마리</span>
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "/img/icon_cat_s.png"} alt="" />
            <span>{catsCount}마리</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShelterCard;
