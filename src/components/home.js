import React from "react";
import Sun from "../WeatherIcons/fill/all/clear-day.svg";
import SearchIcon from "../imgs/icons8-search-64.png";

export const Home = () => {
  return (
    <div className="bg-gray-200 pt-12 dark:bg-gray-900">
      <form classNameName="Search">
        <div className="box pt-6 w-3/4 mx-auto py-8">
          <div className="box-wrapper">
            <div className=" bg-white rounded-full flex items-center w-full p-3 shadow-sm border border-gray-200">
              <button className="outline-none focus:outline-none">
                <img
                  src={SearchIcon}
                  className=" w-6 text-gray-600 h-5 cursor-pointer"
                />
              </button>
              <input
                type="search"
                placeholder="Search by Location"
                x-model="q"
                className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
              />
              <div className="select border-l border-solid border-gray-700">
                <select
                  name=""
                  id=""
                  x-model="image_type"
                  className="text-sm outline-none focus:outline-none bg-transparent"
                >
                  <option value="all" selected>
                    Metric
                  </option>
                  <option value="photo">Celcius</option>
                  <option value="illustration">Fareneheit</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="flex p-6">
        <div className="w-2/5 shadow-lg p-6 bg-white mr-6">
          <h1 className="text-3xl font-semibold uppercase">Monday</h1>
          <div>
            <div>
              <p className="font-light text-gray-500 text-sm float-left">
                Today's Weather
              </p>
              <p className="font-light text-gray-500 text-sm float-right">
                Kent, 04, May, 2022
              </p>
            </div>
          </div>
          <div>
            <img src={Sun} />
          </div>
          <div className="flex w-4/5 m-auto">
            <div className="w-1/2 text-center">
              <h2 className="text-5xl font-semibold">21°</h2>
              <p className="font-light text-gray-500">Sunny</p>
            </div>
            <div className="w-1/2">
              <p className="font-light text-gray-500">Mostly Clear</p>
              <p className="font-light text-gray-500">Humidity</p>
              <p className="font-light text-gray-500">Wind</p>
              <div className="flex">
                <p className="font-light text-gray-500">Min:</p>
                <p className="font-light text-gray-500 ml-4">Max:</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/5">
          <div className="shadow-lg p-6 bg-white">
            <h3 className="font-semibold text-xl pb-4">Weekly Weather</h3>
            <div className="flex">
              <div className="text-center w-full">
                <p className="font-light text-gray-500">Tuesday</p>
                <img className="w-24 h-24 m-auto" src={Sun} />
                <p className="font-light text-gray-500">21°</p>
              </div>
              <div className="text-center w-full">
                <p className="font-light text-gray-500">Tuesday</p>
                <img className="w-24 h-24 m-auto" src={Sun} />
                <p className="font-light text-gray-500">21°</p>
              </div>
              <div className="text-center w-full">
                <p className="font-light text-gray-500">Tuesday</p>
                <img className="w-24 h-24 m-auto" src={Sun} />
                <p className="font-light text-gray-500">21°</p>
              </div>
              <div className="text-center w-full">
                <p className="font-light text-gray-500">Tuesday</p>
                <img className="w-24 h-24 m-auto" src={Sun} />
                <p className="font-light text-gray-500">21°</p>
              </div>
              <div className="text-center w-full">
                <p className="font-light text-gray-500">Tuesday</p>
                <img className="w-24 h-24 m-auto" src={Sun} />
                <p className="font-light text-gray-500">21°</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
