import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./scripts/reportWebVitals";
import Home from "./components/HomeDogList";
import { DogForm } from "./components/dogs/DogForm";
import { DogDetails } from "./components/dogs/DogDetails";
import Walkers from "./components/walkers/WalkerList";
import Cities from "./components/cities/CityList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path ="/walkers" element={<Walkers />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/dogform" element={<DogForm />} />
        <Route path="/dogs/:id" element={<DogDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
