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

  const [city, setCity] = useState<any>(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("iWeather: city") ?? "")
      : ""
  );

  const [nextDays, setNextDays] = useState<any[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function fetchWeatherData(lat: number, lon: number) {
    try {
      const weatherData = await getWeatherByCity({ lat, lon, setIsLoading });
      setWeather(weatherData.today);
      setNextDays(weatherData.nextDays);
      setCity((prevCity: any) => ({
        ...prevCity,
        weatherToday: weatherData?.today?.weather,
      }));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const { lat, lon } = city.coord;

    fetchWeatherData(lat, lon);
  }, []);

  return (
    <main className="w-full max-w-1500 flex flex-row justify-between p-5 m-auto gap-4 max-lg:flex-col max-lg:p-2">
      <Search city={city} isLoading={isLoading} />
      <div className="w-full flex flex-col gap-4">
        <Details details={weather?.details} isLoading={isLoading} />
        <Line />
        <Forecast nextDays={nextDays} isLoading={isLoading} />
      </div>
    </main>
  );
}
