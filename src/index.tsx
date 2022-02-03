import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import createServer from "./server";

if (process.env.NODE_ENV === "development") {
  createServer();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
