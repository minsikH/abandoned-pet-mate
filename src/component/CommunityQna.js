import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const CommunityList = ({ tab }) => {
  const [qaList] = useState([
    {
      question: "Q: 이 사이트에서 제공하는 정보는 어디에서 가져오나요?",
      answer:
        "저희 사이트는 공공 데이터 포털에서 제공하는 유기동물 정보 API를 통해 전국의 유기견과 유기묘에 대한 최신 정보를 가져와 제공합니다.\n 이 API는 각 지역의 동물 보호소에서 보호 중인 동물들의 상세 정보를 포함합니다.",
    },
    {
      question: "Q: 보호소에서 제공하는 동물 정보는 어떤 내용을 포함하나요?",
      answer:
        "보호소에서 제공하는 각 동물의 정보에는 동물의 종류, 품종, 나이, 성별, 색상, 체중, 중성화 여부, 특이사항 여부 등이 포함될 수 있습니다.\n 또한, 동물의 사진도 함께 제공될 수 있습니다.",
    },
    {
      question: "Q: 어떻게 특정 지역의 유기동물을 찾을 수 있나요?",
      answer:
        "화면 상단의 보호소를 클릭 한 후 지도를 통해 원하는 지역의 보호소에서 보호 중인 유기동물들을 검색할 수 있습니다.\n 보호소별로 필터링된 목록을 통해 각 보호소에서 보호 중인 동물들을 쉽게 확인할 수 있습니다.",
    },
    {
      question: "Q: 입양 절차는 어떻게 되나요?",
      answer:
        "각 보호소에서 제공하는 입양 절차는 보호소마다 다를 수 있습니다.\n 일반적으로 입양을 원하는 경우 보호소에 직접 방문하거나 보호소 웹사이트를 통해 신청 양식을 제출해야 합니다.\n 입양 전에는 동물의 건강 상태와 특성에 대해 충분히 이해하고, 적합한 돌봄을 제공할 수 있는지를 고려해야 합니다.",
    },
    {
      question: "Q: 동물을 입양하는 데 추가 비용이 필요한가요?",
      answer:
        "보통 보호소에서 입양 시 일정 금액의 입양 수수료를 지불해야 합니다.\n 이는 보호동물의 기본 예방 접종, 중성화 수술 등의 비용을 포함하며, 보호소마다 차이가 있을 수 있습니다.\n 또한, 입양 후 추가적인 사료 구매, 건강 관리 등의 비용이 발생할 수 있습니다.",
    },
    {
      question:
        "Q: 입양 후 동물의 건강 상태나 문제가 발생하면 어떻게 해야 하나요?",
      answer:
        "입양 후 동물의 건강 상태에 대해 문제가 발생하면 먼저 보호소로 연락하여 상담을 받고, 필요한 경우 동물 병원을 방문하는 것이 좋습니다.\n 보호소는 입양 후에도 일정 기간 동안 도움을 제공할 수 있으며, 필요한 경우 추가 지원을 제공할 수 있습니다.",
    },
    {
      question: "Q: 입양을 고려 중인데, 준비해야 할 것들이 있나요?",
      answer:
        "입양을 고려할 때에는 동물의 사료, 배변 용품, 침구 등 필요한 준비물을 미리 준비하는 것이 좋습니다.\n 또한, 동물의 건강 상태와 행동 특성을 이해하고, 동물을 위한 안전한 환경을 마련하는 것이 중요합니다.",
    },
    {
      question: "Q: 입양을 고려할 때 어떤 동물을 선택해야 할까요?",
      answer:
        "입양을 고려할 때는 자신의 생활환경과 동물의 필요를 고려하여 적합한 동물을 선택하는 것이 중요합니다.\n 예를 들어, 활동적이고 적극적인 동물을 원한다면 개를 고려할 수 있고, 조용하고 작은 공간에서 적응할 수 있는 동물을 원한다면 고양이를 고려할 수 있습니다.\n 입양을 고려할 때는 가족 구성원들과 함께 고민하고, 적절한 선택을 하는 것이 좋습니다.",
    },
    {
      question:
        "Q: 입양 후에도 동물의 행동 교정이 필요할 경우 어떻게 해야 하나요?",
      answer:
        "입양 후 동물의 행동이 문제가 될 경우, 보호소나 전문적인 훈련가에게 도움을 요청할 수 있습니다.\n 동물 행동 교정은 시간과 인내가 필요할 수 있으며, 주인의 지속적인 관심과 교육이 중요합니다.\n 보호소에서는 입양 후에도 동물 행동 교정을 지원할 수 있는 정보를 제공할 수 있습니다.",
    },
  ]);

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="community_qna">
      <p className={tab === 0 ? "tab-content1" : "tab-content2"}>
        {tab === 0 ? "자유게시판" : "자주묻는질문"}
      </p>

      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>

          <tbody>
            {qaList.map((qa, index) => (
              <React.Fragment key={index}>
                <tr
                  className="question-row"
                  onClick={() => toggleAnswer(index)}
                >
                  <td>{qa.question}</td>
                  <td>관리자</td>
                </tr>

                {expandedIndex === index && (
                  <tr className="answer-row">
                    <td colSpan="2">
                      <ul>
                        <li>A: </li>
                        <li>{qa.answer}</li>
                      </ul>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </Table>
        {tab === 0 && (
          <div className="btn_area">
            <Link to="/write">
              <Button variant="info">글쓰기</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityList;
