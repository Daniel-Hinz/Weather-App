import { Link, Outlet } from "react-router-dom";

export const AppNav = () => {
  return (
    <>
      <nav>
        <h2>Weather App</h2>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/forecast">Forecast</Link>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};
