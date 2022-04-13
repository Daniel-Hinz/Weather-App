import React from "react";

export const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="search-container">
          <form class="search">
            <input
              type="text"
              placeholder="What location do you want to know the weather for?"
            />
            <button type="submit">Search</button>
          </form>
        </div>

        <div className="weekly-comp">
          <div class="today-details">
            <div>
              <h1 class="location">Kent, OH</h1>
              <p class="today-status">Sunny</p>
              <p class="humidity">78% Humidity</p>
              <p class="wind">5.15 km/h Wind</p>
            </div>
            <img
              class="today-status-image"
              src="https://cdn-icons-png.flaticon.com/512/2698/2698194.png"
            />
          </div>
          <div className="weekly-container">
            <div className="daily-card first-card">
              <div className="top-third">
                <h4>Tomorrow</h4>
                <div className="flex">
                  <p class="temp">
                    49<sup>o</sup>
                  </p>
                  <img
                    class="status-img"
                    src="https://cdn-icons-png.flaticon.com/512/3351/3351962.png"
                  />
                </div>
              </div>
              <div className="middle-third">
                <div className="flex">
                  <p class="max-temp fifty-percent">
                    39<sup>o</sup>
                  </p>
                  <div className="mini-img-container fifty-percent">
                    <img
                      class="mini-status-img"
                      src="https://cdn-icons-png.flaticon.com/512/3351/3351962.png"
                    />
                  </div>
                </div>
                <div className="flex">
                  <p class="min-temp fifty-percent">
                    29<sup>o</sup>
                  </p>
                  <div className="mini-img-container fifty-percent">
                    <img
                      class="mini-status-img"
                      src="https://cdn-icons-png.flaticon.com/512/3351/3351962.png"
                    />
                  </div>
                </div>
              </div>
              <div className="last-third flex">
                <div className="fifty-percent">
                  <img
                    class="left icon-status-img"
                    src="https://cdn-icons-png.flaticon.com/512/4064/4064415.png"
                  />
                  <p className="left humidity">88%</p>
                </div>

                <div className="fifty-percent">
                  <img
                    class="icon-status-img right"
                    src="https://cdn-icons-png.flaticon.com/512/287/287668.png"
                  />
                  <p className="right sunset">
                    4:56<small>pm</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="daily-card">
              <div className="top-third">
                <h4>Wednesday</h4>
                <div className="flex">
                  <p class="temp">
                    60<sup>o</sup>
                  </p>
                  <img
                    class="status-img"
                    src="https://cdn-icons-png.flaticon.com/512/2698/2698213.png"
                  />
                </div>
              </div>
              <div className="middle-third">
                <div className="flex">
                  <p class="max-temp fifty-percent">
                    67<sup>o</sup>
                  </p>
                  <div className="mini-img-container fifty-percent">
                    <img
                      class="mini-status-img"
                      src="https://cdn-icons-png.flaticon.com/512/2698/2698194.png"
                    />
                  </div>
                </div>
                <div className="flex">
                  <p class="min-temp fifty-percent">
                    49<sup>o</sup>
                  </p>
                  <div className="mini-img-container fifty-percent">
                    <img
                      class="mini-status-img"
                      src="https://cdn-icons-png.flaticon.com/512/2698/2698194.png"
                    />
                  </div>
                </div>
              </div>
              <div className="last-third flex">
                <div className="fifty-percent">
                  <img
                    class="left icon-status-img"
                    src="https://cdn-icons-png.flaticon.com/512/4064/4064415.png"
                  />
                  <p className="left humidity">88%</p>
                </div>

                <div className="fifty-percent">
                  <img
                    class="icon-status-img right"
                    src="https://cdn-icons-png.flaticon.com/512/287/287668.png"
                  />
                  <p className="right sunset">
                    4:56<small>pm</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="daily-card">
              <div className="top-third">
                <h4>Thursday</h4>
                <div className="flex">
                  <p class="temp">
                    53<sup>o</sup>
                  </p>
                  <img
                    class="status-img"
                    src="https://cdn-icons-png.flaticon.com/512/3351/3351962.png"
                  />
                </div>
              </div>
              <div className="middle-third">
                <div className="flex">
                  <p class="max-temp fifty-percent">
                    57<sup>o</sup>
                  </p>
                  <div className="mini-img-container fifty-percent">
                    <img
                      class="mini-status-img"
                      src="https://cdn-icons-png.flaticon.com/512/494/494435.png"
                    />
                  </div>
                </div>
                <div className="flex">
                  <p class="min-temp fifty-percent">
                    45<sup>o</sup>
                  </p>
                  <div className="mini-img-container fifty-percent">
                    <img
                      class="mini-status-img"
                      src="https://cdn-icons-png.flaticon.com/512/3351/3351962.png"
                    />
                  </div>
                </div>
              </div>
              <div className="last-third flex">
                <div className="fifty-percent">
                  <img
                    class="left icon-status-img"
                    src="https://cdn-icons-png.flaticon.com/512/4064/4064415.png"
                  />
                  <p className="left humidity">88%</p>
                </div>

                <div className="fifty-percent">
                  <img
                    class="icon-status-img right"
                    src="https://cdn-icons-png.flaticon.com/512/287/287668.png"
                  />
                  <p className="right sunset">
                    4:56<small>pm</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="daily-card">
              <div className="top-third">
                <h4>Friday</h4>
                <div className="flex">
                  <p class="temp">
                    49<sup>o</sup>
                  </p>
                  <img
                    class="status-img"
                    src="https://cdn-icons-png.flaticon.com/512/3351/3351962.png"
                  />
                </div>
              </div>
              <div className="middle-third">
                <div className="flex">
                  <p class="max-temp fifty-percent">
                    39<sup>o</sup>
                  </p>
                  <div className="mini-img-container fifty-percent">
                    <img
                      class="mini-status-img"
                      src="https://cdn-icons-png.flaticon.com/512/2698/2698213.png"
                    />
                  </div>
                </div>
                <div className="flex">
                  <p class="min-temp fifty-percent">
                    29<sup>o</sup>
                  </p>
                  <div className="mini-img-container fifty-percent">
                    <img
                      class="mini-status-img"
                      src="https://cdn-icons-png.flaticon.com/512/3351/3351962.png"
                    />
                  </div>
                </div>
              </div>
              <div className="last-third flex">
                <div className="fifty-percent">
                  <img
                    class="left icon-status-img"
                    src="https://cdn-icons-png.flaticon.com/512/4064/4064415.png"
                  />
                  <p className="left humidity">88%</p>
                </div>

                <div className="fifty-percent">
                  <img
                    class="icon-status-img right"
                    src="https://cdn-icons-png.flaticon.com/512/287/287668.png"
                  />
                  <p className="right sunset">
                    4:56<small>pm</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="daily-card last-card">
              <div className="top-third">
                <h4>Tomorrow</h4>
                <div className="flex">
                  <p class="temp">
                    49<sup>o</sup>
                  </p>
                  <img
                    class="status-img"
                    src="https://cdn-icons-png.flaticon.com/512/3351/3351962.png"
                  />
                </div>
              </div>
              <div className="middle-third">
                <div className="flex">
                  <p class="max-temp fifty-percent">
                    39<sup>o</sup>
                  </p>
                  <div className="mini-img-container fifty-percent">
                    <img
                      class="mini-status-img"
                      src="https://cdn-icons-png.flaticon.com/512/3351/3351962.png"
                    />
                  </div>
                </div>
                <div className="flex">
                  <p class="min-temp fifty-percent">
                    29<sup>o</sup>
                  </p>
                  <div className="mini-img-container fifty-percent">
                    <img
                      class="mini-status-img"
                      src="https://cdn-icons-png.flaticon.com/512/3351/3351962.png"
                    />
                  </div>
                </div>
              </div>
              <div className="last-third flex">
                <div className="fifty-percent">
                  <img
                    class="left icon-status-img"
                    src="https://cdn-icons-png.flaticon.com/512/4064/4064415.png"
                  />
                  <p className="left humidity">88%</p>
                </div>

                <div className="fifty-percent">
                  <img
                    class="icon-status-img right"
                    src="https://cdn-icons-png.flaticon.com/512/287/287668.png"
                  />
                  <p className="right sunset">
                    4:56<small>pm</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
