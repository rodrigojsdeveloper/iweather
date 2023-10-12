import axios from "axios";

const { API_KEY } = process.env;

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    lang: "en",
    units: "metric",
    appid: API_KEY,
  },
});

export default api;
