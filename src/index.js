import React from "react";
import ReactDOM from "react-dom/client";
import App from "./container/App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./index.css";
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
