import React from "react";
import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Logo from "../component/Logo";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const { signup } = useSignup();
  const navigate = useNavigate();

  const handleData = (event) => {
    if (event.target.type === "email") {
      setEmail(event.target.value);
    } else if (event.target.type === "password") {
      setPassword(event.target.value);
    } else if (event.target.type === "text") {
      setDisplayName(event.target.value);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(email, password);
    signup(email, password, displayName);
    navigate("/");
  };

  return (
    <div className="signup_page">
      <div className="inner">
        <p className="main_title">회원가입</p>

        <ul>
          <li>
            <img src={process.env.PUBLIC_URL + "/img/img_login.jpg"} alt="" />
          </li>
          <li>
            <Logo />
            <Form
              style={{
                display: "flex",
                flexDirection: "column",
              }}
              onSubmit={handleSubmit}
            >
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>아이디</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="ex) test@gmail.com"
                    onChange={handleData}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>비밀번호</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="6자리 이상 입력해주세요."
                    onChange={handleData}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>닉네임</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="닉네임을 입력해주세요."
                    onChange={handleData}
                  />
                </Form.Group>
              </Row>

              <Button type="submit">회원가입</Button>
            </Form>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SignupPage;
