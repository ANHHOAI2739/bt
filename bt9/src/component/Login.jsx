import React, { useState, useNavigate, useEffect } from "react";
import "../style/login.css";
import langContext from "../Context";

const Login = () => {
  const [account, setAccount] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isLogin = () => {
    if (useState !== "") {
      setIsSubmitted(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const renderForm = (
    <langContext.Consumer>
      {(value) => {
        return (
          <div className="container">
            <div className="title">
              {value.lang === "vi" ? "ĐĂNG NHẬP" : "LOGIN"}
            </div>
            <div className="main-content">
              <form action="" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    value={account}
                    onChange={(e) => setAccount(e.target.value)}
                    placeholder="Username..."
                    className="input"
                    style={{
                      width: "80%",
                      height: "30px",
                      margin: "auto",
                      marginTop: "40px",
                      borderRadius: "5px",
                    }}
                  />
                </div>
                <div>
                  <button className="button" type="submit" onClick={isLogin}>
                    {value.lang === "vi" ? "ĐĂNG NHẬP" : "LOGIN"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        );
      }}
    </langContext.Consumer>
  );
  return (
    <div className="app">
      <div className="login-form">
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
};

export default Login;
