import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button, Form, Row, Col } from "react-bootstrap";
import Logo from "../component/Logo";

function LoginPage(props) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 관리할 상태 추가

    const onEmailHandler = (e) => {
        setEmail(e.target.value);
    };
    const onPasswordHandler = (e) => {
        setPassword(e.target.value);
    };
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/login", {
                id: email, // userId로 변경
                password: password, // userPassword로 변경
            });
            if (response.data.loginSuccess) {
                setIsLoggedIn(true); // 로그인 상태를 true로 설정
                navigate("/"); // 성공 시 메인 페이지로 이동
            } else {
                alert("로그인에 실패했습니다. 다시 시도해주세요.");
            }
        } catch (error) {
            console.error("로그인 요청 중 오류 발생:", error);
            alert("로그인 요청 중 오류가 발생했습니다.");
        }
    };

    // 이미 로그인한 경우, 메인 페이지로 리다이렉트
    if (isLoggedIn) {
        return <Navigate to="/" />;
    }

    return (
        <div className="login_page">
            <div className="inner">
                <p className="main_title">로그인</p>

                <ul>
                    <li>
                        <img src={process.env.PUBLIC_URL + "/img/img_login.jpg"} alt="" />
                    </li>
                    <li>
                        <Logo />
                        <Form style={{ display: "flex", flexDirection: "column" }} onSubmit={onSubmitHandler}>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>아이디</Form.Label>
                                    <Form.Control
                                        type="email"
                                        value={email}
                                        onChange={onEmailHandler}
                                        placeholder="ex) test@gmail.com"
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>비밀번호</Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={password}
                                        onChange={onPasswordHandler}
                                        placeholder="6자리 이상 입력해주세요."
                                    />
                                </Form.Group>
                            </Row>

                            <Button type="submit">로그인</Button>
                            <Link to="/signup">
                                <Button>회원가입</Button>
                            </Link>
                        </Form>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default LoginPage;
