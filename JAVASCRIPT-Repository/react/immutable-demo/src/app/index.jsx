import React from "react";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import routes from "./route";
import store from './store'

function App(props) {
  return (
    <Provider store={store}>
      <HashRouter className="App">App{renderRoutes(routes)}</HashRouter>
    </Provider>
  );
}

export default App;
