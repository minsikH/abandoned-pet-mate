import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { Button, Form, Row, Col } from "react-bootstrap";
import Logo from "../component/Logo";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useLogin();

  const loginUser = (event) => {
    //console.log('login user function issue');
    event.preventDefault();
    //console.log('login user function issue')
    login(email, password);
  };

  const handleData = (event) => {
    if (event.target.type === "email") {
      setEmail(event.target.value);
    } else if (event.target.type === "password") {
      setPassword(event.target.value);
    }
  };

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
            <Form
              style={{ display: "flex", flexDirection: "column" }}
              onSubmit={(event) => loginUser(event)}
            >
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>아이디</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={handleData}
                    placeholder="ex) test@gmail.com"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>비밀번호</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={handleData}
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
};

export default LoginPage;
