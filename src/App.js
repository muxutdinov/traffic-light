import React, { useState } from "react";
import "./App.css";

export const App = () => {
  const [temperature, setTemperature] = useState(0);
  const [temperatureColor, setTemperatureColor] = useState("red");
  const Plus = () => {
    const newTamperature = temperature + 1;
    if (newTamperature > 10) return;
    setTemperature(newTamperature);
    if (newTamperature <= 3) {
      setTemperatureColor("red");
    } else if (newTamperature <= 6) {
      setTemperatureColor("yellow");
    } else {
      setTemperatureColor("green");
    }
  };
  const Minus = () => {
    const newTamperature = temperature - 1;
    if (newTamperature < 0) return;
    setTemperature(newTamperature);
    if (newTamperature <= 3) {
      setTemperatureColor("red");
    } else if (newTamperature <= 6) {
      setTemperatureColor("yellow");
    } else {
      setTemperatureColor("green");
    }
  };
  return (
    <div className="Container">
      <div className="Wrapper">
        <div className={`Wrap ${temperatureColor}`}>
          <h1>{temperature}</h1>
        </div>
        <div className="btn-wrapper">
          <button className="button" onClick={() => Minus()}>
            -
          </button>
          <button className="button" onClick={() => Plus()}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;
