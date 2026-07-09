import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import "./index.css";
import App from "./App";
import "@fontsource/parisienne";

// Initialize AOS
AOS.init({
  duration: 900,
  once: true,
  easing: "ease-in-out",
});


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

