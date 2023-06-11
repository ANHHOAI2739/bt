import React from "react";
import "../style/header.css";
import langContext from "../Context";

const Header = () => {
  return (
    <langContext.Consumer>
      {(value) => {
        return (
          <div className="header">
            <div className="header-nav">
              <span>MindX</span>
              <span className="login">
                {value.lang === "vi" ? "Đăng nhập" : "Login"}
              </span>
            </div>
          </div>
        );
      }}
    </langContext.Consumer>
  );
};

export default Header;
