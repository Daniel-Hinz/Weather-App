import "./styles/App.css";
import axios from "axios";
import { Home } from "./components/home";
import { About } from "./components/about";
import { useState, useEffect } from "react";
import { Toggle } from "./components/toggle";
import { Footer } from "./components/footer";
import { AppNav } from "./components/app-nav";
import { Routes, Route } from "react-router-dom";
import { Forecast } from "./components/forecast";

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
                setCity={setCity}
                setLat={setLat}
                setLon={setLon}
                weather={weather}
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
