import { useEffect, useState } from "react";

const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const GetImage = (val) => {
  switch (val) {
    case "01d":
      return (
        <img
          className="status-img"
          src="https://cdn-icons-png.flaticon.com/512/2698/2698194.png"
          alt="weather icon"
        />
      );
    case "01n":
      return (
        <img
          className="status-img"
          src="https://cdn-icons.flaticon.com/png/512/1823/premium/1823324.png?token=exp=1650152461~hmac=f1ee028da812ff45d45efe82fef6add0"
          alt="weather icon"
        />
      );
    case "02d":
      return (
        <img
          className="status-img"
          src="https://cdn-icons-png.flaticon.com/512/7290/7290574.png"
          alt="weather icon"
        />
      );
    case "02n":
      return (
        <img
          className="status-img"
          src="https://cdn-icons-png.flaticon.com/512/5903/5903541.png"
          alt="weather icon"
        />
      );
    case "03d":
      return (
        <img
          className="status-img"
          src="https://cdn-icons-png.flaticon.com/512/1779/1779751.png"
          alt="weather icon"
        />
      );
    case "03n":
      return (
        <img
          className="status-img"
          src="https://cdn-icons-png.flaticon.com/512/1779/1779751.png"
          alt="weather icon"
        />
      );
    case "04d":
      return (
        <img
          className="status-img"
          src="https://cdn-icons-png.flaticon.com/512/494/494435.png"
          alt="weather icon"
        />
      );
    case "04n":
      return (
        <img
          className="status-img"
          src="https://cdn-icons-png.flaticon.com/512/494/494435.png"
          alt="weather icon"
        />
      );
    case "09d":
      return (
        <img
          className="status-img"
          src="https://cdn-icons.flaticon.com/png/512/3236/premium/3236859.png?token=exp=1650153109~hmac=2a2a7d972925e66880a3754963fea619"
          alt="weather icon"
        />
      );
    case "09n":
      return (
        <img
          className="status-img"
          src="https://cdn-icons.flaticon.com/png/512/3236/premium/3236859.png?token=exp=1650153109~hmac=2a2a7d972925e66880a3754963fea619"
          alt="weather icon"
        />
      );
    case "10d":
      return (
        <img
          className="status-img"
          src="https://cdn-icons-png.flaticon.com/512/615/615469.png"
          alt="weather icon"
        />
      );
    case "10n":
      return (
        <img
          className="status-img"
          src="https://cdn-icons.flaticon.com/png/512/3262/premium/3262956.png?token=exp=1650153257~hmac=ee0f3a85815ecfac836500585fbe2d6a"
          alt="weather icon"
        />
      );
    case "11d":
      return (
        <img
          className="status-img"
          src="https://cdn-icons-png.flaticon.com/512/5903/5903459.png"
          alt="weather icon"
        />
      );
    case "11n":
      return (
        <img
          className="status-img"
          src="https://cdn-icons-png.flaticon.com/512/5903/5903459.png"
          alt="weather icon"
        />
      );
    case "13d":
      return (
        <img
          className="status-img"
          src="https://cdn-icons.flaticon.com/png/512/2315/premium/2315309.png?token=exp=1650153628~hmac=9e41d42fb9bd083d7d329b7259c5d962"
          alt="weather icon"
        />
      );
    case "13n":
      return (
        <img
          className="status-img"
          src="https://cdn-icons.flaticon.com/png/512/2315/premium/2315309.png?token=exp=1650153628~hmac=9e41d42fb9bd083d7d329b7259c5d962"
          alt="weather icon"
        />
      );
    case "50d":
      return (
        <img
          className="status-img"
          src="https://cdn-icons-png.flaticon.com/512/3313/3313998.png"
          alt="weather icon"
        />
      );
    case "50n":
      return (
        <img
          className="status-img"
          src="https://cdn-icons-png.flaticon.com/512/3313/3313998.png"
          alt="weather icon"
        />
      );
  }
};

export const Home = ({ weather, city, setInput, onSubmit }) => {
  const [current, setCurrent] = useState(weather.current);
  const [days, setDays] = useState(weather.daily);

  useEffect(() => {
    setCurrent(weather.current);
    setDays(weather.daily);
  }, [weather]);

  const getDirection = (angle) => {
    return directions[
      Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8
    ];
  };

  return (
    <div className="home-container">
      <div className="search-container">
        <form onSubmit={onSubmit} className="search">
          <input
            type="text"
            placeholder="What location do you want to know the weather for?"
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="weekly-comp">
        <div className="today-details flex">
          <div>
            <h1 className="location">{city}</h1>
            <p className="today-status">{current.weather[0].main}</p>
            <p className="humidity">{current.humidity}% Humidity</p>
            <p>
              {getDirection(current.wind_deg) + " " + current.wind_speed} mph
              Wind
            </p>
          </div>
          <div>{GetImage(current.weather[0].icon)}</div>
        </div>
        <div className="weekly-container">
          {days.map((day, i) =>
            i < 5 ? (
              <div className="daily-card" key={i}>
                <div className="top-third">
                  <h4>
                    {months[new Date(day.dt * 1000).getMonth()] +
                      " " +
                      new Date(day.dt * 1000).getDate()}
                  </h4>
                  <div className="flex">
                    <p className="temp">
                      {Math.floor(((day.temp.day - 273.15) * 9) / 5 + 32)}
                    </p>

                    {GetImage(day.weather[0].icon)}
                  </div>
                </div>
                <div className="middle-third">
                  <div className="flex">
                    <p className="max-temp fifty-percent">
                      {Math.floor(((day.temp.max - 273.15) * 9) / 5 + 34)}°
                    </p>
                    <div className="mini-img-container fifty-percent">
                      {GetImage(day.weather[0].icon)}
                    </div>
                  </div>
                  <div className="flex">
                    <p className="min-temp fifty-percent">
                      {Math.floor(((day.temp.min - 273.15) * 9) / 5 + 30)}°
                    </p>
                    <div className="mini-img-container fifty-percent">
                      {GetImage(day.weather[0].icon)}
                    </div>
                  </div>
                </div>
                <div className="last-third flex">
                  <div className="fifty-percent">
                    <img
                      className="left icon-status-img"
                      src="https://cdn-icons-png.flaticon.com/512/4064/4064415.png"
                      alt="left icon"
                    />
                    <p className="left humidity">{day.humidity}%</p>
                  </div>

                  <div className="fifty-percent">
                    <img
                      class="icon-status-img right"
                      src="https://cdn-icons-png.flaticon.com/512/287/287668.png"
                      alt="sunset"
                    />
                    <p className="right sunset">
                      {new Date(day.sunset * 1000).getHours() > 12
                        ? new Date(day.sunset * 1000).getHours() - 12
                        : new Date(day.sunset * 1000).getHours()}
                      {new Date(day.sunset * 1000).getMinutes() < 10
                        ? ":0"
                        : ":"}
                      {new Date(day.sunset * 1000).getMinutes()}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div key={i}></div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
