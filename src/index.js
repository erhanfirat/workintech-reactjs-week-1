import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import CounterProvider from "./context/CounterContext";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// BrowserRoute provider of routing in react js
root.render(
  <CounterProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </CounterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
