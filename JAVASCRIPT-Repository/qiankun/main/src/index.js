import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { registerMicroApps, start } from "qiankun";

const render = ({ loading = false } = {}) =>
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
render();
const loader = (loading) => render({ loading });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
registerMicroApps([
  {
    name: "demo1", // app name registered
    entry: "//localhost:5001/demo1/index.html",
    container: "#demo1",
    loader,
    activeRule: "/demo1",
  },
  {
    name: "vue app",
    entry: "//localhost:7102",
    container: "#demo1",
    loader,
    activeRule: "/demo2",
  },
]);
start();
