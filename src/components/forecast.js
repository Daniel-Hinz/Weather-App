import React from "react";
import SearchIcon from "../imgs/icons8-search-64.png";
import Sun from "../WeatherIcons/fill/all/clear-day.svg";
import { Weekly } from "./weekly";

export const Forecast = () => {
  return (
    <>
      <div classNameName="FullPage min-h-screen ">
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

        <main className="Forecast">
          <div className="w-10/12 mb-16 mt-6 text-white m-auto bg-gradient-to-b from-teal-500 to-cyan-700 rounded-xl">
            <div className="flex flex-wrap w-full">
              <div className=" w-2/4 flex rounded-lg bg-auto">
                <div className="w-full bg-blue-400 text-white rounded-tl-xl">
                  <div className="pl-8">
                    <h2 className="font-bold text-3xl leading-none pb-1">
                      Kent, Ohio, United States
                    </h2>
                    <h3 className="leading-none pb-2 pl-1">May 1st</h3>
                  </div>
                  <div>
                    <img className="w-96 m-auto" src={Sun} />
                  </div>
                  <div className="pl-8">
                    <strong className="text-6xl block font-weight-bolder">
                      29ºC
                    </strong>
                    <b className="text-2xl block font-bold">Sunny</b>
                  </div>
                </div>
              </div>

              <div className="w-2/4 flex ml-0">
                <div className="bg-gray-800 text-white p-8 w-full rounded-tr-xl">
                  <div className="flex justify-between w-64 mb-4 w-full">
                    <div className="w-auto font-bold uppercase text-90">
                      Precipitation
                    </div>
                    <div className="w-auto text-right">10 %</div>
                  </div>
                  <div className="flex justify-between w-64 mb-4 w-full">
                    <div className="w-auto font-bold uppercase text-90">
                      Humidity
                    </div>
                    <div className="w-auto text-right">29 %</div>
                  </div>
                  <div className="flex justify-between w-64 mb-8 w-full">
                    <div className="w-auto font-bold uppercase text-90">
                      Wind
                    </div>
                    <div className="w-auto text-right">12 Mph</div>
                  </div>
                </div>
              </div>
            </div>

            <Weekly />
          </div>
        </main>
      </div>
    </>
  );
};
