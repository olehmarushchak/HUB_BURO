import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage.tsx";
import { Portfolio } from "./components/Portfolio/Portfolio.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />

          <Route path="portfolio" element={<Portfolio />} />
      
          <Route path="about-us" element={<HomePage />} />

          <Route path="contacts" element={<HomePage />} />
        </Route>
      </Routes>
    </Provider>
  </Router>
);
