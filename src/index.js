import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import CounterProvider from "./context/CounterProvider";
import SideBarProvider from "./context/SideBarProvider";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// BrowserRoute provider of routing in react js
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <CounterProvider>
        <SideBarProvider>
          <App />
        </SideBarProvider>
      </CounterProvider>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
