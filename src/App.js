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

import Sun from "./WeatherIcons/fill/all/clear-day.svg";
import Cloudy from "./WeatherIcons/fill/all/cloudy.svg";
import PartlyCloudy from "./WeatherIcons/fill/all/partly-cloudy-day.svg";
import Moon from "./WeatherIcons/fill/all/clear-night.svg";
import PartlyCloudyNight from "./WeatherIcons/fill/all/partly-cloudy-night.svg";
import Rain from "./WeatherIcons/fill/all/rain.svg";
import Overcast from "./WeatherIcons/fill/all/overcast.svg";
import RainDay from "./WeatherIcons/fill/all/partly-cloudy-day-rain.svg";
import RainNight from "./WeatherIcons/fill/all/partly-cloudy-night-rain.svg";
import Thunderstorm from "./WeatherIcons/fill/all/thunderstorms.svg";
import Mist from "./WeatherIcons/fill/all/mist.svg";
import Snow from "./WeatherIcons/fill/all/snow.svg";

const weatherKey = `${process.env.REACT_APP_WEATHER_API_KEY}`;
const locationKey = `${process.env.REACT_APP_LOCATION_API_KEY}`;

const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const days = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
];

function App() {
  const [city, setCity] = useState("Kent, Ohio, United States");
  const [input, setInput] = useState("Kent, Ohio, United States");
  const [weather, setWeather] = useState();
  const [cities, setCities] = useState([]);
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

  const handleChange = async (e) => {
    setCity(e.target.value);
    await axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${locationKey}&cachebuster=1625641871908&autocomplete=true&types=place`
      )
      .then(({ data: { features } }) =>
        setCities(features.map((p) => p.place_name))
      )
      .catch((err) => console.log(err));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=fahrenheit&appid=${weatherKey}`
    );
    setLat(res.data.coord.lat);
    setLon(res.data.coord.lon);
  };

  const getImage = (val) => {
    switch (val) {
      case "01d":
        return Sun;
      case "01n":
        return Moon;
      case "02d":
        return PartlyCloudy;
      case "02n":
        return PartlyCloudyNight;
      case "03d":
        return Cloudy;
      case "03n":
        return Cloudy;
      case "04d":
        return Overcast;
      case "04n":
        return Overcast;
      case "09d":
        return Rain;
      case "09n":
        return Rain;
      case "10d":
        return RainDay;
      case "10n":
        return RainNight;
      case "11d":
        return Thunderstorm;
      case "11n":
        return Thunderstorm;
      case "13d":
        return Snow;
      case "13n":
        return Snow;
      case "50d":
        return Mist;
      case "50n":
        return Mist;
      default:
        return Cloudy;
    }
  };

  const getDirection = (angle) => {
    return directions[
      Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8
    ];
  };

  return weather ? (
    <div className="App">
      <Toggle />
      <Routes>
        <Route path="/" element={<AppNav />}>
          <Route
            path=""
            element={
              <Home
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                getDirection={getDirection}
                getImage={getImage}
                weather={weather}
                cities={cities}
                input={input}
                city={city}
                days={days}
              />
            }
          />
          <Route
            path="forecast"
            element={
              <Forecast
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                getDirection={getDirection}
                getImage={getImage}
                weather={weather}
                cities={cities}
                months={months}
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
