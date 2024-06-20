import React, { useEffect, useRef } from "react";

const { kakao } = window;

const KakaoShelter = ({ uniqueAllPetsList, onShelterClick }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const container = document.getElementById("map_shelter");
    const options = {
      center: new kakao.maps.LatLng(36.5, 127.5), // 전국 중심 좌표 설정
      level: 12, // 초기 확대 레벨 설정
    };

    const map = new kakao.maps.Map(container, options);
    mapRef.current = map;

    // uniqueAllPetsList가 배열이 아니라 객체일 경우 처리
    if (Array.isArray(uniqueAllPetsList)) {
      uniqueAllPetsList.forEach((pet) => {
        const { careNm, kindCd, careAddr, desertionNo, careTel } = pet;

        const geocoder = new kakao.maps.services.Geocoder();

        geocoder.addressSearch(careAddr, function (result, status) {
          if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            const imageSize = new kakao.maps.Size(30, 30);
            const imageSrc = process.env.PUBLIC_URL + "/img/icon_shelter.png";
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
            });

            const handleClick = () => {
              // 클릭된 보호소 정보를 콜백 함수로 전달
              onShelterClick({
                careNm,
                kindCd,
                careAddr,
                desertionNo,
                careTel,
              });
            };

            marker.addListener("click", handleClick);

            const content =
              '<div class="customoverlay">' +
              `<span class="title">${careNm}</span>` +
              "</div>";

            const position = coords;
            const customOverlay = new kakao.maps.CustomOverlay({
              map: map,
              position: position,
              content: content,
              xAnchor: 0.5,
              yAnchor: 4.5,
            });
          }
        });
      });
    }

    kakao.maps.event.addListener(map, "click", function () {
      map.setCenter(mapRef.current.getCenter());
    });
  }, [uniqueAllPetsList]);

  return (
    <div className="kakao">
      <div id="map_shelter"></div>
    </div>
  );
};

export default KakaoShelter;
