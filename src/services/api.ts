import "dotenv/config.js";
import axios from "axios";

const { API_KEY } = process.env;

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/3.0/",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    lang: "en",
    units: "metric",
    appid: API_KEY,
  },
});

export default api;
