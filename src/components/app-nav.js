import { Link, Outlet } from "react-router-dom";

export const AppNav = () => {
  return (
    <>
      <nav className="container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <div id="logo">
            <h2>Weather App</h2>
          </div>
          <li>
            <Link to="/forecast">Forecast</Link>
          </li>
          <li>
            <Link to="/test">Test Code</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};
