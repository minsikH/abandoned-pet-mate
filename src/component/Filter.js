import React, { useEffect, useState } from "react";

const Filter = ({ query, onChange }) => {
  const regions = {
    전체: "",
    서울특별시: "6110000",
    부산광역시: "6260000",
    대구광역시: "6270000",
    인천광역시: "6280000",
    광주광역시: "6290000",
    세종특별자치시: "5690000",
    대전광역시: "6300000",
    울산광역시: "6310000",
    경기도: "6410000",
    강원특별자치도: "6530000",
    충청북도: "6430000",
    충청남도: "6440000",
    전북특별자치도: "6540000",
    전라남도: "6460000",
    경상북도: "6470000",
    경상남도: "6480000",
    제주특별자치도: "6500000",
  };

  const cats = {
    전체: "",
    고양이: "000116",
    기타: "000201",
    노르웨이숲: "000170",
    니벨룽: "000218",
    데본렉스: "000171",
    러시안블루: "000172",
    레그돌: "00213",
    레그돌라가머핀: "000173",
    맹크스: "000174",
    먼치킨: "000175",
    메인쿤: "000176",
    믹스묘: "000212",
    발리네즈: "000177",
    버만: "000178",
    벵갈: "000179",
    봄베이: "000180",
    브리티쉬롱헤어: "000216",
    브리티시쇼트헤어: "000181",
    사바나캣: "000182",
    샤트룩스: "000183",
    샴: "000184",
    셀커크렉스: "000185",
    소말리: "000186",
    스노우슈: "000187",
    스코티시폴드: "000188",
    스핑크스: "000189",
    시베리안포레스트: "000190",
    싱가퓨라: "000191",
    아메리칸쇼트헤어: "000192",
    아비시니안: "000193",
    재패니즈밥테일: "000194",
    터키시앙고라: "000195",
    통키니즈: "000196",
    페르시안: "00214",
    페르시안친칠라: "000197",
    하바나브라운: "000198",
    하일랜드폴드: "000199",
    한국고양이: "000200",
  };

  const dogs = {
    전체: "",
    골든리트리버: "000054",
    그레이하운드: "000056",
    그레이트덴: "000055",
    그레이트피레니즈: "000118",
    기타: "000115",
    꼬똥드뚤레아: "000037",
    네오폴리탄마스티프: "000081",
    노르포크테리어: "000204",
    노리치테리어: "000083",
    노퍽테리어: "00216",
    뉴펀들랜드: "000082",
    닥스훈트: "000038",
    달마시안: "000039",
    댄디딘몬트테리어: "000040",
    도고까니리오: "000043",
    도고아르젠티노: "000042",
    도고아르젠티노스: "000153",
    도베르만: "000041",
    도사: "000120",
    도사믹스견: "000219",
    동경견: "000155",
    라브라도리트리버: "000069",
    라사압소: "000071",
    라이카: "000142",
    래빗닥스훈드: "000093",
    랫테리어: "000167",
    레이크랜드테리어: "000070",
    로디지안리즈백: "000166",
    로트와일러: "000094",
    로트와일러스: "000121",
    로트와일러믹스견: "000223",
    마리노이즈: "000152",
    마스티프: "000073",
    말라뮤트: "000146",
    말티즈: "000072",
    맨체스터테리어: "000159",
    미니어쳐닥스훈트: "000076",
    미니어쳐불테리어: "000075",
    미니어쳐슈나우저: "000079",
    미니어쳐푸들: "000078",
    미니어쳐핀셔: "000077",
    미디엄푸들: "000074",
    미텔스피츠: "000080",
    믹스견: "000114",
    바센지: "000133",
    바셋하운드: "000012",
    버니즈마운틴독: "000017",
    베들링턴테리어: "000015",
    벨기에그로넨달: "000164",
    벨기에쉽독: "000157",
    벨기에테뷰런: "000148",
    벨지안셰퍼드독: "000016",
    보더콜리: "000020",
    보르조이: "000021",
    보스턴테리어: "000022",
    복서: "000024",
    볼로네즈: "000208",
    부비에데플랑드르: "000023",
    불테리어: "000026",
    불독: "000027",
    브뤼셀그리펀: "000169",
    브리타니스파니엘: "000025",
    블랙테리어: "000019",
    비글: "000013",
    비숑프리제: "000018",
    비어디드콜리: "000014",
    비즐라: "000162",
    빠삐용: "000085",
    사모예드: "000096",
    살루키: "000095",
    삽살개: "000001",
    샤페이: "000034",
    세인트버나드: "000104",
    센트럴아시안오브차카: "000031",
    셔틀랜드쉽독: "000099",
    셰퍼드: "000122",
    슈나우져: "000123",
    스코티쉬테리어: "000097",
    스코티시디어하운드: "000132",
    스태퍼드셔불테리어: "000154",
    스태퍼드셔불테리어믹스견: "000222",
    스탠다드푸들: "000105",
    스피츠: "000124",
    시바: "000100",
    시베리안허스키: "000103",
    시베리안라이카: "000151",
    시잉프랑세즈: "000139",
    시츄: "000101",
    시코쿠: "000102",
    실리햄테리어: "000098",
    실키테리어: "000136",
    아나톨리안셰퍼드: "000202",
    아메리칸불독: "000160",
    아메리칸스태퍼드셔테리어: "000203",
    아메리칸스태퍼드셔테리어믹스견: "000221",
    아메리칸아키다: "000008",
    아메리칸에스키모: "000131",
    아메리칸코카스파니엘: "000009",
    아메리칸핏불테리어: "000119",
    아메리칸핏불테리어믹스견: "000220",
    아메리칸불리: "000150",
    아이리쉬레드앤화이트세터: "000210",
    아이리쉬세터: "000057",
    아이리쉬울프하운드: "000058",
    아이리쉬소프트코티드휘튼테리어: "000059",
    아키다: "000006",
    아프간하운드: "000004",
    알라스칸말라뮤트: "000007",
    에어델테리어: "000005",
    오브차카: "000143",
    오스트랄리안셰퍼드독: "000011",
    오스트랄리안캐틀독: "000010",
    오스트레일리안켈피: "000217",
    올드잉글리쉬불독: "000137",
    올드잉글리쉬쉽독: "000084",
    와이마라너: "000163",
    와이어폭스테리어: "000112",
    요크셔테리어: "000113",
    울프독: "000149",
    웨스트시베리언라이카: "211",
    웨스트하이랜드화이트테리어: "000110",
    웰시코기카디건: "000205",
    웰시코기펨브로크: "000108",
    웰시테리어: "000109",
    이탈리안그레이하운드: "000060",
    잉글리쉬세터: "000046",
    잉글리쉬스프링거스파니엘: "000047",
    잉글리쉬코카스파니엘: "000044",
    잉글리쉬포인터: "000045",
    자이언트슈나우져: "000053",
    재패니즈스피츠: "000062",
    잭러셀테리어: "000061",
    저먼셰퍼드독: "000052",
    저먼와이어헤어드포인터: "000165",
    저먼포인터: "000051",
    저먼헌팅테리어: "215",
    제주개: "000156",
    제페니즈칭: "000129",
    진도견: "000067",
    차우차우: "000035",
    차이니즈크레스티드독: "000033",
    치와와: "000032",
    카네코르소: "000028",
    카레리안베어독: "000158",
    카이훗: "000144",
    캐벌리어킹찰스스파니엘: "000030",
    케니스펜더: "000029",
    케리블루테리어: "000064",
    케언테리어: "000207",
    코리아트라이하운드: "000002",
    코리안마스티프: "000068",
    코카스파니엘: "000125",
    코카푸: "000141",
    코카시안오브차카: "000145",
    콜리: "000036",
    클라인스피츠: "000066",
    키슈: "000065",
    키스훈드: "000063",
    토이맨체스터테리어: "000140",
    토이푸들: "000107",
    티베탄마스티프: "000106",
    파라오하운드: "000209",
    파슨러셀테리어: "000086",
    팔렌: "000088",
    퍼그: "000090",
    페키니즈: "000087",
    페터데일테리어: "000138",
    포메라니안: "000089",
    포인터: "000126",
    폭스테리어: "000127",
    푸들: "000128",
    풀리: "000091",
    풍산견: "000003",
    프레사까나리오: "000161",
    프렌치불독: "000050",
    프렌치브리타니: "000168",
    플랫코티드리트리버: "000049",
    플롯하운드: "000147",
    피레니안마운틴독: "000092",
    필라브라질레이로: "000048",
    핏불테리어: "000135",
    핏불테리어믹스견: "000224",
    허배너스: "000206",
    화이트리트리버: "000130",
    화이트테리어: "000134",
    휘펫: "000111",
  };

  const [upKind, setupKind] = useState("강아지");

  const breedOptions =
    upKind === "강아지" ? Object.keys(dogs) : Object.keys(cats);

  const [updatedQuery, setUpdatedQuery] = useState(query);

  useEffect(() => {
    setUpdatedQuery(query); // query prop이 변경될 때 상태를 업데이트
  }, [query]);

  const handleUpKindChange = (value) => {
    let upKindCode;
    if (value === "강아지") {
      upKindCode = "417000";
    } else if (value === "고양이") {
      upKindCode = "422400";
    }
    setupKind(value);

    setUpdatedQuery({ ...query, UPKIND_NM: upKindCode, KIND_NM: "" }); // 품종 초기화
  };

  const handleStateChange = (e) => {
    setUpdatedQuery({ ...updatedQuery, STATE_NM: e.target.value });
  };

  const handleLocationChange = (e) => {
    setUpdatedQuery({ ...updatedQuery, LOCATION_NM: e.target.value });
  };

  const handleGenderChange = (e) => {
    setUpdatedQuery({ ...updatedQuery, KIND_NM: e.target.value });
  };

  const handleNeuterChange = (e) => {
    setUpdatedQuery({ ...updatedQuery, NEUTER_NM: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onChange(updatedQuery); // 조회버튼을 클릭했을 때 업데이트된 쿼리로 onChange를 호출
  };

  return (
    <div className="filter">
      <form className="form">
        <ul>
          <li>
            <div className="info">
              <img
                src={process.env.PUBLIC_URL + "/img/icon_upkind.png"}
                alt=""
              />
              <span>품종</span>
            </div>
            <div className="option kind">
              <label className={upKind === "강아지" ? "on" : ""} htmlFor="dog">
                <input
                  type="radio"
                  name="UPKIND_NM"
                  value="417000"
                  id="dog"
                  checked={upKind === "강아지"}
                  onChange={() => handleUpKindChange("강아지")}
                  style={{ display: "none" }}
                />
                <img
                  src={
                    process.env.PUBLIC_URL +
                    `/img/icon_dog_${upKind === "강아지" ? "w" : "b"}.png`
                  }
                  alt="강아지"
                />
                <span>강아지</span>
              </label>
              <label className={upKind === "고양이" ? "on" : ""} htmlFor="cat">
                <input
                  type="radio"
                  name="UPKIND_NM"
                  value="422400"
                  id="cat"
                  checked={upKind === "고양이"}
                  onChange={() => handleUpKindChange("고양이")}
                  style={{ display: "none" }}
                />
                <img
                  src={
                    process.env.PUBLIC_URL +
                    `/img/icon_cat_${upKind === "고양이" ? "w" : "b"}.png`
                  }
                  alt="고양이"
                />
                <span>고양이</span>
              </label>
            </div>
          </li>
          <li>
            <div className="info">
              <img src={process.env.PUBLIC_URL + "/img/icon_kind.png"} alt="" />
              <span>품종명</span>
            </div>
            <div className="option">
              <select
                className="select"
                name="KIND_NM"
                id="KIND_NM"
                value={updatedQuery.KIND_NM}
                onChange={handleGenderChange}
              >
                {breedOptions.map((breed, idx) => (
                  <option
                    value={upKind === "강아지" ? dogs[breed] : cats[breed]}
                    key={idx}
                  >
                    {breed}
                  </option>
                ))}
              </select>
            </div>
          </li>
          <li>
            <div className="info">
              <img
                src={process.env.PUBLIC_URL + "/img/icon_location.png"}
                alt=""
              />
              <span>주소</span>
            </div>
            <div className="option">
              <select
                className="select"
                name="LOCATION_NM"
                id="LOCATION_NM"
                value={updatedQuery.LOCATION_NM}
                onChange={handleLocationChange}
              >
                {Object.keys(regions).map((region, idx) => (
                  <option value={regions[region]} key={idx}>
                    {region}
                  </option>
                ))}
              </select>
            </div>
          </li>
          <li>
            <div className="info">
              <img
                src={process.env.PUBLIC_URL + "/img/icon_state.png"}
                alt=""
              />
              <span>중성화</span>
            </div>
            <div className="option">
              <select
                className="select"
                name="NEUTER_NM"
                id="NEUTER_NM"
                value={updatedQuery.NEUTER_NM}
                onChange={handleNeuterChange}
              >
                <option value="">전체</option>
                <option value="Y">완료</option>
                <option value="N">미완료</option>
                <option value="U">미상</option>
              </select>
            </div>
          </li>
          <li>
            <div className="info">
              <img
                src={process.env.PUBLIC_URL + "/img/icon_neutering.png"}
                alt=""
              />
              <span>상태</span>
            </div>
            <div className="option">
              <select
                className="select"
                name="STATE_NM"
                id="STATE_NM"
                value={updatedQuery.STATE_NM}
                onChange={handleStateChange}
              >
                <option value="protect">보호중</option>

                <option value="">전체</option>
              </select>
            </div>
          </li>
          <li>
            <div className="info" style={{ visibility: "hidden" }}>
              <span>조회</span>
            </div>
            <div className="option">
              <button className="button" onClick={handleSubmit}>
                조회
              </button>
            </div>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Filter;
