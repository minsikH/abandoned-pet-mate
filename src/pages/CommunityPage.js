import React, { useEffect, useState } from "react";
import CommunityList from "../component/CommunityList";
import CommunityQna from "../component/CommunityQna";
import { Nav } from "react-bootstrap";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";

const CommunityPage = () => {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("review"); // "review" 컬렉션에서 문서 가져오기

  const [tabs, setTabs] = useState(0);
  const [fade, setFade] = useState("");

  useEffect(() => {
    // 탭 변경 시 fade 효과 설정
    setTimeout(() => {
      setFade("end");
    }, 300);

    return () => {
      setFade("");
    };
  }, [tabs]);

  return (
    <div className="community_page">
      <div className="inner">
        <p className="main_title">커뮤니티</p>
        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link eventKey="link0" onClick={() => setTabs(0)}>
              자유게시판
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link1" onClick={() => setTabs(1)}>
              자주묻는질문
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent
          tabs={tabs}
          documents={documents}
          error={error}
          fade={fade}
          setFade={setFade}
        />
      </div>
    </div>
  );
};

function TabContent({ tabs, documents, error, fade, setFade }) {
  const { user } = useAuthContext();

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 300);

    return () => {
      setFade("");
    };
  }, [tabs, setFade]);

  return (
    <div>
      {error && <strong>{error}</strong>}
      {tabs === 0 && (
        <div className={`tab-content1 ${fade}`}>
          <CommunityList tab={0} documents={documents} />
        </div>
      )}
      {tabs === 1 && (
        <div className={`tab-content2 ${fade}`}>
          <CommunityQna tab={1} />
        </div>
      )}
    </div>
  );
}

export default CommunityPage;
