import { Link, Outlet } from "react-router-dom";
import { Forecast } from "./forecast";

export const AppNav = () => {
  return (
    <>
      <nav>
        <ul className="flex justify-center bg-gray-900 text-gray-50 uppercase p-6 h-24 dark:bg-slate-800 dark:border-b dark:border-white">
          <li className="mt-3 text-xl">
            <Link to="/forecast">Forecast</Link>
          </li>
          <li className="w-72 h-28 rounded-full bg-white p-6 pt-8 mx-24 -mt-3 border-4 border-solid text-gray-900 text-center border-gray-900 dark:border-white dark:text-gray-50 dark:bg-gray-900">
            <Link className="text-3xl" to="/">
              Weather App
            </Link>
            <br />
            <Link to="/"> Home</Link>
          </li>
          <li className="mt-3 text-xl">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};
