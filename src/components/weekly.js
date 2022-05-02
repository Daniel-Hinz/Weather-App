import React from "react";
// import Cloudy from "../imgs/icons8-partly-cloudy-day-96.png";
import Cloudy from "../WeatherIcons/fill/all/cloudy.svg";
import Sun from "../WeatherIcons/fill/all/clear-day.svg";
import Rainy from "../WeatherIcons/fill/all/rain.svg";
import Thunderstorm from "../WeatherIcons/fill/all/thunderstorms-rain.svg";
import PartlyCloudy from "../WeatherIcons/fill/all/partly-cloudy-day.svg";

export const Weekly = () => {
  return (
    <>
      <div class="flex">
        <div class="flex flex-col p-4 w-full max-w-xs border-white border-solid border-l">
          <div class="font-bold text-xl">May 2nd</div>
          <div class="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
            <img src={Cloudy} />
          </div>
          <div class="flex flex-row items-center justify-center mt-6">
            <div class="font-medium text-6xl">24°</div>
            <div class="flex flex-col items-center ml-6">
              <div>Cloudy</div>
              <div class="mt-1">
                <span class="text-sm">
                  <i class="far fa-long-arrow-up"></i>
                </span>
                <span class="text-sm font-light ">28°F</span>
              </div>
              <div>
                <span class="text-sm">
                  <i class="far fa-long-arrow-down"></i>
                </span>
                <span class="text-sm font-light ">20°F</span>
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-between mt-6">
            <div class="flex flex-col items-center">
              <div class="font-medium text-sm">Wind</div>
              <div class="text-sm ">9k/h</div>
            </div>
            <div class="flex flex-col items-center">
              <div class="font-medium text-sm">Humidity</div>
              <div class="text-sm ">68%</div>
            </div>
            <div class="flex flex-col items-center">
              <div class="font-medium text-sm">Visibility</div>
              <div class="text-sm ">10km</div>
            </div>
          </div>
        </div>
        <div class="flex flex-col p-4 w-full max-w-xs border-white border-solid border-l">
          <div class="font-bold text-xl">May 3rd</div>
          <div class="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
            <img src={Sun} />
          </div>
          <div class="flex flex-row items-center justify-center mt-6">
            <div class="font-medium text-6xl">24°</div>
            <div class="flex flex-col items-center ml-6">
              <div>Cloudy</div>
              <div class="mt-1">
                <span class="text-sm">
                  <i class="far fa-long-arrow-up"></i>
                </span>
                <span class="text-sm font-light ">28°F</span>
              </div>
              <div>
                <span class="text-sm">
                  <i class="far fa-long-arrow-down"></i>
                </span>
                <span class="text-sm font-light ">20°F</span>
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-between mt-6">
            <div class="flex flex-col items-center">
              <div class="font-medium text-sm">Wind</div>
              <div class="text-sm ">9k/h</div>
            </div>
            <div class="flex flex-col items-center">
              <div class="font-medium text-sm">Humidity</div>
              <div class="text-sm ">68%</div>
            </div>
            <div class="flex flex-col items-center">
              <div class="font-medium text-sm">Visibility</div>
              <div class="text-sm ">10km</div>
            </div>
          </div>
        </div>
        <div class="flex flex-col p-4 w-full max-w-xs border-white border-solid border-l">
          <div class="font-bold text-xl">May 4th</div>
          <div class="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
            <img src={Rainy} />
          </div>
          <div class="flex flex-row items-center justify-center mt-6">
            <div class="font-medium text-6xl">24°</div>
            <div class="flex flex-col items-center ml-6">
              <div>Cloudy</div>
              <div class="mt-1">
                <span class="text-sm">
                  <i class="far fa-long-arrow-up"></i>
                </span>
                <span class="text-sm font-light ">28°F</span>
              </div>
              <div>
                <span class="text-sm">
                  <i class="far fa-long-arrow-down"></i>
                </span>
                <span class="text-sm font-light ">20°F</span>
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-between mt-6">
            <div class="flex flex-col items-center">
              <div class="font-medium text-sm">Wind</div>
              <div class="text-sm ">9k/h</div>
            </div>
            <div class="flex flex-col items-center">
              <div class="font-medium text-sm">Humidity</div>
              <div class="text-sm ">68%</div>
            </div>
            <div class="flex flex-col items-center">
              <div class="font-medium text-sm">Visibility</div>
              <div class="text-sm ">10km</div>
            </div>
          </div>
        </div>
        <div class="flex flex-col p-4 w-full max-w-xs border-white border-solid border-l">
          <div class="font-bold text-xl">May 5th</div>
          <div class="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
            <img src={Thunderstorm} />
          </div>
          <div class="flex flex-row items-center justify-center mt-6">
            <div class="font-medium text-6xl">24°</div>
            <div class="flex flex-col items-center ml-6">
              <div>Cloudy</div>
              <div class="mt-1">
                <span class="text-sm">
                  <i class="far fa-long-arrow-up"></i>
                </span>
                <span class="text-sm font-light ">28°F</span>
              </div>
              <div>
                <span class="text-sm">
                  <i class="far fa-long-arrow-down"></i>
                </span>
                <span class="text-sm font-light ">20°F</span>
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-between mt-6">
            <div class="flex flex-col items-center">
              <div class="font-medium text-sm">Wind</div>
              <div class="text-sm ">9k/h</div>
            </div>
            <div class="flex flex-col items-center">
              <div class="font-medium text-sm">Humidity</div>
              <div class="text-sm ">68%</div>
            </div>
            <div class="flex flex-col items-center">
              <div class="font-medium text-sm">Visibility</div>
              <div class="text-sm ">10km</div>
            </div>
          </div>
        </div>
        <div class="flex flex-col p-4 w-full max-w-xs border-white border-solid border-l">
          <div class="font-bold text-xl">May 6th</div>
          <div class="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
            <img src={PartlyCloudy} />
          </div>
          <div class="flex flex-row items-center justify-center mt-6">
            <div class="font-medium text-6xl">24°</div>
            <div class="flex flex-col items-center ml-6">
              <div>Cloudy</div>
              <div class="mt-1">
                <span class="text-sm">
                  <i class="far fa-long-arrow-up"></i>
                </span>
                <span class="text-sm font-light ">28°F</span>
              </div>
              <div>
                <span class="text-sm">
                  <i class="far fa-long-arrow-down"></i>
                </span>
                <span class="text-sm font-light ">20°F</span>
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-between mt-6">
            <div class="flex flex-col items-center">
              <div class="font-medium text-sm">Wind</div>
              <div class="text-sm ">9k/h</div>
            </div>
            <div class="flex flex-col items-center">
              <div class="font-medium text-sm">Humidity</div>
              <div class="text-sm ">68%</div>
            </div>
            <div class="flex flex-col items-center">
              <div class="font-medium text-sm">Visibility</div>
              <div class="text-sm ">10km</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
