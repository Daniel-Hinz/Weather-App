import React, { useState } from "react";
import { Weekly } from "./weekly";
import axios from "axios";
import SearchIcon from "../imgs/icons8-search-64.png";
import Cloudy from "../WeatherIcons/fill/all/cloudy.svg";
import Sun from "../WeatherIcons/fill/all/clear-day.svg";
import PartlyCloudy from "../WeatherIcons/fill/all/partly-cloudy-day.svg";
import Moon from "../WeatherIcons/fill/all/clear-night.svg";
import PartlyCloudyNight from "../WeatherIcons/fill/all/partly-cloudy-night.svg";
import Rain from "../WeatherIcons/fill/all/rain.svg";
import Overcast from "../WeatherIcons/fill/all/overcast.svg";
import RainDay from "../WeatherIcons/fill/all/partly-cloudy-day-rain.svg";
import RainNight from "../WeatherIcons/fill/all/partly-cloudy-night-rain.svg";
import Thunderstorm from "../WeatherIcons/fill/all/thunderstorms.svg";
import Mist from "../WeatherIcons/fill/all/mist.svg";
import Snow from "../WeatherIcons/fill/all/snow.svg";
import Sunrise from "../WeatherIcons/line/all/sunrise.svg";
import Sunset from "../WeatherIcons/line/all/sunset.svg";

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

export const Forecast = ({ setCity, setLat, setLon, weather, city }) => {
  const [autocompleteCities, setAutocompleteCities] = useState([]);

  const handleOnChange = async (e) => {
    setCity(e.target.value);
    await axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${locationKey}&cachebuster=1625641871908&autocomplete=true&types=place`
      )
      .then(({ data: { features } }) =>
        setAutocompleteCities(features.map((p) => p.place_name))
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
    setCity("");
  };

  return (
    <>
      <div className="FullPage min-h-screen">
        <form className="Search" onSubmit={handleSubmit}>
          <div className="box pt-14 w-3/4 mx-auto py-8">
            <div className="box-wrapper">
              <div className=" bg-white rounded-full flex items-center w-full p-3 shadow-sm border border-gray-200">
                <button className="outline-none focus:outline-none">
                  <img
                    src={SearchIcon}
                    className=" w-6 text-gray-600 h-5 cursor-pointer"
                    alt="weather-img"
                  />
                </button>
                <input
                  className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
                  pattern={autocompleteCities.join("|")}
                  placeholder="Search by Location"
                  onChange={handleOnChange}
                  autoComplete="off"
                  name="location"
                  type="search"
                  list="places"
                  x-model="q"
                />
              </div>
              <datalist id="places">
                {autocompleteCities.map((input, i) => (
                  <option value={input} key={i}></option>
                ))}
              </datalist>
            </div>
          </div>
        </form>

        <main className="Forecast">
          <div className="w-10/12 mb-16 mt-6 text-black shadow-xl drop-shadow-md m-auto bg-gradient-to-b from-slate-300 to-blue-300 rounded-xl dark:bg-gradient-to-t dark:from-blue-900 dark:to-slate-800 dark:text-white border">
            <div className="flex flex-wrap w-full border-dashed border-b border-slate-400">
              <div className=" w-2/4 flex rounded-lg bg-auto">
                <div className="w-full bg-gradient-to-b from-white to-blue-300 dark:bg-cyan-100 text-black rounded-tl-xl dark:bg-gradient-to-t dark:from-blue-900  dark:to-slate-900 dark:text-white">
                  <div className="pl-8">
                    <h2 className="font-bold text-3xl leading-none pb-1 pt-4">
                      {city} ,{" "}
                      <span className="text-base font-normal leading-none pb-2 pl-1">
                        {months[
                          new Date(weather.current.dt * 1000).getMonth()
                        ] +
                          " " +
                          new Date(weather.current.dt * 1000).getDate()}
                      </span>
                    </h2>
                    <div>
                      <strong className="text-6xl block font-weight-bolder">
                        {Math.floor(
                          ((weather.current.temp - 273.15) * 9) / 5 + 32
                        )}
                        °
                      </strong>
                      <b className="text-2xl block font-bold">
                        {weather.current.weather.main}
                      </b>
                    </div>
                  </div>
                  <div>
                    <img
                      className="w-96 mx-auto"
                      src={getImage(weather.current.weather[0].icon)}
                      alt="weather-img"
                    />
                  </div>
                  <div className="w-1/2 pl-6 float-left">
                    <div className="flex w-1/2 float-right">
                      <div>
                        <p className="font-semibold">Max: </p>
                      </div>
                    </div>
                    <div className="flex w-1/2">
                      <div>
                        <p className="font-semibold">Min: </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 float-right">
                    <div className="flex w-1/2 float-right">
                      <img className="w-14 h-14 -mt-4" src={Sunset} />
                      <div>
                        {new Date(weather.current.sunset * 1000).getHours() > 12
                          ? new Date(weather.current.sunset * 1000).getHours() -
                            12
                          : new Date(weather.current.sunset * 1000).getHours()}
                        {new Date(weather.current.sunset * 1000).getMinutes() <
                        10
                          ? ":0"
                          : ":"}
                        {new Date(weather.current.sunset * 1000).getMinutes()}{" "}
                        pm
                      </div>
                    </div>
                    <div className="flex w-1/2">
                      <img className="w-14 h-14 -mt-4" src={Sunrise} />
                      <div>
                        {new Date(weather.current.sunrise * 1000).getHours() >
                        12
                          ? new Date(
                              weather.current.sunrise * 1000
                            ).getHours() - 12
                          : new Date(weather.current.sunrise * 1000).getHours()}
                        {new Date(weather.current.sunrise * 1000).getMinutes() <
                        10
                          ? ":0"
                          : ":"}
                        {new Date(weather.current.sunrise * 1000).getMinutes()}{" "}
                        am
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-2/4 flex ml-0">
                <div className="bg-gradient-to-b from-white to-blue-300 text-black p-8 w-full rounded-tr-xl dark:bg-gradient-to-t dark:from-blue-900  dark:to-slate-900 dark:text-white ">
                  <div className="flex justify-between mb-4 w-full bg-zinc-200 dark:bg-zinc-700 p-2 rounded">
                    <div className="w-auto font-bold uppercase text-90">
                      Feels Like
                    </div>
                    <div className="w-auto text-right">
                      {Math.floor(
                        ((weather.current.feels_like - 273.15) * 9) / 5 + 32
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between mb-4 w-full bg-white dark:bg-zinc-800 p-2 rounded">
                    <div className="w-auto font-bold uppercase text-90">
                      Pressure
                    </div>
                    <div className="w-auto text-right">
                      {weather.current.pressure}
                    </div>
                  </div>
                  <div className="flex justify-between mb-4 w-full bg-zinc-200 dark:bg-zinc-700 p-2 rounded">
                    <div className="w-auto font-bold uppercase text-90">
                      Humidity
                    </div>
                    <div className="w-auto text-right">
                      {weather.current.humidity}
                    </div>
                  </div>
                  <div className="flex justify-between mb-4 w-full bg-white dark:bg-zinc-800 p-2 rounded">
                    <div className="w-auto font-bold uppercase text-90">
                      Dew Point
                    </div>
                    <div className="w-auto text-right">
                      {weather.current.dew_point}
                    </div>
                  </div>
                  <div className="flex justify-between mb-4 w-full bg-zinc-200 dark:bg-zinc-700 p-2 rounded">
                    <div className="w-auto font-bold uppercase text-90">
                      UV index
                    </div>
                    <div className="w-auto text-right">
                      {weather.current.uvi}
                    </div>
                  </div>
                  <div className="flex justify-between mb-4 w-full bg-white dark:bg-zinc-800 p-2 rounded">
                    <div className="w-auto font-bold uppercase text-90">
                      Clouds
                    </div>
                    <div className="w-auto text-right">
                      {weather.current.clouds}
                    </div>
                  </div>
                  <div className="flex justify-between mb-4 w-full bg-zinc-200 dark:bg-zinc-700 p-2 rounded">
                    <div className="w-auto font-bold uppercase text-90">
                      Visibility
                    </div>
                    <div className="w-auto text-right">
                      {weather.current.visibility}
                    </div>
                  </div>
                  <div className="flex justify-between mb-4 w-full bg-white dark:bg-zinc-800 p-2 rounded">
                    <div className="w-auto font-bold uppercase text-90">
                      Wind
                    </div>
                    <div className="w-auto text-right">
                      {weather.current.wind_speed} mph
                      {" " + getDirection(weather.current.wind_deg)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Weekly weather={weather} />
          </div>
        </main>
      </div>
    </>
  );
};
