"use client";
import { IChildren, IWeatherContextData } from "../interfaces";
import getWeatherByCity from "@/services/getWeatherByCity";
import { createContext, useEffect, useState } from "react";

const WeatherContext = createContext({} as IWeatherContextData);

const WeatherContextProvider = ({ children }: IChildren) => {
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
    <WeatherContext.Provider
      value={{
        city,
        weather,
        nextDays,
        isLoading,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherContextProvider };
