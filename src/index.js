import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Praktisk from "./components/Praktisk";
import Pamelding from "./components/Pamelding";
import Aktiviteter from "./components/Aktiviteter";
import HomeContainer from "./components/HomeContainer";
import About from "./components/About";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />}></Route>
      <Route path="/" element={<HomeContainer />}>
        {" "}
      </Route>
      <Route path="/praktisk" element={<Praktisk />}>
        {" "}
      </Route>
      <Route path="/pamelding" element={<Pamelding />}>
        {" "}
      </Route>
      <Route path="/aktiviteter" element={<Aktiviteter />}>
        {" "}
      </Route>
      <Route path="/om" element={<About />}>
        {" "}
      </Route>
    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
