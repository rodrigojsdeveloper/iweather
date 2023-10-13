"use client";
import Forecast from "@/components/Forecast";
import weathers from "@/utils/weather-icons";
import { useEffect, useState } from "react";
import { IFetch, ITodayProps } from "@/interfaces";
import Details from "@/components/Details";
import Search from "@/components/Search";
import Line from "@/components/Line";
import api from "@/services/api";
import getWeatherByCity from "@/services/getWeatherByCity";

export default function Weather() {
  const [weather, setWeather] = useState<any>();

  const [city, setCity] = useState<any>();

  const [nextDays, setNextDays] = useState<any[]>([]);

  async function fetchWeatherData(lat: number, lon: number) {
    try {
      const weatherData = await getWeatherByCity({ lat, lon });
      setWeather(weatherData.today);
      setNextDays(weatherData.nextDays);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCity = localStorage.getItem("iWeather: city") ?? "";
      const parseCity = JSON.parse(storedCity);

      const { lat, lon } = parseCity.coord;

      fetchWeatherData(lat, lon);

      setCity({
        ...parseCity,
        weatherToday: weather?.weather,
      });
    }
  }, [setCity, weather]);

  return (
    <main className="w-full max-w-1500 flex flex-row justify-between p-5 m-auto gap-4 max-lg:flex-col max-lg:p-2">
      <Search city={city} />
      <div className="w-full flex flex-col gap-4">
        <Details details={weather?.details} />
        <Line />
        <Forecast nextDays={nextDays} />
      </div>
    </main>
  );
}
