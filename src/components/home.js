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

export const Home = ({ weather }) => {
  const [current, setCurrent] = useState(weather.current);
  const [days, setDays] = useState(weather.daily);
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([{}]);
  const key = `32101373489de8753d77e5b434948ffe`;

  const submit = async (e) => {
    e.preventDefault();
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=fahrenheit&appid=${key}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      });
    console.log(city, weatherData);
  };

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
    <div>
      <div className="search-container">
        <form onSubmit={submit} className="search">
          <input
            type="text"
            placeholder="What location do you want to know the weather for?"
            alt="background"
            onChange={(e) => {
              setCity(e.target.value);
            }}
            value={city}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="weekly-comp">
        <div className="today-details">
          <div>
            <h1 className="location">Kent, OH</h1>
            <p className="today-status">{current.weather[0].main}</p>
            <p className="humidity">{current.humidity}% Humidity</p>
            <p>
              {getDirection(current.wind_deg) + " " + current.wind_speed} mph
              Wind
            </p>
            <img
              className="status-img"
              src={`http://openweathermap.org/img/wn/${current.weather[0].icon}.png`}
              alt="weather icon"
            />
          </div>
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
                    <img
                      className="status-img"
                      src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                      alt="weather icon"
                    />
                  </div>
                </div>
                <div className="middle-third">
                  <div className="flex">
                    <p className="max-temp fifty-percent">
                      {Math.floor(((day.temp.max - 273.15) * 9) / 5 + 34)}°
                    </p>
                    <div className="mini-img-container fifty-percent">
                      <img
                        className="mini-status-img"
                        src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                        alt="weather icon"
                      />
                    </div>
                  </div>
                  <div className="flex">
                    <p className="min-temp fifty-percent">
                      {Math.floor(((day.temp.min - 273.15) * 9) / 5 + 30)}°
                    </p>
                    <div className="mini-img-container fifty-percent">
                      <img
                        className="mini-status-img"
                        src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                        alt="weather icon"
                      />
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
                      {new Date(day.sunset * 1000).getHours()}
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
