import { useContext, useState } from "react";
import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Login from "./component/Login";
import langContext from "./Context";
import Main from "./component/Main";
import { Routes } from "react-router-dom";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  return (
    <langContext.Provider value={{ lang: "en" }}>
      <div className="App">
        <Header />
        {currentForm === "login" ? <Login /> : <Main />}
        <Footer />
      </div>
    </langContext.Provider>
  );
}

export default App;
