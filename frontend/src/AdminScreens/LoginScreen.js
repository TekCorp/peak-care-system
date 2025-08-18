import React, { Fragment, useEffect, useState } from "react";
import { Row, Col, Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/actions/userActions";
import { Helmet } from "react-helmet";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayPassword, setDisplayPassword] = useState(false);

  const dispatch = useDispatch();
  const history = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, error, loading } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history("/admin");
    }
  }, [dispatch, history, userInfo]);

  const showPassword = () => {
    setDisplayPassword((prev)=> !prev);
  };

  const formSubmitHander = (event) => {
    event.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <Fragment>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div
        style={{ width: "100%", height: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="container">
          <h1 className="heading_capital pb-3 text-start">
            <span>Sign In</span>
          </h1>
          {error && (
            <p style={{ color: "red" }} className="para_main">
              {error}
            </p>
          )}
          {loading && <Spinner />}
          <Form
            as="form"
            className="form text-start"
            onSubmit={formSubmitHander}
          >
            <Form.Group className="mb-3 text-start" controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                maxLength="36"
                required
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3 text-start" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                maxLength="16"
                required
                type={!displayPassword ? "password" : "text"}
                placeholder="Enter Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Row>
                <Col className="col-xs-6 text-start"></Col>
                <Col className="col-xs-6 text-end" >
                  <p className="text-end" onClick={showPassword}>
                    {!displayPassword ? "Show" : "Hide"}{" "}
                    <i
                      className={
                        !displayPassword
                          ? "fa-solid fa-eye"
                          : "fa-solid fa-eye-slash"
                      }
                      
                    ></i>
                  </p>
                </Col>
              </Row>
            </Form.Group>
            <button className="blue-btn mt-3" type="submit">
              Sign In
            </button>
          </Form>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginScreen;
