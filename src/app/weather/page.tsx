"use client";
import Forecast from "@/components/Forecast";
import weathers from "@/utils/weather-icons";
import { useEffect, useState } from "react";
import { ITodayProps } from "@/interfaces";
import Details from "@/components/Details";
import Search from "@/components/Search";
import Line from "@/components/Line";
import api from "@/services/api";

export default function Weather() {
  const [weather, setWeather] = useState<any>();

  const [city, setCity] = useState<any>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCity = localStorage.getItem("iWeather: city") ?? "";
      const parseCity = JSON.parse(storedCity);

      const { lat, lon } = parseCity.coord;

      api
        .get(
          `forecast?lat=${lat}&lon=${lon}&appid=3d29a3d19ffccad965f9c63d15f593c1`
        )
        .then((response) => {
          const weatherData = response.data.list[0];
          const { main, weather, wind, pop } = weatherData;
          const weatherDescription = weather[0].description;
          const weatherMain = weather[0].main.toLowerCase();

          const today: ITodayProps = {
            weather: {
              temp: Math.ceil(main.temp),
              temp_min: Math.floor(main.temp_min),
              temp_max: Math.ceil(main.temp_max),
              description: weatherDescription,
              details: weathers[weatherMain],
            },
            details: {
              feels_like: Math.floor(main.feels_like),
              probability: pop * 100,
              wind_speed: wind.speed,
              humidity: main.humidity,
              temp_kf: Math.floor(main.temp_kf),
            },
          };

          setWeather(today);

          setCity({
            ...parseCity,
            weatherToday: today.weather,
          });
        })
        .catch((error) => {
          console.error("Erro ao buscar dados de tempo:", error);
        });
    }
  }, []);

  return (
    <main className="w-full max-w-1500 flex flex-row justify-between p-5 gap-4 max-lg:flex-col max-lg:p-2">
      <Search city={city} />
      <div className="w-full flex flex-col gap-4">
        <Details details={weather?.details} />
        <Line />
        <Forecast weather={weather?.weather} />
      </div>
    </main>
  );
}
