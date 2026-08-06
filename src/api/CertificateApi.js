import axios from "axios";

const API = axios.create({
  baseURL: "https://certifypro-1-ptki.onrender.com/api",
});

// Automatically attach JWT token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;