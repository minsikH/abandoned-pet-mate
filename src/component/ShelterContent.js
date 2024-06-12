/* import React, { useState, useEffect } from "react";
import CustomPagination from "../component/Pagination";
import ShelterCard from "./ShelterCard";

const ShelterContent = ({ uniqueAllPetsList }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 12;

    // 페이지 번호가 변경될 때마다 currentPage를 업데이트
    useEffect(() => {
        setCurrentPage(1); // uniqueAllPetsList가 변경되면 첫 페이지로 돌아가기
    }, [uniqueAllPetsList]);

    // currentPage에 따라 현재 페이지에 표시할 포스트의 시작과 끝 인덱스를 계산합니다.
    const firstPostIndex = (currentPage - 1) * postPerPage;
    const lastPostIndex = currentPage * postPerPage;

    // uniqueAllPetsList가 존재하면 slice 메서드를 호출하고, 그렇지 않으면 빈 배열을 반환합니다.
    const currentPosts = uniqueAllPetsList ? uniqueAllPetsList.slice(firstPostIndex, lastPostIndex) : [];

    // uniqueAllPetsList가 존재하고 배열의 길이가 0보다 큰 경우에만 개수를 가져오고, 그렇지 않으면 0으로 설정
    const petCount = uniqueAllPetsList && uniqueAllPetsList.length > 0 ? uniqueAllPetsList.length : 0;

    return (
        <div className="content">
            {petCount === 0 ? (
                <div className="no-data-container">
                    <p>데이터가 없습니다.</p>
                    <img src="" alt="No data" />
                </div>
            ) : (
                <>
                    <p>{petCount}마리의 아이들이 보호자를 기다리고 있어요.</p>
                    <div className="shelter_list">
                        {currentPosts.map((item, idx) => (
                            <ShelterCard item={item} key={idx} />
                        ))}
                    </div>
                    <CustomPagination
                        totalPosts={uniqueAllPetsList ? uniqueAllPetsList.length : 0} // uniqueAllPetsList가 존재하는 경우에만 길이를 가져옵니다.
                        postPerPage={postPerPage}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                </>
            )}
        </div>
    );
};

export default ShelterContent;
 */

import React, { useState, useEffect } from "react";
import CustomPagination from "../component/Pagination";
import ShelterCard from "./ShelterCard";

const ShelterContent = ({ uniqueAllPetsList }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 12;

    // 페이지 번호가 변경될 때마다 currentPage를 업데이트
    useEffect(() => {
        setCurrentPage(1); // uniqueAllPetsList가 변경되면 첫 페이지로 돌아가기
    }, [uniqueAllPetsList]);

    // currentPage에 따라 현재 페이지에 표시할 포스트의 시작과 끝 인덱스를 계산합니다.
    const firstPostIndex = (currentPage - 1) * postPerPage;
    const lastPostIndex = currentPage * postPerPage;

    // uniqueAllPetsList가 존재하면 slice 메서드를 호출하고, 그렇지 않으면 빈 배열을 반환합니다.
    const currentPosts = uniqueAllPetsList ? uniqueAllPetsList.slice(firstPostIndex, lastPostIndex) : [];

    // uniqueAllPetsList가 존재하고 배열의 길이가 0보다 큰 경우에만 개수를 가져오고, 그렇지 않으면 0으로 설정
    const petCount = uniqueAllPetsList && uniqueAllPetsList.length > 0 ? uniqueAllPetsList.length : 0;

    return (
        <div className="shelter_content">
            {petCount === 0 ? (
                <div className="no-data-container">
                    <p>데이터가 없습니다.</p>
                    <img src="" alt="No data" />
                </div>
            ) : (
                <>
                    <p className="title"><span>{petCount}</span>개의 보호소가 있습니다.</p>
                    <div className="shelter_list">
                        {currentPosts.map((item, idx) => (
                            <ShelterCard item={item} key={idx} />
                        ))}
                    </div>
                    <CustomPagination
                        totalPosts={uniqueAllPetsList ? uniqueAllPetsList.length : 0} // uniqueAllPetsList가 존재하는 경우에만 길이를 가져옵니다.
                        postPerPage={postPerPage}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                </>
            )}
        </div>
    );
};

export default ShelterContent;
