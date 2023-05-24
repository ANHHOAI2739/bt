import { useState } from "react";
import "./App.css";
import { Light } from "./component/Light";

function App() {
  const [lightOn, setLightOn] = useState("green");

  const nextLight = () => {
    if (lightOn === "red") {
      setLightOn("yellow");
      return;
    }

    if (lightOn === "yellow") {
      setLightOn("green");
      return;
    }

    if (lightOn === "green") {
      setLightOn("red");
      return;
    }
  };
  return (
    <>
      <button className="button" onClick={nextLight}>
        Next
      </button>
      <div className="App">
        <Light color={"red"} isOn={lightOn === "red"} />
        <Light color={"yellow"} isOn={lightOn === "yellow"} />
        <Light color={"green"} isOn={lightOn === "green"} />
      </div>
    </>
  );
}

export default App;
