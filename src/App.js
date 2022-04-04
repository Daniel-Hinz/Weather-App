import "./App.css";
import { AppNav } from "./components/app-nav";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppNav />}>
          <Route path="about" element={<div></div>} />
          <Route path="forecast" element={<div></div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
