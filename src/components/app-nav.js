import { Link, Outlet, useLocation } from "react-router-dom";

export const AppNav = () => {
  const link = useLocation();

  return (
    <>
      <nav>
        <ul className="flex justify-center bg-gray-900 text-gray-50 uppercase p-6 h-24 dark:bg-slate-800 dark:border-b dark:border-white">
          <li className="mt-3 text-xl">
            <Link to={link.pathname === "/" ? "/about" : "/"}>
              {link.pathname === "/" ? "About" : "Home"}
            </Link>
          </li>
          <div className="w-72 h-28 rounded-full bg-white p-6 pt-8 mx-24 -mt-3 border-4 border-solid text-gray-900 text-center text-3xl border-gray-900 dark:border-white dark:text-gray-50 dark:bg-gray-900">
            <Link to={link.pathname}>
              {link.pathname === "/"
                ? "Weather App"
                : link.pathname.substring(1, link.pathname.length)}
            </Link>
          </div>
          <li className="mt-3 text-xl">
            <Link
              to={
                link.pathname === "/"
                  ? "/forecast"
                  : link.pathname === "/about"
                  ? "/forecast"
                  : "/about"
              }
            >
              {link.pathname === "/"
                ? "Forecast"
                : link.pathname === "/about"
                ? "Forecast"
                : "About"}
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};
