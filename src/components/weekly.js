import React from "react";

export const Weekly = ({ getDirection, getImage, weather, months }) => {
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
