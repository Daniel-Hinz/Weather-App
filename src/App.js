import "./styles/App.css";
import axios from "axios";
import { Home } from "./components/home";
import { AppNav } from "./components/app-nav";
import { Weekly } from "./components/forecasts/weekly";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { About } from "./components/about";

const key = `${process.env.REACT_APP_WEATHER_API_KEY}`;
const lat = -41.1456;
const long = 81.3393;

function App() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const setData = async () => {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units="fahrenheit"&appid=${key}`
        )
        .then(({ data }) => setWeather(data))
        .catch((error) => console.log(error));
    };
    setData();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppNav />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="forecast" element={<Weekly weather={weather} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
