import React, { useState } from "react";
import axios from "axios";
import { Weekly } from "./weekly";
import SearchIcon from "../imgs/icons8-search-64.png";
import PartlyCloudy from "../WeatherIcons/fill/all/partly-cloudy-day.svg";

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
      return PartlyCloudy;
    case "01n":
      return PartlyCloudy;
    case "02d":
      return PartlyCloudy;
    case "02n":
      return PartlyCloudy;
    case "03d":
      return PartlyCloudy;
    case "03n":
      return PartlyCloudy;
    case "04d":
      return PartlyCloudy;
    case "04n":
      return PartlyCloudy;
    case "09d":
      return PartlyCloudy;
    case "09n":
      return PartlyCloudy;
    case "10d":
      return PartlyCloudy;
    case "10n":
      return PartlyCloudy;
    case "11d":
      return PartlyCloudy;
    case "11n":
      return PartlyCloudy;
    case "13d":
      return PartlyCloudy;
    case "13n":
      return PartlyCloudy;
    case "50d":
      return PartlyCloudy;
    case "50n":
      return PartlyCloudy;
    default:
      return PartlyCloudy;
  }
};
const getDirection = (angle) => {
  return directions[
    Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8
  ];
};

export const Forecast = ({
  locationKey,
  weatherKey,
  setCity,
  setInput,
  setLat,
  setLon,
  weather,
  input,
  city,
}) => {
  const [autocompleteCities, setAutocompleteCities] = useState([]);

  const handleChange = async (e) => {
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
    setInput(city);
  };

  return (
    <>
      <div className="FullPage min-h-screen ">
        <form className="Search" onSubmit={handleSubmit}>
          <div className="box pt-6 w-3/4 mx-auto py-8">
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
                  onChange={handleChange}
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
          <div className="w-10/12 mb-16 mt-6 text-white m-auto bg-gradient-to-b from-teal-500 to-cyan-700 rounded-xl">
            <div className="flex flex-wrap w-full">
              <div className=" w-2/4 flex rounded-lg bg-auto">
                <div className="w-full bg-blue-400 text-white rounded-tl-xl">
                  <div className="pl-8">
                    <h2 className="font-bold text-3xl leading-none pb-1">
                      {input}
                    </h2>
                    <h3 className="leading-none pb-2 pl-1">
                      {months[new Date(weather.current.dt * 1000).getMonth()] +
                        " " +
                        new Date(weather.current.dt * 1000).getDate()}
                    </h3>
                  </div>
                  <div>
                    <img
                      className="w-96 m-auto"
                      src={getImage(weather.current.weather[0].icon)}
                      alt="weather-img"
                    />
                  </div>
                  <div className="pl-8">
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
              </div>

              <div className="w-2/4 flex ml-0">
                <div className="bg-gray-800 text-white p-8 w-full rounded-tr-xl">
                  <div className="flex justify-between mb-4 w-full">
                    <div className="w-auto font-bold uppercase text-90">
                      Sunrise
                    </div>
                    <div className="w-auto text-right">
                      {new Date(weather.current.sunrise * 1000).getHours() > 12
                        ? new Date(weather.current.sunrise * 1000).getHours() -
                          12
                        : new Date(weather.current.sunrise * 1000).getHours()}
                      {new Date(weather.current.sunrise * 1000).getMinutes() <
                      10
                        ? ":0"
                        : ":"}
                      {new Date(weather.current.sunrise * 1000).getMinutes()} am
                    </div>
                  </div>
                  <div className="flex justify-between mb-4 w-full">
                    <div className="w-auto font-bold uppercase text-90">
                      Sunset
                    </div>
                    <div className="w-auto text-right">
                      {new Date(weather.current.sunset * 1000).getHours() > 12
                        ? new Date(weather.current.sunset * 1000).getHours() -
                          12
                        : new Date(weather.current.sunset * 1000).getHours()}
                      {new Date(weather.current.sunset * 1000).getMinutes() < 10
                        ? ":0"
                        : ":"}
                      {new Date(weather.current.sunset * 1000).getMinutes()} pm
                    </div>
                  </div>
                  <div className="flex justify-between mb-4 w-full">
                    <div className="w-auto font-bold uppercase text-90">
                      Feels Like
                    </div>
                    <div className="w-auto text-right">
                      {Math.floor(
                        ((weather.current.feels_like - 273.15) * 9) / 5 + 32
                      )}
                      °
                    </div>
                  </div>
                  <div className="flex justify-between mb-4 w-full">
                    <div className="w-auto font-bold uppercase text-90">
                      Pressure
                    </div>
                    <div className="w-auto text-right">
                      {weather.current.pressure}
                    </div>
                  </div>
                  <div className="flex justify-between mb-4 w-full">
                    <div className="w-auto font-bold uppercase text-90">
                      Humidity
                    </div>
                    <div className="w-auto text-right">
                      {weather.current.humidity} %
                    </div>
                  </div>
                  <div className="flex justify-between mb-4 w-full">
                    <div className="w-auto font-bold uppercase text-90">
                      Dew Point
                    </div>
                    <div className="w-auto text-right">
                      {weather.current.dew_point}
                    </div>
                  </div>
                  <div className="flex justify-between mb-4 w-full">
                    <div className="w-auto font-bold uppercase text-90">
                      UV index
                    </div>
                    <div className="w-auto text-right">
                      {weather.current.uvi}
                    </div>
                  </div>
                  <div className="flex justify-between mb-4 w-full">
                    <div className="w-auto font-bold uppercase text-90">
                      Clouds
                    </div>
                    <div className="w-auto text-right">
                      {weather.current.clouds}
                    </div>
                  </div>
                  <div className="flex justify-between mb-4 w-full">
                    <div className="w-auto font-bold uppercase text-90">
                      Visibility
                    </div>
                    <div className="w-auto text-right">
                      {weather.current.visibility}
                    </div>
                  </div>
                  <div className="flex justify-between mb-4 w-full">
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

            <Weekly
              getDirection={getDirection}
              getImage={getImage}
              weather={weather}
              months={months}
            />
          </div>
        </main>
      </div>
    </>
  );
};
