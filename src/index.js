import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Router } from "react-router-dom";
import History from "./lib/History";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <Router history={History}>
      <App />
    </Router>
  </Provider>,

  document.getElementById("root")
);
