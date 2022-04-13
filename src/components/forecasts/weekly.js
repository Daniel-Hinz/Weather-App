import React from "react";
import { useState, useEffect } from "react";


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

export const Weekly = ({ weather }) => {
  const [days, setDays] = useState(weather.daily);

  const getDirection = (angle) => {
    return directions[
      Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8
    ];
  };

  return (
    <div className="weekly">
      <h1>Forecast</h1>

      <div className="weekly-report">
        {days.map((day, i) => (
          <div className="weekly-report-card" key={i}>
            <p>
              {months[new Date(day.dt * 1000).getMonth()] +
                " " +
                new Date(day.dt * 1000).getDate()}
            </p>
            <p>
              {Math.floor(((day.temp.max - 273.15) * 9) / 5 + 32) +
                "° / " +
                Math.floor(((day.temp.min - 273.15) * 9) / 5 + 32) +
                "°"}
            </p>

            <div className="d-flex">
              <img
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                alt="weather icon"
              />
              <p>{day.weather[0].description}</p>
            </div>

            <div className="d-flex">
              <img
                src={`http://openweathermap.org/img/wn/09d.png`}
                alt="weather icon"
              />
              <p>{day.rain ? day.rain : 0}%</p>
            </div>

            <p>{getDirection(day.wind_deg) + " " + day.wind_speed} mph</p>
          </div>
        ))}
      </div>
    </div>
  );
};
