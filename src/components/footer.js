import React from "react";

import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="pt-8 pb-6 bg-gray-900 text-gray-50 dark:border-t dark:border-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold ">WEATHER APP</h4>
              <h5 className="text-lg mt-0 mb-2 ">
                Built with Tailwind and React
                <br />
                Icons provided by Meteocons and Icons8
              </h5>
              <div>
                <button
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <a href="https://github.com/Daniel-Hinz/Weather-App">
                    <img
                      className="max-w-full"
                      src="https://pngimg.com/uploads/github/github_PNG58.png"
                      alt="icon-img"
                    />
                  </a>
                </button>
                <button
                  className="bg-white shadow-lg h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <a href="https://reactjs.org/">
                    <img
                      className="max-w-full"
                      src="https://iconape.com/wp-content/files/zk/93042/svg/react.svg"
                      alt="icon-img"
                    />
                  </a>
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <a href="https://openweathermap.org/">
                    <img
                      className="w-11/12 rounded-full"
                      src="https://pbs.twimg.com/profile_images/1173919481082580992/f95OeyEW_400x400.jpg"
                      alt="icon-img"
                    />
                  </a>
                </button>
                <button
                  className="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <a href="https://tailwindcss.com/">
                    <img
                      className=" w-11/12 max-w-full m-auto"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
                      alt="icon-img"
                    />
                  </a>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex items-top mb-6">
                <div className="w-full w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-sm font-semibold mb-2">
                    Website Links
                  </span>
                  <ul className="list-unstyled pl-2">
                    <li>
                      <Link
                        className=" hover: font-semibold block pb-2 text-sm"
                        to="/about"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        className=" hover: font-semibold block pb-2 text-sm"
                        to="/forecast"
                      >
                        Forecast
                      </Link>
                    </li>
                    <li>
                      <Link
                        className=" hover: font-semibold block pb-2 text-sm"
                        to="/"
                      >
                        Home
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase  text-sm font-semibold mb-2">
                    Resources
                  </span>
                  <ul className="list-unstyled pl-2">
                    <li>
                      <a
                        className=" hover: font-semibold block pb-2 text-sm"
                        href="https://github.com/Daniel-Hinz/Weather-App"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className=" hover: font-semibold block pb-2 text-sm"
                        href="https://reactjs.org/"
                      >
                        React
                      </a>
                    </li>
                    <li>
                      <a
                        className=" hover: font-semibold block pb-2 text-sm"
                        href="https://tailwindui.com/documentation"
                      >
                        Tailwind
                      </a>
                    </li>
                    <li>
                      <a
                        className=" hover: font-semibold block pb-2 text-sm"
                        href="https://openweathermap.org/api"
                      >
                        Open Weather API
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div>
            <div className="w-full px-4 mx-auto text-center">
              <div className="text-sm  font-semibold py-1">
                <p>Modern Web App Final Project</p>
                Copyright © <span id="get-current-year">2021</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
