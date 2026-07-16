import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import AOS from "aos";
import "aos/dist/aos.css";

import "./index.css";
import App from "./App";
import "@fontsource/parisienne";
import { Toaster } from "react-hot-toast";

// Initialize AOS
AOS.init({
  duration: 900,
  once: true,
  easing: "ease-in-out",
});


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
    <App />
    
    <Toaster
    
       position="top-right"
  toastOptions={{
    success: {
      style: {
        background: "#2563eb",
        color: "#fff",
      },
    },
    error: {
      style: {
        background: "#dc2626",
        color: "#fff",
      },
    },
  }}
  />
  </ThemeProvider>
  </BrowserRouter>
);

