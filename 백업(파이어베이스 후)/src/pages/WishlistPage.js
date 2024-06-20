import React from "react";

const WishlistPage = () => {
    return <div className="wishlist_page">
        <div className="main_img_area">
            <img src={process.env.PUBLIC_URL + "/img/img_heart.png"} alt="" />
            <div className="main_text_area">
                <p className="title">새로운 보금자리</p>
                <p className="text">
                관심목록에 담긴 유기동물들을 위해 새로운 <br />
가정을 찾아주세요. 이들은 따뜻한 사랑과 관심을 <br />
기다리고 있습니다. 당신의 관심이 그들에게 <br />
큰 힘이 될 거예요. 함께해주셔서 감사합니다.
                </p>
            </div>
        </div>
        <div className="inner">
            <p className="main_title">나의 관심동물</p>
        </div>
    </div>
};

export default WishlistPage;
