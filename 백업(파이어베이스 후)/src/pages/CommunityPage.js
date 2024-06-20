/* import React, { useEffect, useState } from "react";
import CommunityList from "../component/CommunityList";
import CommunityQna from "../component/CommunityQna";
import { Nav } from "react-bootstrap";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";

const CommunityPage = () => {
  let [tabs, setTabs] = useState(0);

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
        <TabContent tabs={tabs} />
      </div>
    </div>
  );
};

function TabContent({ tabs }) {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("review", [
    "uid",
    "==",
    user ? user.uid : "",
  ]);
  let [fade, setFade] = useState(""); // 기본 fade 상태를 선언

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 300);

    // clean up function -> useEffect 실행 전에 먼저 실행하는 구문
    return () => {
      setFade("");
    };
  }, [tabs]);

  // user가 null인 경우, 로그인 유도 또는 처리를 해야 합니다.
  if (!user) {
    return <p>로그인이 필요합니다.</p>;
  }

  return (
    <div>
      {error && <strong>{error}</strong>}
      {tabs === 0 && (
        <div className={`tab-content1 ${fade}`}>
          <CommunityList tab={0} documents={documents} uid={user.uid} />
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
 */
/* import React, { useEffect, useState } from "react";
import CommunityList from "../component/CommunityList";
import CommunityQna from "../component/CommunityQna";
import { Nav } from "react-bootstrap";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";

const CommunityPage = () => {
  let [tabs, setTabs] = useState(0);

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
        <TabContent tabs={tabs} />
      </div>
    </div>
  );
};

function TabContent({ tabs }) {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("review"); // 조건을 제거하여 전체 문서 가져오기
  let [fade, setFade] = useState(""); // 기본 fade 상태를 선언

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 300);

    // clean up function -> useEffect 실행 전에 먼저 실행하는 구문
    return () => {
      setFade("");
    };
  }, [tabs]);

  // user가 null인 경우, 로그인 유도 또는 처리를 해야 합니다.
  if (!user) {
    return <p>로그인이 필요합니다.</p>;
  }

  return (
    <div>
      {error && <strong>{error}</strong>}
      {tabs === 0 && (
        <div className={`tab-content1 ${fade}`}>
          <CommunityList tab={0} community={documents} uid={user.uid} />
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
 */
/* import React, { useEffect, useState } from "react";
import CommunityList from "../component/CommunityList";
import CommunityQna from "../component/CommunityQna";
import { Nav } from "react-bootstrap";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";

const CommunityPage = () => {
  let [tabs, setTabs] = useState(0);

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
        <TabContent tabs={tabs} />
      </div>
    </div>
  );
};

function TabContent({ tabs }) {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("review"); // 조건 없이 전체 문서 가져오기

  let [fade, setFade] = useState(""); // 기본 fade 상태를 선언

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 300);

    // clean up function -> useEffect 실행 전에 먼저 실행하는 구문
    return () => {
      setFade("");
    };
  }, [tabs]);

  // user가 null인 경우, 로그인 유도 또는 처리를 해야 합니다.
  if (!user) {
    return <p>로그인이 필요합니다.</p>;
  }

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
 */
// CommunityPage.js
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
  const [fade, setFade] = useState(""); // fade 상태와 setter 함수 정의

  useEffect(() => {
    // 탭 변경 시 fade 효과 설정
    setTimeout(() => {
      setFade("end");
    }, 300);

    return () => {
      setFade(""); // cleanup 함수 정의
    };
  }, [tabs]);

  if (!user) {
    return <p>로그인이 필요합니다.</p>;
  }

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

  if (!user) {
    return <p>로그인이 필요합니다.</p>;
  }

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
