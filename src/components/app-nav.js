import { Link, Outlet } from "react-router-dom";

export const AppNav = () => {
  return (
    <>
      <nav className="container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <div id="logo">
            <h2>Weather App</h2>
          </div>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};
