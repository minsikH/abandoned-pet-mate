import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./Logo";

const NavBar = () => {
    return (
        <header>
            <div className="inner">
                <Navbar bg="white" data-bs-theme="white">
                    <Nav className="me-auto">
                        <Nav.Link href="/">입양</Nav.Link>
                        <Nav.Link href="/community">커뮤니티</Nav.Link>
                        <Nav.Link href="/shelter">보호소</Nav.Link>
                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link href="/wishlist">관심목록</Nav.Link>
                        <Nav.Link href="/login">로그인</Nav.Link>
                    </Nav>
                </Navbar>
                <Logo />
            </div>
        </header>
    );
};

export default NavBar;
