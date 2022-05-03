import React from "react";
import Cloudy from "../WeatherIcons/fill/all/cloudy.svg";
import Sun from "../WeatherIcons/fill/all/clear-day.svg";
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
      return Sun;
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
    <div className="weekly-wrapper">
      {weather.daily.map((day, i) => {
        return i > 0 && i < 6 ? (
          <div className="flex" key={i}>
            <div className="flex flex-col p-4 w-full max-w-xs border-white border-solid border-l">
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
                  <div className="font-medium text-sm">Wind</div>
                  <div className="text-sm ">
                    {day.wind_speed} mph
                    {" " + getDirection(day.wind_deg)}
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="font-medium text-sm">Humidity</div>
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
