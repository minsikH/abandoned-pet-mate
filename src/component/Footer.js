import React from "react";
import Logo from "./Logo";

const Footer = () => {
    return (
        <footer>
            <div className="inner">
                <div className="footer_logo">
                    <Logo />
                </div>
                <div className="footer_info">
                    <ul>
                        <li>(주)유기펫메이트</li>
                        <li>서울강서구 화곡로 149 3층,4층,5층</li>
                    </ul>
                    <ul>
                        <li>사업자등록번호 : 123-12-123456</li>
                        <li>통신판매업신고번호 : 1234-5678-1234</li>
                    </ul>
                    <ul>
                        <li>개인정보보호책임자 : 팩스번호:123-456-7890</li>
                        <li>이메일 : test@gmail.com</li>
                    </ul>
                    <p>COPYRIGHT ©유기펫메이트 All RIGHTS RESERVED</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
