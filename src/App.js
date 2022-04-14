import "./styles/App.css";
import { Home } from "./components/home";
import { AppNav } from "./components/app-nav";
import { Weekly } from "./components/forecasts/weekly";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { About } from "./components/about";
import axios from "axios";

const key = `${process.env.REACT_APP_WEATHER_API_KEY}`;

function App() {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState("Kent");
  const [lon, setLon] = useState(81.3579);
  const [lat, setLat] = useState(41.1537);

  useEffect(() => {
    const setData = async () => {
      let res = await axios.get(
        `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}`
      );
      setWeather(res.data);
    };
    setData();
  }, [weather]);

  const onSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=fahrenheit&appid=${key}`
    );
    setLat(res.data.coord.lat);
    setLon(res.data.coord.lon);
  };

  return weather ? (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppNav />}>
          <Route
            path=""
            element={
              <Home
                onSubmit={onSubmit}
                setCity={setCity}
                weather={weather}
                city={city}
              />
            }
          />
          <Route path="about" element={<About />} />
          <Route path="forecast" element={<Weekly weather={weather} />} />
        </Route>
      </Routes>
    </div>
  ) : (
    <></>
  );
}

export default App;
