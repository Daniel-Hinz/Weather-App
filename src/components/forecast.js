import React from "react";
import { Weekly } from "./weekly";
import SearchIcon from "../imgs/icons8-search-64.png";
import Sunrise from "../WeatherIcons/line/all/sunrise.svg";
import Sunset from "../WeatherIcons/line/all/sunset.svg";

export const Forecast = ({
  handleSubmit,
  handleChange,
  getImage,
  getDirection,
  weather,
  cities,
  months,
  input,
}) => {
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
                  pattern={cities.join("|")}
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
                {cities.map((input, i) => (
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
                    <h2 className="font-bold text-3xl leading-none pb-1">
                      {input}
                    </h2>
                    <div>
                      <strong className="text-6xl block font-weight-bolder">
                        {Math.floor(
                          ((weather.current.temp - 273.15) * 9) / 5 + 32
                        )}
                        °
                      </strong>
                      <b className="text-2xl block font-bold">
                        {weather.current.weather[0].main}
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
                        <p className="font-semibold">
                          Max:{" "}
                          {Math.floor(
                            ((weather.daily[0].temp.max - 273.15) * 9) / 5 + 32
                          )}
                          °
                        </p>
                      </div>
                    </div>
                    <div className="flex w-1/2">
                      <div>
                        <p className="font-semibold">
                          Min:
                          {Math.floor(
                            ((weather.daily[0].temp.min - 273.15) * 9) / 5 + 32
                          )}
                          °
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 float-right">
                    <div className="flex w-1/2 float-right">
                      <img
                        className="w-14 h-14 -mt-4"
                        src={Sunset}
                        alt="weather icon"
                      />
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
                      <img
                        className="w-14 h-14 -mt-4"
                        src={Sunrise}
                        alt="weather icon"
                      />
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
                      °
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
                      {weather.current.humidity} %
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
