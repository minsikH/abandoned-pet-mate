/* // components/Pagination.js
import React from "react";

export default function Pagination({ totalPosts, postPerPage, setCurrentPage, currentPage }) {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pages.push(i);
    }
    return (
        <div className="pagination">
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page === currentPage ? "active" : ""}
                    >
                        {page}
                    </button>
                );
            })}
        </div>
    );
} */
// components/Pagination.js
// components/Pagination.js
// components/Pagination.js
// components/Pagination.js
// components/Pagination.js
import React from "react";

const Pagination = ({ totalPosts, postPerPage, setCurrentPage, currentPage }) => {
    // 페이지 수 계산
    const pageCount = Math.ceil(totalPosts / postPerPage);

    // 현재 페이지가 새로운 데이터셋의 범위를 벗어나면 현재 페이지를 1페이지로 재설정
    React.useEffect(() => {
        if ((currentPage - 1) * postPerPage >= totalPosts) {
            setCurrentPage(1);
        }
    }, [totalPosts, postPerPage, currentPage, setCurrentPage]);
    // 현재 페이지 그룹 번호 계산
    const currentPageGroup = Math.ceil(currentPage / 5);

    // 현재 페이지 그룹의 시작 페이지 번호 계산
    const startPage = (currentPageGroup - 1) * 5 + 1;

    // 현재 페이지 그룹의 끝 페이지 번호 계산
    const endPage = Math.min(startPage + 4, pageCount);

    // 이전 페이지 그룹으로 이동하는 함수
    const goToPreviousPageGroup = () => {
        if (currentPage > 1) {
            const newPage = startPage - 5;
            setCurrentPage(newPage > 0 ? newPage : 1); // 음수 페이지로 가지 않도록 수정
        }
    };

    // 다음 페이지 그룹으로 이동하는 함수
    const goToNextPageGroup = () => {
        if (endPage < pageCount) {
            const newPage = endPage + 1;
            setCurrentPage(newPage);
        } else {
            setCurrentPage(pageCount); // 다음 페이지 그룹이 없을 때는 마지막 페이지로 이동
        }
    };
    // 첫 페이지로 이동하는 함수
    const goToFirstPage = () => {
        setCurrentPage(1);
    };

    // 마지막 페이지로 이동하는 함수
    const goToLastPage = () => {
        setCurrentPage(pageCount);
    };

    // 페이지 번호 클릭 시 해당 페이지로 이동하는 함수
    const goToPage = (page) => {
        setCurrentPage(page);
    };

    // 페이지 번호 배열 생성
    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    const firstImage = process.env.PUBLIC_URL + '/img/d_arrow_b.png';
    const firstHoverImage = process.env.PUBLIC_URL + '/img/d_arrow_w.png';
    const prevImage = process.env.PUBLIC_URL + '/img/arrow_b.png';
    const prevHoverImage = process.env.PUBLIC_URL + '/img/arrow_w.png';


    return (
        <div className="pagination">
            <button 
                className="first_btn" 
                onClick={goToFirstPage}
                style={{ backgroundImage: `url(${firstImage})` }}
                onMouseOver={e => e.currentTarget.style.backgroundImage = `url(${firstHoverImage})`}
                onMouseOut={e => e.currentTarget.style.backgroundImage = `url(${firstImage})`}>
            </button>
            <button 
            className="prev_btn" 
            onClick={goToPreviousPageGroup}
            style={{ backgroundImage: `url(${prevImage})` }}
            onMouseOver={e => e.currentTarget.style.backgroundImage = `url(${prevHoverImage})`}
            onMouseOut={e => e.currentTarget.style.backgroundImage = `url(${prevImage})`}></button>
            <div className="pag_box">
            {pages.map((page, index) => (
                <button key={index} onClick={() => goToPage(page)} className={page === currentPage ? "active" : ""}>
                    {page}
                </button>
            ))}
            </div>
   
            <button className="next_btn" onClick={goToNextPageGroup}  style={{ backgroundImage: `url(${prevImage})` }}
            onMouseOver={e => e.currentTarget.style.backgroundImage = `url(${prevHoverImage})`}
            onMouseOut={e => e.currentTarget.style.backgroundImage = `url(${prevImage})`}></button>
            <button className="last_btn" onClick={goToLastPage}
                            style={{ backgroundImage: `url(${firstImage})` }}
                            onMouseOver={e => e.currentTarget.style.backgroundImage = `url(${firstHoverImage})`}
                            onMouseOut={e => e.currentTarget.style.backgroundImage = `url(${firstImage})`}></button>
        </div>
    );
};

export default Pagination;
