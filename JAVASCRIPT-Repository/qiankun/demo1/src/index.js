import './public-path'
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const render = (props) => {
  const { container } = props || {};
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    container
      ? container.querySelector("#root")
      : document.getElementById("root")
  );
};

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
export async function bootstrap() {
  console.log("react app bootstraped");
}

export async function mount(props) {
  console.log("demo1 mount props", props);
  render(props);
}

export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById("react15Root"));
}

export async function update(props) {
  console.log("update props", props);
}
