import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import Logo from "../component/Logo";

const SignupPage = () => {
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
              }} /* onSubmit={onSubmitHandler} */
            >
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>아이디</Form.Label>
                  <Form.Control
                    type="email"
                    /*                                 value={email}
                                onChange={onEmailHandler} */
                    placeholder="ex) test@gmail.com"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>비밀번호</Form.Label>
                  <Form.Control
                    type="password"
                    /*                                 value={password}
                                onChange={onPasswordHandler} */
                    placeholder="6자리 이상 입력해주세요."
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>닉네임</Form.Label>
                  <Form.Control
                    type="text"
                    /*                                 value={password}
                                onChange={onPasswordHandler} */
                    placeholder="닉네임을 입력해주세요."
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
