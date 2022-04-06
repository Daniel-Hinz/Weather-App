import "./App.css";
import axios from "axios";
import { Home } from "./components/home";
import { AppNav } from "./components/app-nav";
import { Forecast } from "./components/forecast";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { About } from "./components/about";

const lat = 41.154839;
const long = -81.356392;
const key = `${process.env.REACT_APP_WEATHER_API_KEY}`;

function App() {
  useEffect(() => {
    console.log(key);

    // axios
    //   .get(
    //     `api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&cnt=${7}&appid=${key}`
    //   )
    //   .then(({ data }) => console.log(data))
    //   .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppNav />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="forecast" element={<Forecast />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
