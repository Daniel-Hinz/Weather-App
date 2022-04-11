import "./App.css";
import { Forecast } from "./components/forecast";
import { Test } from "./components/test";
import { AppNav } from "./components/app-nav";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppNav />}>
          <Route path="about" element={<div></div>} />
          <Route
            path="forecast"
            element={
              <div>
                <Forecast />
              </div>
            }
          />
          <Route
            path="test"
            element={
              <div>
                <Test />
              </div>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
