import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import hello from "./store";
import "./globals.scss";
// import js tailwindcss/tailwind.config.js
// import tailwindcss/tailwind.config.js
import "tailwindcss/defaultConfig.js";


const store = hello();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //para las buenas pracicas bb <3
  <Provider store={store}>
    <App/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
