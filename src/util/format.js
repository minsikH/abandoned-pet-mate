export const kindCdFormat = (kindCd) => {
  // 문자열에서 '[개]' 또는 '[고양이]' 또는 [기타축종] 을 제거하여 반환
  return kindCd.replace(/^\[개\] |^\[고양이\] |^\[기타축종\] /, "");
};

export const sexCdFormat = (sexCd) => {
  if (sexCd === "M") {
    return "수컷";
  } else if (sexCd === "F") {
    return "암컷";
  } else {
    return "성별 미상";
  }
};

export const sexCdFormatImage = (sexCd) => {
  if (sexCd === "M") {
    return process.env.PUBLIC_URL + "/img/icon_male.png"; // 수컷 이미지 경로
  } else if (sexCd === "F") {
    return process.env.PUBLIC_URL + "/img/icon_female.png"; // 암컷 이미지 경로
  } else {
    return process.env.PUBLIC_URL + "/img/icon_unknown.png"; // 성별 미상 이미지 경로
  }
};

export const neuterYnFormat = (neuterYn) => {
  if (neuterYn === "Y") {
    return "중성화 완료";
  } else if (neuterYn === "N") {
    return "중성화 미완료";
  } else {
    return "중성화 미상";
  }
};

export const getCurrentYear = () => {
  return new Date().getFullYear();
};
export const ageFormat = (age) => {
  const currentYear = getCurrentYear();
  const ageNum = currentYear - parseInt(age, 10) + 1;
  return ageNum > 0 ? `${ageNum}살` : "나이 미상";
};
