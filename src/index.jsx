import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Modal from "react-modal";
import App from "./App";
import AppContextProvider from "./store/AppContext";
import "./Stylesheets/main.scss";
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
Modal.setAppElement("#root");

root.render(
  <AppContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppContextProvider>
);
