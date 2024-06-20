import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./Logo";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  return (
    <header>
      <div className="inner">
        <Navbar bg="white" data-bs-theme="white">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              입양
            </Link>
            <Link to="/community" className="nav-link">
              커뮤니티
            </Link>
            <Link to="/shelter" className="nav-link">
              보호소
            </Link>
          </Nav>
          <Nav className="me-auto">
            <div className="nav-link">
              {!user && <Link to="/login">로그인</Link>}
              {user && (
                <button type="button" className="btn_logout" onClick={logout}>
                  {user.displayName} 님
                  <img
                    src={process.env.PUBLIC_URL + "/img/icon_exit.png"}
                    alt=""
                  />
                </button>
              )}
            </div>
            <Link to="/signup" className="nav-link">
              회원가입
            </Link>
          </Nav>
        </Navbar>
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
