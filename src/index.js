import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { ThemeProvider } from "./components/themeContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <body className="bg-white dark:bg-gray-900 transition-all">
          <main>
            <div className="absolute w-full right-0 top-0"></div>
            <App />
          </main>
        </body>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
