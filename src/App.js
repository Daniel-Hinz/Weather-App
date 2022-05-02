import "./styles/App.css";
import { Home } from "./components/home";
import { AppNav } from "./components/app-nav";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { About } from "./components/about";
import axios from "axios";

const key = `fc760fbc1a2f1a0426660f9dd56e6b48`;

function App() {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState("Kent");
  const [lon, setLon] = useState(-81.3579);
  const [lat, setLat] = useState(41.1537);

  useEffect(() => {
    const setData = async () => {
      let res = await axios.get(
        `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}`
      );
      setWeather(res.data);
    };
    setData();
  }, [lat, lon]);

  const onSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=fahrenheit&appid=${key}`
    );
    setLat(res.data.coord.lat);
    setLon(res.data.coord.lon);
    setCity("");
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
        </Route>
      </Routes>
    </div>
  ) : (
    <></>
  );
}

export default App;
