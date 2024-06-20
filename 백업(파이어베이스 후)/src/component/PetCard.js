import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  kindCdFormat,
  neuterYnFormat,
  sexCdFormatImage,
  ageFormat,
} from "../util/format";

const PetCard = ({ item, isSelected }) => {
  const navigate = useNavigate();
  const [isHeartSelected, setIsHeartSelected] = useState(false);

  const handleClick = () => {
    setIsHeartSelected(!isHeartSelected);
    // 클릭한 항목의 정보를 로컬 스토리지에 추가
    localStorage.setItem("selectedPet", JSON.stringify(item));
    // 다음 경로로 이동
    navigate(`/pet/${item.desertionNo}`);
  };

  const sexImageSrc = sexCdFormatImage(item.sexCd);

  return (
    <div className="pet_card" key={isSelected}>
      <figure onClick={handleClick}>
        <img src={item.popfile} alt="" />
      </figure>
      <ul className="info">
        <li className="info_top">
          <span>{item.processState}</span>
          <img
            src={
              isHeartSelected
                ? process.env.PUBLIC_URL + "/img/icon_heart_on.png"
                : process.env.PUBLIC_URL + "/img/icon_heart_off.png"
            }
            alt=""
            onClick={handleClick}
          />
        </li>
        <li className="info_mid">
          <ul>
            <li>{kindCdFormat(item.kindCd)}</li>
            <li>
              <img src={sexImageSrc} alt="성별" />
            </li>
            <li>{ageFormat(item.age)}</li>
            <li>{neuterYnFormat(item.neuterYn)}</li>
          </ul>
        </li>
        <li className="info_bot">{item.careAddr}</li>
      </ul>
    </div>
  );
};

export default PetCard;
