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

const weatherKey = `${process.env.REACT_APP_WEATHER_API_KEY}`;
const locationKey = `${process.env.REACT_APP_LOCATION_API_KEY}`;

function App() {
  const [weather, setWeather] = useState();
  const [input, setInput] = useState("Kent, Ohio, United States");
  const [city, setCity] = useState("Kent");
  const [lon, setLon] = useState(-81.3579);
  const [lat, setLat] = useState(41.1537);

  useEffect(() => {
    const setData = async () => {
      let res = await axios.get(
        `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${weatherKey}`
      );
      setWeather(res.data);
      setInput(city);
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
                locationKey={locationKey}
                weatherKey={weatherKey}
                setCity={setCity}
                setLat={setLat}
                setLon={setLon}
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
