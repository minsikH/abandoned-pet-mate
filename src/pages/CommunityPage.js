import React, { useEffect, useState } from "react";
import CommunityList from "../component/CommunityList";
import { Nav } from "react-bootstrap";

const CommunityPage = () => {
    let [tabs, setTabs] = useState(0); //tab 메뉴의 기본상태가 0

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

//tab-content를 component로 선언
function TabContent({ tabs }) {
    let [fade, setFade] = useState(""); //기본 fade 상태를 선언

    useEffect(() => {
        setTimeout(() => {
            setFade("end");
        }, 300);
        //setFade('end')

        //clean up function -> useEffect 실행 전에 먼저 실행하는 구문
        return () => {
            setFade("");
        };
    }, [tabs]);

    return (
      <div>
          {tabs === 0 && (
              <div className="tab-content1">
                  <CommunityList tab={0} />
              </div>
          )}
          {tabs === 1 && (
              <div className="tab-content2">
                  <CommunityList tab={1} />
              </div>
          )}
{/*           {tabs === 2 && (
              <div className="tab-content3">
                  <CommunityList tab={2} />
              </div>
          )} */}
          {/* 필요에 따라 추가적인 탭에 대한 조건을 추가할 수 있습니다. */}
      </div>
  );
}

export default CommunityPage;