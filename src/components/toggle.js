import React from "react";
import { ThemeContext } from "./themeContext.js";
import LightToggle from "../imgs/icons8-modeCrescent-32.png";
import DarkToggle from "../imgs/icons8-modeSun-24.png";

export const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div>
      <div className="absolute top-0 right-0 mt-4 text-center">
        {theme === "dark" ? (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-gray-500 dark:text-gray-300 bg-gray-900 shadow-none p-2 focus:outline-none text-lg rounded-full outline-none ring-transparent cursor-pointer"
          >
            <img
              src={DarkToggle}
              className="w-6 h-6 m-auto"
              alt="weather-img"
            />
            Dark Mode
          </button>
        ) : (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-gray-500 dark:text-gray-300 bg-white focus:outline-none shadow-none p-2 text-lg rounded-full outline-none ring-transparent cursor-pointer"
          >
            <img
              src={LightToggle}
              className="w-6 h-6 m-auto"
              alt="weather-img"
            />
            Light Mode
          </button>
        )}
      </div>
    </div>
  );
};
