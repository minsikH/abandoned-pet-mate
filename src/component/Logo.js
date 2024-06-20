import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="로고" />
        <span>유기 펫 메이트</span>
      </Link>
    </div>
  );
};

export default Logo;
