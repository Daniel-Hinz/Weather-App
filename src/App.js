import "./styles/App.css";
import { Home } from "./components/home";
import { AppNav } from "./components/app-nav";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { About } from "./components/about";
import axios from "axios";
import { Toggle } from "./components/toggle";
import { Footer } from "./components/footer";
import { Forecast } from "./components/forecast";

const key = `${process.env.REACT_APP_WEATHER_API_KEY}`;

function App() {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState("Kent");
  const [lon, setLon] = useState(-81.3579);
  const [lat, setLat] = useState(41.1537);
  const [input, setInput] = useState("");

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
    setCity(input);
  };

  return weather ? (
    <div className="App">
      <Toggle />
      <Routes>
        <Route path="/" element={<AppNav />}>
          <Route path="" element={<Home />} />
          <Route
            path="forecast"
            element={
              <Forecast
                onSubmit={onSubmit}
                setInput={setInput}
                weather={weather}
                input={input}
                city={city}
              />
            }
          ></Route>
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  ) : (
    <></>
  );
}

export default App;
