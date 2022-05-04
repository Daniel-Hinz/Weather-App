import React from "react";
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

import Wind from "../WeatherIcons/line/all/wind.svg";
import Humidity from "../WeatherIcons/fill/all/raindrop.svg";

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

export const Weekly = ({ weather }) => {
  return (
    <div className="flex justify-center w-full items-center">
      {weather.daily.map((day, i) => {
        return i > 0 && i < 6 ? (
          <div className="flex w-full" key={i}>
            <div className="flex flex-col p-4 w-full max-w-xs border-black border-solid border-l border-r">
              <div className="font-bold text-xl">
                {months[new Date(day.dt * 1000).getMonth()] +
                  " " +
                  new Date(day.dt * 1000).getDate()}
              </div>
              <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
                <img src={getImage(day.weather[0].icon)} alt="weather-img" />
              </div>
              <div className="flex flex-row items-center justify-center mt-6">
                <div className="font-medium text-6xl">
                  {Math.floor(((day.temp.day - 273.15) * 9) / 5 + 32)}°
                </div>
                <div className="flex flex-col items-center ml-6">
                  <div>{day.weather[0].main}</div>
                  <div className="mt-1">
                    <span className="text-sm">
                      <i className="far fa-long-arrow-up"></i>
                    </span>
                    <span className="text-sm font-light ">
                      {Math.floor(((day.temp.max - 273.15) * 9) / 5 + 32)}°
                    </span>
                  </div>
                  <div>
                    <span className="text-sm">
                      <i className="far fa-long-arrow-down"></i>
                    </span>
                    <span className="text-sm font-light ">
                      {Math.floor(((day.temp.min - 273.15) * 9) / 5 + 32)}°
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-evenly mt-6">
                <div className="flex flex-col items-center">
                  <div className="font-medium text-sm">
                    <img className="w-10 h-10" src={Wind} />
                  </div>
                  <div className="text-sm ">
                    {day.wind_speed} mph
                    {" " + getDirection(day.wind_deg)}
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="font-medium text-sm">
                    <img className="w-10 h-10" src={Humidity} />
                  </div>
                  <div className="text-sm ">{day.humidity}%</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <React.Fragment key={i}></React.Fragment>
        );
      })}
    </div>
  );
};
