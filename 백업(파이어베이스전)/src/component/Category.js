import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { MdLocationOn, MdCategory } from "react-icons/md";

const regions = [
  "전체",
  "서울특별시",
  "부산광역시",
  "대구광역시",
  "인천광역시",
  "광주광역시",
  "세종특별자치시",
  "대전광역시",
  "울산광역시",
  "경기도",
  "강원특별자치도",
  "충청북도",
  "충청남도",
  "전북특별자치도",
  "전라남도",
  "경상북도",
  "경상남도",
  "제주특별자치도",
];

export default function Category({ query, onChange }) {
  const { PBLANC_BEGIN_DE, PBLANC_END_DE, SIGUN_NM, SPECIES_NM } = query;

  return (
    <div className="category">
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        {/* 공고 시작, 마감일  */}
        <div className="box-form">
          <label className="label" htmlFor="bgnde">
            <FaCalendarAlt className="icon" />
            &nbsp;날짜
            <b>*</b>
          </label>
          <div className="calender">
            <input
              className="input"
              name="PBLANC_BEGIN_DE"
              id="PBLANC_BEGIN_DE"
              value={PBLANC_BEGIN_DE}
              onChange={onChange}
              type="date"
            ></input>
            <input
              className="input"
              name="PBLANC_END_DE"
              id="PBLANC_END_DE"
              value={PBLANC_END_DE}
              onChange={onChange}
              type="date"
            ></input>
          </div>
        </div>
        {/* 경기도내 시군구 */}
        <div className="box-form">
          <label className="label" htmlFor="SIGUN_NM">
            <MdLocationOn className="icon" />
            &nbsp;시군구
            <b>*</b>
          </label>
          <select
            className="select"
            name="SIGUN_NM"
            id="SIGUN_NM"
            value={SIGUN_NM}
            onChange={onChange}
          >
            {regions.map((region, idx) => (
              <option value={region !== "전체" ? region : ""} key={idx}>
                {region}
              </option>
            ))}
          </select>
        </div>

        {/* 품종 */}
        <div className="box-form">
          <label className="label" htmlFor="SPECIES_NM">
            <MdCategory className="icon" />
            &nbsp;품종
            <b>*</b>
          </label>
          <select
            className="select"
            name="SPECIES_NM"
            id="SPECIES_NM"
            value={SPECIES_NM}
            onChange={onChange}
          >
            <option value="">모두</option>
            <option value="[개]">강아지</option>
            <option value="[고양이]">고양이</option>
            <option value="[기타축종]">다른친구들</option>
          </select>
        </div>
        <button className="button" type="submit">
          조회
        </button>
      </form>
    </div>
  );
}
