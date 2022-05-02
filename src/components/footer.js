import React from "react";

export const Footer = () => {
  return (
    <>
      <footer class="pt-8 pb-6 bg-gray-900 text-gray-50">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap text-left lg:text-left">
            <div class="w-full lg:w-6/12 px-4">
              <h4 class="text-3xl font-semibold ">WEATHER APP</h4>
              <h5 class="text-lg mt-0 mb-2 ">
                Built with Tailwind and React
                <br />
                Icons provided by Meteocons and Icons8
              </h5>
              <div>
                <button
                  class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <img
                    className="max-w-full"
                    src="https://pngimg.com/uploads/github/github_PNG58.png"
                  />
                </button>
                <button
                  class="bg-white shadow-lg h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <img
                    className="max-w-full"
                    src="https://iconape.com/wp-content/files/zk/93042/svg/react.svg"
                  />
                </button>
                <button
                  class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <img
                    className="w-11/12 rounded-full"
                    src="https://pbs.twimg.com/profile_images/1173919481082580992/f95OeyEW_400x400.jpg"
                  />
                </button>
                <button
                  class="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <img
                    className=" w-11/12 max-w-full m-auto"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
                  />
                </button>
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
              <div class="flex items-top mb-6">
                <div class="w-full w-4/12 px-4 ml-auto">
                  <span class="block uppercase text-sm font-semibold mb-2">
                    Website Links
                  </span>
                  <ul class="list-unstyled pl-2">
                    <li>
                      <a
                        class=" hover: font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        class=" hover: font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Forecast
                      </a>
                    </li>
                    <li>
                      <a
                        class=" hover: font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="w-full lg:w-4/12 px-4">
                  <span class="block uppercase  text-sm font-semibold mb-2">
                    Resources
                  </span>
                  <ul class="list-unstyled pl-2">
                    <li>
                      <a
                        class=" hover: font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        class=" hover: font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        React
                      </a>
                    </li>
                    <li>
                      <a
                        class=" hover: font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Tailwind
                      </a>
                    </li>
                    <li>
                      <a
                        class=" hover: font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Open Weather API
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr class="my-6 border-blueGray-300" />
          <div>
            <div class="w-full px-4 mx-auto text-center">
              <div class="text-sm  font-semibold py-1">
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
