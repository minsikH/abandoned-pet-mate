import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { petAction } from "../redux/action/petAction";
import Kakao from "../component/Kakao";
import {
  kindCdFormat,
  neuterYnFormat,
  sexCdFormatImage,
  ageFormat,
  sexCdFormat,
} from "../util/format";

const PetDetailPage = () => {
  const dispatch = useDispatch();
  const { petList } = useSelector((state) => state.pet);
  const { id } = useParams();
  const [selectedPet, setSelectedPet] = useState(null);

  // 특정 동물 정보 가져오기
  useEffect(() => {
    dispatch(petAction.getPetDetail(id));
  }, [id, dispatch]);

  // 선택된 동물 정보 설정 및 로컬 스토리지에 저장
  useEffect(() => {
    if (petList) {
      const pet = petList?.response?.body?.items?.item.find(
        (item) => item.desertionNo === id
      );
      if (pet) {
        setSelectedPet(pet);
        localStorage.setItem("selectedPet", JSON.stringify(pet));
      }
    }
  }, [petList, id]);

  // 페이지가 로드될 때 로컬 스토리지에서 데이터 불러오기
  useEffect(() => {
    const storedPet = JSON.parse(localStorage.getItem("selectedPet"));
    if (storedPet) {
      setSelectedPet(storedPet);
    }
  }, []);

  // 페이지가 이동될 때 이전 데이터 삭제
  useEffect(() => {
    const clearLocalStorage = () => {
      localStorage.removeItem("selectedPet");
    };

    return () => {
      clearLocalStorage();
    };
  }, []);

  // 선택된 동물이 없으면 null 반환
  if (!selectedPet) {
    return null;
  }

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

      {/* 카카오 정보 표시 */}
      <Kakao
        careNm={selectedPet?.careNm}
        kindCd={selectedPet?.kindCd}
        careAddr={selectedPet?.careAddr}
      />
    </div>
  );
};

export default PetDetailPage;
