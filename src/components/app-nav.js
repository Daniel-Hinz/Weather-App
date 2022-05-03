import { Link, Outlet } from "react-router-dom";

export const AppNav = () => {
  return (
    <>
      <nav>
        <ul className="flex justify-center bg-gray-900 text-gray-50 uppercase p-6 mb-6 h-24 dark:bg-white dark:text-gray-800">
          <li className="mt-3 text-xl">
            <Link to="/">Home</Link>
          </li>
          <div className="w-72 h-28 rounded-full bg-white p-6 pt-8 mx-24 -mt-3 border-4 border-solid text-gray-900 text-center text-3xl border-gray-900 dark:border-white dark:text-gray-50 dark:bg-gray-900">
            <Link to="/forecast">Forecast</Link>
          </div>
          <li className="mt-3 text-xl">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};
