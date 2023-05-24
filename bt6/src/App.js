import React, { Component } from "react";
import Background from "./Images/background.jpg";
import { Todo } from "./component/Todo";
import { Doing } from "./component/Doing";
import "./App.css";

class App extends Component {
  render() {
    const myStyle = {
      background: `url(${Background})`,
      height: "100vh",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
    return (
      <div style={myStyle}>
        <div className="container">
          <Todo />
          <Doing />
        </div>
      </div>
    );
  }
}

export default App;
