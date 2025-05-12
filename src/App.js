import "./styles.css";
import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <p>
        This project was coded by Chani Kaufman and is open-sourced on{" "}
        <a href="https://github.com/chanikauf/react-weather-app">Github</a>
      </p>
    </div>
  );
}

export default App;
