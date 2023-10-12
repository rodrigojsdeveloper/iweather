import { IGetWeatherByCity, ITodayProps } from "@/interfaces";
import weathers from "@/utils/weather-icons";
import api from "./api";

const getWeatherByCity = async ({ lat, lon }: IGetWeatherByCity) => {
  const { data } = await api.get(
    `forecast?lat=${lat}&lon=${lon}&appid=3d29a3d19ffccad965f9c63d15f593c1`
  );

  const weatherData = data.list[0];
  const { main, weather, wind, pop } = weatherData;

  const weatherDescription = weather[0].description;
  const weatherMain = weather[0].main.toLowerCase();

  const today: ITodayProps = {
    weather: {
      temp: Math.ceil(main.temp),
      temp_min: Math.floor(main.temp_min),
      temp_max: Math.ceil(main.temp_max),
      description: weatherDescription,
      details: "weathers[weatherMain]",
    },
    details: {
      feels_like: Math.floor(main.feels_like),
      probability: pop * 100,
      wind_speed: wind.speed,
      humidity: main.humidity,
      temp_kf: Math.floor(main.temp_kf),
    },
  };
  console.log(today)
  return today;
};

export default getWeatherByCity;
