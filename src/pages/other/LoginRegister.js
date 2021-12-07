import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { Redirect } from "react-router-dom";

const LoginRegister = ({ location }) => {
  const { pathname } = location;

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    const input = JSON.stringify(inputs)
    alert(input)
    fetch('http://localhost:8080/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: input
    }).then(function(res){ 
      console.log(res);
      if (res.status === 200){
        alert("Successfully Sign Up");
        window.location.reload(false);
      }
      else{
        alert("Email has been taken / Password invalid");
      }
    })
    .catch(function(res){ console.log(res) })
  }

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const input = JSON.stringify(inputs)
    alert(input)
    fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: input
    }).then(function(res){ 
      console.log(res);
      if (res.status === 200){
        alert("Successfully Sign Up");
        return <Redirect to ="/"/>
      }
      else{
        alert("Email/Password invalid");
      }
    })
    .catch(function(res){ console.log(res) })
  }

  return (
    <Fragment>
      <MetaTags>
        <title>SherryFairy Sewing | Login</title>
        <meta
          name="description"
          content="Compare page of Sherry Fairy Sewing"
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Login Register
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                <div className="login-register-wrapper">
                  <Tab.Container defaultActiveKey="login">
                    <Nav variant="pills" className="login-register-tab-list">
                      <Nav.Item>
                        <Nav.Link eventKey="login">
                          <h4>Login</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="register">
                          <h4>Register</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="login">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form onSubmit={handleLoginSubmit}>
                              <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                              />
                              <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={handleChange}
                              />
                              <div className="button-box">
                                <div className="login-toggle-btn">
                                  <input type="checkbox" />
                                  <label className="ml-10">Remember me</label>
                                  <Link to={process.env.PUBLIC_URL + "/"}>
                                    Forgot Password?
                                  </Link>
                                </div>
                                <button type="submit">
                                  <span>Login</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="register">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form onSubmit={handleRegisterSubmit}>
                              <input
                                name="email"
                                placeholder="Email"
                                type="email"
                                onChange={handleChange}
                              />
                              <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={handleChange}
                              />
                              <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                onChange={handleChange}
                              />

                              <div className="button-box">
                                <button type="submit">
                                  <span>Register</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

LoginRegister.propTypes = {
  location: PropTypes.object
};

export default LoginRegister;
