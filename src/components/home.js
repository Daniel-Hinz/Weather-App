import React from "react";
import SearchIcon from "../imgs/icons8-search-64.png";

export const Home = ({
  handleSubmit,
  handleChange,
  getImage,
  getDirection,
  weather,
  cities,
  input,
  days,
}) => {
  return (
    <div className="bg-gray-200 pt-12 dark:bg-gray-900 pb-6">
      <form classNameName="Search" onSubmit={handleSubmit}>
        <div className="box pt-6 w-3/4 mx-auto py-8">
          <div className="box-wrapper">
            <div className=" bg-white rounded-full flex items-center w-full p-3 shadow-sm border border-gray-200 drop-shadow">
              <button className="outline-none focus:outline-none">
                <img
                  src={SearchIcon}
                  className=" w-6 text-gray-600 h-5 cursor-pointer"
                  alt="weather icon"
                />
              </button>
              <input
                className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
                placeholder="Search by Location"
                pattern={cities.join("|")}
                onChange={handleChange}
                autoComplete="off"
                name="location"
                type="search"
                list="places"
                x-model="q"
              />
              <datalist id="places">
                {cities.map((input, i) => (
                  <option value={input} key={i}></option>
                ))}
              </datalist>
            </div>
          </div>
        </div>
      </form>
      <div className="flex p-6">
        <div className="w-2/5 shadow-xl p-6 bg-white mr-6 rounded drop-shadow-xl dark:bg-gradient-to-b dark:from-slate-900  dark:to-slate-700 dark:border dark:text-white">
          <h1 className="text-3xl font-semibold uppercase">
            {days[new Date(weather.current.dt * 1000).getDay()]}
          </h1>
          <div>
            <div className="text-gray-500 dark:text-white">
              <p className="font-light text-sm float-left">Today's Weather</p>
              <p className="font-light text-sm float-right">{input}</p>
            </div>
          </div>
          <div>
            <img
              className="m-4"
              src={getImage(weather.current.weather[0].icon)}
              alt="weather icon"
            />
          </div>
          <div className="flex w-4/5 m-auto text-gray-500 dark:text-white">
            <div className="w-1/2 text-center">
              <h2 className="text-5xl font-semibold">
                {Math.floor((weather.current.temp - 273.15) * 9) / 5 + 32}°
              </h2>
              <p className="font-light">{weather.current.weather[0].main}</p>
            </div>
            <div className="w-1/2">
              <p className="font-light">
                {weather.current.weather[0].description}
              </p>
              <p className="font-light">Humidity: {weather.current.humidity}</p>
              <p className="font-light">
                Wind: {weather.current.wind_speed} mph
                {" " + getDirection(weather.current.wind_deg)}
              </p>
              <div className="flex">
                <p className="font-light">
                  Min:
                  {" " +
                    Math.floor(
                      ((weather.daily[0].temp.min - 273.15) * 9) / 5 + 32
                    )}
                  °{" "}
                </p>
                <p className="font-light ml-4">
                  Max:
                  {" " +
                    Math.floor(
                      ((weather.daily[0].temp.max - 273.15) * 9) / 5 + 32
                    )}
                  °
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/5">
          <div className="shadow-xl drop-shadow-xl p-6 bg-white rounded dark:bg-gradient-to-b dark:from-slate-900  dark:to-slate-700 dark:border dark:text-white">
            <h3 className="font-semibold text-xl pb-4">Weekly Weather</h3>
            <div className="flex text-gray-500 dark:text-white">
              {weather.daily.map((day, i) =>
                i > 0 && i < 6 ? (
                  <div className="text-center w-full" key={i}>
                    <p className="font-light">
                      {days[new Date(day.dt * 1000).getDay()]}
                    </p>
                    <img
                      className="w-24 h-24 m-auto"
                      src={getImage(day.weather[0].icon)}
                      alt="weather icon"
                    />
                    <p className="font-light">
                      {Math.floor(((day.temp.day - 273.15) * 9) / 5 + 32)}°
                    </p>
                  </div>
                ) : (
                  <></>
                )
              )}
            </div>
          </div>
          <div className="shadow-xl drop-shadow-xl mt-4 p-6 bg-white flex rounded dark:bg-gradient-to-tr dark:from-slate-900  dark:to-slate-700 dark:border dark:text-white">
            <div>
              <img
                className="dark:border-4 dark:border-white w-11/12"
                src="https://cdn.cnn.com/cnnnext/dam/assets/200721074844-daily-weather-video-heat-severe-storms-tropical-rain-gulf-00003905.jpg"
                alt="weather icon"
              />
            </div>
            <div>
              <p className="leading-relaxed tracking-wide pr-4">
                CNN Digital is the world leader in online news and information
                and seeks to inform, engage and empower the world. Staffed 24
                hours, seven days a week by a dedicated team in CNN bureaus
                around the world, CNN’s digital platforms deliver news from
                almost 4,000 journalists in every corner of the globe.
                <br />
                <a href="https://www.cnn.com/about">
                  <span className="text-cyan-700 dark:text-cyan-400">
                    Read More &gt;&gt;&gt;
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
