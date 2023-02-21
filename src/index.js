import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootRducer from "./services/Reducers/reducers/index";

const store = createStore(rootRducer);
console.log(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
