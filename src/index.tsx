import React from "react";
import ReactDOM from "react-dom";
import "./../node_modules/flag-icon-css/css/flag-icon.min.css";
import "./../node_modules/font-awesome/css/font-awesome.min.css";
import App from "./App";
import ContextProvider from "./contexts";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
