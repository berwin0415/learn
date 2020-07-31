import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { registerMicroApps, start } from "qiankun";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
registerMicroApps([
  {
    name: "react app", // app name registered
    entry: "//localhost:7100",
    container: "#yourContainer",
    activeRule: "/demo1",
  },
  {
    name: "vue app",
    entry: "//localhost:7102",
    container: "#yourContainer2",
    activeRule: "/demo2",
  },
]);
start();
