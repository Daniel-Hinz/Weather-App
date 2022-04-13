export const Footer = () => {
  return (
    <>
      <footer className="container">
        <div id="logo">
          <h2>Weather App</h2>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/forecast">Forecast</Link>
          </li>
          <li>
            <Link to="/test">Test Code</Link>
          </li>
        </ul>
      </footer>
    </>
  );
};
