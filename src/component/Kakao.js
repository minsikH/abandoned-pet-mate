import React, { useEffect } from "react";

const { kakao } = window;

const Kakao = ({ careNm, kindCd, careAddr }) => {
  const isDog = kindCd.includes("[개]");
  const isCat = kindCd.includes("[고양이]");

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(36.5, 127.5), // 전국 중심 좌표 설정
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    const map = new kakao.maps.Map(container, options);
    // 주소를 좌표로 변환하는 geocoder 객체 생성
    const geocoder = new kakao.maps.services.Geocoder();

    // 주소를 좌표로 변환하여 지도에 표시하는 함수
    geocoder.addressSearch(careAddr, function (result, status) {
      // 주소 검색 완료 시
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x); // 좌표를 LatLng 객체로 변환
        // 마커 이미지 정보 설정
        const imageSize = new kakao.maps.Size(50, 50);
        // 마커 이미지 설정
        let imageSrc;

        if (isDog) {
          imageSrc = process.env.PUBLIC_URL + "/img/icon_dog_marker.png"; // 개 이미지 경로
        } else if (isCat) {
          imageSrc = process.env.PUBLIC_URL + "/img/icon_cat_marker.png"; // 고양이 이미지 경로
        } else {
          imageSrc = process.env.PUBLIC_URL + "/img/icon_no_marker.png"; // 기본 이미지 경로
        }
        const imageOption = { offset: new kakao.maps.Point(27, 69) };
        const markerImage = new kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );
        const marker = new kakao.maps.Marker({
          map: map,
          position: coords,
          image: markerImage,
          clickable: false, // 마커 클릭 이벤트 비활성화
        }); // 마커 생성 및 지도에 표시
        map.setCenter(coords); // 지도 중심 좌표를 검색한 위치로 이동

        // 마커 지도에 추가
        marker.setMap(map);

        // 클릭 이벤트 처리
        const handleClick = () => {
          // 클릭된 위치의 좌표
          const destinationCoords = coords.getLat() + "," + coords.getLng();
          // 카카오맵 URL
          const kakaoMapURL = `https://map.kakao.com/link/to/${careNm},${destinationCoords}`;
          // 새 탭에서 카카오맵 페이지 열기
          window.open(kakaoMapURL, "_blank");
        };

        window.handleClick = handleClick;
        // 커스텀 오버레이 생성
        const imagePath = process.env.PUBLIC_URL + "/img/d_arrow_b.png";
        const content =
          '<div class="customoverlay">' +
          `<span class="title" onclick="handleClick()">${careNm}<img src="${imagePath}" alt="" /></span>` +
          "</div>";
        const position = coords; // 좌표값으로 설정
        const customOverlay = new kakao.maps.CustomOverlay({
          map: map,
          position: position,
          content: content,
          xAnchor: 0.5,
          yAnchor: 4.5,
        });
      }
    });
  }, [careAddr]);

  return (
    <div className="kakao">
      <div id="map"></div>
    </div>
  );
};

export default Kakao;
